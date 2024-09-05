import logo from './logo.svg';
import './App.css';

import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate } from 'react-router-dom'

import Main from './pages/Main.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">

      <Route path="/" index element={<Main />} />
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
