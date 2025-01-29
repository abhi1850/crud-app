# Full-Stack CRUD Application

This is a full-stack CRUD (Create, Read, Update, Delete) application developed to manage personal information. The backend is connected to a MySQL database (using XAMPP), while the frontend is built using Vite and styled with Material-UI.

---

## Features

- **Backend**:

  - Built using Node.js to interact with a MySQL database.
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
- **MySQL** (database)
- **XAMPP** (local server)

### Frontend:

- **Vite** (React.js-based frontend setup)
- **Material-UI** (MUI) for styling)
- **Axios** (for API communication)

### Table info (Query) :

- **personal_information** Table

```
    CREATE TABLE personal_information (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    occupation VARCHAR(255) NOT NULL,
    website VARCHAR(255) NOT NULL
);
```

- **users** Table

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdminUser tinyint(1) DEFAULT 0
```

### Folder Structure :

```
crud-app
  |-backend
    |-server.js
    |-auth
      |-auth.js
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
      |-store
        |-App.js
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


```

---

## Installation

### Prerequisites:

- XAMPP installed on your system.
- Node.js installed.
- A code editor like VS Code.
- Git (optional).

---

### Clone the Repository:

```bash
git clone https://github.com/abhi1850/crud-app.git
cd crud-app
```
