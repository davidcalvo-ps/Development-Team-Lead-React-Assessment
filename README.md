# React Users App – Atomic Design Assessment

This project is a small React application that fetches and displays a list of users from a public API.
The application demonstrates clean React architecture, responsive UI design, and component organization using **Atomic Design principles**.

The app retrieves user data from the following API:

https://jsonplaceholder.typicode.com/users

Users are displayed in a responsive card grid, with the ability to search by name and view additional details.

---

# Tech Stack

- React (Vite)
- TypeScript
- CSS Modules
- Fetch API
- Atomic Design architecture

---

# Features

### Core Features

- Fetch users from a public API
- Display users in a responsive card grid
- Show the following information for each user:
  - Name
  - Email
  - Company name
- Search box to filter users by name
- Clean and reusable component structure

### Additional Features (Extra Credit)

- Sorting users by name or company
- Sidebar panel showing detailed user information when a card is clicked
- Keyboard accessibility (Escape key closes sidebar)
- Responsive layout

---

# Project Structure (Atomic Design)

The project follows **Atomic Design principles** to organize components into reusable and scalable building blocks.
src
│
├── components
│ ├── atoms
│ │ ├── Button
│ │ ├── Input
│ │ └── Text
│ │
│ ├── molecules
│ │ ├── SearchBar
│ │ └── SortSelect
│ │
│ ├── organisms
│ │ ├── UserCard
│ │ ├── UserGrid
│ │ └── UserDetailsSidebar
│ │
│ └── templates
│ └── UsersTemplate
│
├── hooks
│ └── useUsers.ts
│
├── services
│ └── usersApi.ts
│
├── types
│ └── user.ts
│
└── App.tsx
### Atoms

Atoms are the smallest UI components.

Examples:
- Button
- Input
- Text

### Molecules

Molecules combine atoms to create slightly more complex components.

Examples:
- SearchBar
- SortSelect

### Organisms

Organisms combine molecules and atoms into larger functional UI blocks.

Examples:
- UserCard
- UserGrid
- UserDetailsSidebar

### Templates

Templates define the page layout and combine organisms into a full page structure.

Example:
- UsersTemplate

This structure keeps components **modular, reusable, and scalable**, similar to component-based systems used in large applications like HubSpot.

---

# Setup Instructions

### 1. Clone the repository
git clone <repository-url>
cd react-users-app


### 2. Install dependencies


npm install


### 3. Run the development server


npm run dev


Open the application in your browser:


http://localhost:5173


### 4. Build the production version


npm run build


### 5. Preview production build


npm run preview


---

# Application Architecture

The application separates **data logic from UI components**.

### Data Layer

A custom React hook called `useUsers` is responsible for:

- Fetching data from the API
- Handling loading and error states
- Filtering users by search query
- Sorting users

### UI Layer

The UI is composed of reusable components following Atomic Design:

- UserGrid renders user cards
- UserCard displays user summary information
- UserDetailsSidebar shows extended user details

The template component (`UsersTemplate`) composes the full page layout.

This architecture helps keep the application **maintainable and scalable**.

---

# HubSpot-Style Component Thinking

Components were designed to be **props-driven and reusable**, similar to how UI modules are structured in HubSpot.

Example:

UserGrid receives its data and behavior through props:


users
selectedUserId
onSelectUser


UserCard receives:


user
isSelected
onSelect


This pattern separates **presentation from state management**, allowing components to remain reusable and easier to test.

---

# Accessibility

The application includes basic accessibility improvements:

- Semantic HTML structure
- `aria-label` attributes for interactive elements
- Keyboard accessibility
- Escape key to close the sidebar

---

# Possible Improvements

If this project were expanded further, potential improvements could include:

- pagination
- loading skeletons
- unit tests with React Testing Library
- mobile sidebar drawer
- API caching with React Query
- improved accessibility for WCAG AA compliance
