import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RackCatsApp from './Components/rack-cats-app';
import Header from './Components/Header/header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Categories from './Components/Categories/Categories';
import About from './Components/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  { path: '/', element: <Categories /> },
  { path: '/about', element: <About /> },
  { path: '/login', element: <h1>Login page</h1> },
  { path: '/contact', element: <h1>Contact page</h1> }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
