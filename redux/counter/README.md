# Redux Counter

A simple React application demonstrating Redux state management with a counter.

## Features

- Increment and decrement counter
- Redux store for state management
- Redux Toolkit for simplified Redux setup
- Clean UI with buttons

## Technologies Used

- React
- Redux Toolkit
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Navigate to the counter directory:
   ```bash
   cd redux/counter
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

- `src/App/store.js` - Redux store configuration
- `src/features/Slice.js` - Counter slice with actions and reducer
- `src/features/Comp.jsx` - Counter component using Redux hooks

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm run preview` - Preview production build

## Learn More

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux](https://react-redux.js.org/)
