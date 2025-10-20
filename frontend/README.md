# SPA Entra Auth

This project is a React-based single-page application (SPA) that uses Microsoft Authentication Library (MSAL) to integrate with Microsoft Entra ID for secure authentication and authorization.

## Folder Structure

```
frontend/
├── public/                 # Static assets
│   └── vite.svg
├── src/                    # Source code
│   ├── assets/             # Images and other assets
│   │   └── react.svg
│   ├── components/         # React components
│   │   ├── auth/           # Authentication logic
│   │   │   └── authConfig.js
│   │   ├── context/        # Context providers
│   │   │   ├── authContext.jsx
│   │   │   └── themeContext.jsx
│   │   ├── Home/           # Home page components
│   │   │   └── Home.jsx
│   │   └── loginCard/      # Login card component
│   │       └── loginCard.jsx
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── vite.config.js          # Vite configuration
```

## Example .env File

Create a `.env` file in the `frontend/` directory with the following content:

```
VITE_AZURE_CLIENT_ID=your-client-id
VITE_AZURE_TENANT_ID=your-tenant-id
```

Replace `your-client-id` and `your-tenant-id` with your Azure App Registration details.

## How to Start the App

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## MSAL Documentation

For more information on using MSAL, refer to the [official MSAL documentation](https://learn.microsoft.com/en-us/entra/identity-platform/msal-overview).

## Features

- Secure authentication via Microsoft Entra ID
- Light and dark mode toggle
- Persistent login state using MSAL
- Responsive design with Material-UI

## License

This project is licensed under the MIT License.
