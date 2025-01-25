# Silent-Note Passing Protocol

The **Silent-Note Passing Protocol** is a messaging application that allows users to send and receive encrypted notes in a simple, user-friendly interface. Built with React, it features user authentication, message composition, and viewing, all designed to mimic a Gmail experience.

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Setup Instructions](#setup-instructions)
5. [File Structure](#file-structure)
6. [Component Details](#component-details)
7. [Page Flow](#page-flow)
8. [Data Flow](#data-flow)
9. [How to Contribute](#how-to-contribute)
10. [License](#license)

---

## About the Project

The **Silent-Note Passing Protocol** aims to simplify the process of sending and receiving private, encrypted notes between users. The app is designed to have:

- **User authentication** for secure access.
- **Note passing and receiving** capabilities.
- **Inbox and Sent notes views** for easy note management.

---

## Features

- **User Registration**: Sign up with a username and password.
- **User Login**: Secure login system to access the messaging platform.
- **Message Composition**: Write and send messages to other users.
- **Inbox**: View received messages in a sorted list.
- **Sent Notes**: View a history of all sent messages.
- **Note Details**: View detailed information about each message, including sender, recipient, and timestamp
- **Authentication Flow**: Protected routes ensure only logged-in users can access messaging pages.

---

## Tech Stack

- **Frontend**: 
  - React
  - React Router for navigation
  - Axios for HTTP requests
  - Tailwind CSS for styling

- **Backend** 
  - Node.js with Express or Django for handling user authentication and message storage
  - MongoDB or SQL for database storage (messages, users)

---

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your machine.
- A backend API Node.js for note storage.

### 1. Clone the repository

```bash
git clone https://github.com/codegallantx/note_protocol_fe.git
```

### 2. Navigate into the project directory

```bash
cd note_protocol_fe
```

### 3. Install dependencies

```bash
npm install tailwindcss react-router-dom react-icons framer-motion
```

### 4. Run the application

```bash
npm run dev
```

This will start the React application and open it in your browser. Make sure your backend API is running if you're using one for message storage.

---

## File Structure

```plaintext
silent-note-passing-protocol/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Authentication/
│   │   │   ├── RegisterForm.jsx
│   │   │   └── LoginForm.jsx
│   │   ├── Messaging/
│   │   │   ├── MessageInput.jsx
│   │   │   ├── MessageCard.jsx
│   │   │   └── MessageDetails.jsx
│   │   ├── Navbar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── pages/                 # React pages for routes
│   │   ├── RegisterPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── InboxPage.jsx
│   │   ├── SentMessagesPage.jsx
│   │   ├── ComposeMessagePage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point for the app
│   └── tailwind.config.js      # Tailwind CSS config
├── public/
│   ├── index.html
└── package.json
```

---

## Component Details

### **Authentication Components**

1. **RegisterForm**: 
   - Handles user registration (username and password).
   - Sends a `POST` request to the API to create a new user.

2. **LoginForm**:
   - Handles user login (username and password).
   - Sends a `POST` request to authenticate the user and return an auth token.

### **Messaging Components**

1. **MessageInput**:
   - A form for sending messages.
   - Accepts the recipient username and message content.
   - Sends a `POST` request to the API to create a new message.

2. **MessageCard**:
   - Displays a summary of a message (preview, sender/recipient username, timestamp).
   - Used in the `InboxPage` and `SentMessagesPage`.

3. **MessageDetails**:
   - Displays full details of a selected message (sender/recipient, message content, timestamp).
   - Used when a user clicks on a message from either their inbox or sent messages.

### **Navbar/Header**

- Contains navigation links to `Inbox`, `Sent Messages`, and `Logout` (for user logout).

### **ProtectedRoute**

- Protects pages that should only be accessible by authenticated users (e.g., `InboxPage`, `SentMessagesPage`).

---

## Page Flow

1. **Authentication Flow:**
   - User registers on the `RegisterPage`.
   - After logging in on the `LoginPage`, the user is redirected to the `InboxPage`.

2. **Messaging Flow (Recipient's POV):**
   - User views their received messages on the `InboxPage`.
   - Clicking on a message opens the `MessageDetails` component for more details.

3. **Messaging Flow (Sender's POV):**
   - User can compose messages via the `ComposeMessagePage`.
   - User views their sent messages on the `SentMessagesPage`.
   - Clicking on a message opens the `MessageDetails` component for more details.

---

## Data Flow

### **Authentication**

- Custom backend API
- 
### **Message Storage**

- Messages are stored and retrieved from the backend API. Example API endpoints:
  - **POST `/auth/register`**: Register a new user.
  - **POST `/auth/login`**: Log in a user and receive an auth token.
  - **GET `/inbox`**: Fetch received notes for the authenticated user.
  - **GET `/inbox/sent`**: Fetch sent notes for the authenticated user.
  - **POST `/inbox/write`**: Pass a note.

### **Routing**

- Use React Router to handle navigation between pages:
  - `/auth/login`: Login page.
  - `/auth/register`: Registration page.
  - `/inbox`: Inbox page for received notes.
  - `/inbox/sent`: Sent notes page.
  - `/inbox/write`: Page for composing and sending notes.

---

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

---

> PS: This **README.md** provides a comprehensive guide to the **Silent-Note Passing Protocol** project, covering the setup, features, components, data flow, and contribution guidelines. It’s intended to help developers understand how to run the project and contribute to its development.