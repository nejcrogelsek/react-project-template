import { FC } from 'react'
import { ReactLocation, Route } from '@tanstack/react-location'

import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'

import ForgotPassword from 'pages/ForgotPassword/ForgotPassword'
import Home from 'pages/Home/Home'
import Login from 'pages/Login/Login'
import Page404 from 'pages/Page404/Page404'
import Profile from 'pages/Profile/Profile'
import Register from 'pages/Register/Register'
import ResetPassword from 'pages/ResetPassword/ResetPassword'

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}

export const location = new ReactLocation()

export const routes: Route[] = [
  // Restricted Routes
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'forgot-password',
    element: <ForgotPassword />,
  },
  {
    path: 'reset-password',
    element: <ResetPassword />,
  },
  // Private Routes
  {
    path: 'my-profile',
    element: <Profile />,
  },
  // Public Routes
  {
    path: '/',
    element: <Home />,
  },
  // 404 Error
  {
    path: '*',
    element: <Page404 />,
  },
]
