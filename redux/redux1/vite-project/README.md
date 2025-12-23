# Redux Todo App

A React application demonstrating Redux state management with a todo list.

## Features

- Add new todo items
- Display list of todos
- Redux store for state management
- Redux Toolkit for simplified setup

## Technologies Used

- React
- Redux Toolkit
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the vite-project directory:
   ```bash
   cd redux/redux1/vite-project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the app.

## Redux Structure

- `src/app/store.js` - Redux store configuration
- `src/features/todo/Slice.js` - Todo slice with actions and reducer
- `src/component/Addtodo.jsx` - Form to add todos
- `src/component/Todos.jsx` - Display todos list

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm run preview` - Preview production build

## Learn More

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
