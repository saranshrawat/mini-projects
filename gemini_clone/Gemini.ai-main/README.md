# Gemini Clone

A React-based web application that replicates the functionality of Google's Gemini AI chatbot.

## Features

- **Chat Interface**: Conversational UI for interacting with AI
- **Simulated Typing Effect**: Natural typing animation for responses
- **Google Gemini API Integration**: Powered by Google's Gemini model
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with sidebar navigation

## Technologies Used

- React (Functional Components, Hooks)
- Google Gemini API
- CSS for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Navigate to the gemini_clone/Gemini.ai-main directory:
   ```bash
   cd gemini_clone/Gemini.ai-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

- `src/components/main/` - Main chat interface
- `src/components/sidebar/` - Navigation sidebar
- `src/config/` - API configuration
- `src/context/` - React context for state management

## Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm run preview` - Preview production build

## API Configuration

This app requires a Google Gemini API key. Get one from [Google AI Studio](https://makersuite.google.com/app/apikey) and add it to your environment variables.

## Learn More

Built with Vite and React. See the [Gemini API documentation](https://ai.google.dev/docs) for more information.
