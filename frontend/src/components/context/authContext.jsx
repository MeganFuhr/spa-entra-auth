
import { createContext, useState, useEffect } from "react";
import { LogLevel, PublicClientApplication } from "@azure/msal-browser";

export const AuthContext = createContext(null)

const msalConfig = {
    auth: {
        clientId: import.meta.env.VITE_AZURE_CLIENT_ID, // Replace with your Azure App Registration Client ID
        authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`, // Replace with your Tenant ID
        redirectUri: window.location.origin,
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

const loginRequest = {
    scopes: ["User.Read"]
};

const msalInstance = new PublicClientApplication(msalConfig);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthorized, setIsAuthorized] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Ensure msalInstance is initialized before use
    useEffect(() => {
        async function initializeMsal() {
            try {
                await msalInstance.initialize(); // Initialize the MSAL instance
                const accounts = msalInstance.getAllAccounts();
                if (accounts.length > 0) {
                    setIsAuthenticated(true);
                    setUser(accounts[0]);
                }

                const response = await msalInstance.handleRedirectPromise();
                if (response) {
                    setIsAuthenticated(true);
                    setUser(response.account);
                }
            } catch (error) {
                console.error(error);
                setError("Login failed: " + error.message);
            }
        }

        initializeMsal();
    }, []);

    const handleLogin = async () => {
        if (!msalInstance) {
            setError("Authentication library not loaded");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await msalInstance.loginPopup(loginRequest);
            await handleLoginSuccess(response);
        } catch (err) {
            console.error(err);
            setError("Login failed: " + (err.errorMessage || err.message));
        } finally {
            setLoading(false);
        }
    };

    const handleLoginSuccess = async (response) => {
        setIsAuthenticated(true);
        // console.log("Login response:", JSON.stringify(response));
        try {
            if (response) {
                setUser({ ...user, response });
                setIsAuthorized(true); // Backend should return `isAuthorized`
            } else if (response.status === 403) {
                setError("You don't have permission to access this application. Please contact your administrator.");
                setIsAuthorized(false);
            } else {
                throw new Error("Failed to verify authorization");
            }
        } catch (err) {
            console.error(err);
            setError("Authorization check failed: " + err.message);
            setIsAuthorized(false);
        }
    };

    const handleLogout = () => {
        if (msalInstance) {
            msalInstance.logoutRedirect();
        }
        setIsAuthenticated(false);
        setIsAuthorized(false);
        setUser(null);
        setError(null);
    };


    return (
        <AuthContext value={{ isAuthenticated, isAuthorized, user, loading, error, handleLogin, handleLogout }}>
            {children}
        </AuthContext>
    )
}

export default AuthProvider;