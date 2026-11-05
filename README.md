Reactivities – Full Stack Activity Management Application

Reactivities is a full-stack web application built using ASP.NET Core Web API, React, and TypeScript. It provides a platform where users can create, discover, manage, and participate in activities.

The project follows a layered architecture to maintain separation of concerns, improve maintainability, and support scalability.

🚀 Technology Stack

Backend

- ASP.NET Core Web API
- C#
- Entity Framework Core
- RESTful API architecture
- JWT Authentication

Frontend

- React 18
- TypeScript
- MobX (State Management)
- Axios (HTTP Client)
- Semantic UI React

Database

- SQLite
- Entity Framework Core

Tools

- Visual Studio
- Visual Studio Code
- Postman
- Git & GitHub

🏗️ Project Architecture

The backend follows a layered architecture with responsibilities separated into different projects.

Reactivities
│
├── API
│   └── Handles HTTP requests and API endpoints
│
├── Application
│   └── Contains application business logic
│
├── Domain
│   └── Contains domain entities and core models
│
├── Infrastructure
│   └── Handles external infrastructure concerns
│
├── Persistence
│   └── Handles database operations and EF Core
│
└── client-app
    └── React frontend application

✨ Key Features

- Activity creation and management
- Browse and discover activities
- User authentication
- User profile management
- Frontend and backend integration
- REST API communication
- Client-side state management
- Database operations using Entity Framework Core

⚙️ Getting Started

Follow these steps to run the application locally.

Prerequisites

Make sure you have installed:

- .NET SDK
- Node.js and npm
- Visual Studio or Visual Studio Code
- Git

1. Clone the Repository

git clone https://github.com/shub1409/Reactivities.git

Navigate to the project directory:

cd Reactivities

2. Run the Backend

Open the solution in Visual Studio or navigate to the API project directory.

Restore dependencies:

dotnet restore

Run the API:

dotnet run

3. Run the Frontend

Open another terminal and navigate to the client application:

cd client-app

Install dependencies:

npm install

Start the React application:

npm start

If the project uses a different npm start script, use the command defined in "package.json".

📂 Architecture Benefits

- Separation of Concerns: Each layer has a clearly defined responsibility.
- Maintainability: Changes can be implemented within individual layers.
- Reusability: Application logic is separated from presentation and infrastructure.
- Scalability: The architecture provides a foundation for extending application functionality.

🎯 Project Objective

The objective of Reactivities is to demonstrate practical full-stack development skills, including:

- Building RESTful APIs using ASP.NET Core.
- Developing responsive frontend applications using React and TypeScript.
- Implementing authentication and authorization.
- Managing application state using MobX.
- Performing database operations using Entity Framework Core.
- Applying layered architecture and clean coding practices.

👨‍💻 Author

Shubham Gupta

GitHub: "@shub1409" (https://github.com/shub1409)

---

⭐ If you find this project interesting, feel free to explore the repository and its implementation.
