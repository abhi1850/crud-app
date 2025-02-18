# Full-Stack CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application developed to manage personal information. The backend is connected to a MongoDB cloud, while the frontend is built using Vite and styled with Material-UI.

---

## Features

- **Backend**:

  - Built using Node.js to interact with a MongoDB database.
  - Handles all CRUD operations for managing personal information.
  - API endpoints for:
    - Creating new records.
    - Fetching records.
    - Updating records.
    - Deleting records.

- **Frontend**:
  - Developed using Vite with React.js for a fast and modular application.
  - Material-UI (MUI) is used for modern and responsive styling.
  - Seamless interaction with the backend using Axios.
  - Intuitive and user-friendly interface for CRUD operations.

---

## Tech Stack

### Backend:

- **Node** **&** **Express** (for server-side logic)
- **MongoDB** (database)

### Frontend:

- **Vite** (React.js-based frontend setup)
- **Material-UI** (MUI) for styling)
- **Axios** (for API communication)

### Folder Structure :

````
crud-app
  |-backend
    |-server.js
    |-controllers
      |-authController.js
      |-personalInfoController.js
    |-models
      |-PersonalInfo.js
      |-User.js
    |-routes
      |-authRoutes.js
      |-personalInfoRoutes.js
    |-package.json
    |-package-lock.json

  |-frontend
    |-public
      |-LOGO.jpeg
    |-src
      |-components
        |-Footer.jsx
        |-Header.jsx
        |-Sidebar.jsx
      |-pages
        |-Form.jsx
        |-View.jsx
      |-auth
        |-Login.jsx
        |-Register.jsx
        |-ProectedRoutes.jsx
      |-store
        |-api.js
        |-auth.js
      |-App.css
      |-App.jsx
      |-index.css
      |-main.jsx
      |-.gitignore
      |-eslint.config.js
      |-index.html
      |-package.json
      |-package-lock.json
      |-vite.config.js

    |-package.json
    |-package-lock.json

  |-.gitignore
  |-.prettierrc
  |-README.md


## Installation

### Prerequisites:

- MongoDB cloud cluster.
- Node.js installed.
- A code editor like VS Code.
- Git (optional).

---

### Clone the Repository:

```bash
git clone https://github.com/abhi1850/crud-app.git
cd crud-app
````
