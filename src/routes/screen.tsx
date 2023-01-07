import React from 'react';
import { Header } from '../components/shared/Header';
import { About, Home, ReviewDetails } from '../screens';
import { AppScreen } from '../utils/interfaces';
import { HomeStackNavigator } from './homeStack';

export const screen: AppScreen[] = [
  {
    name: 'Home Stack',
    component: Home,
    options: {
      headerTitle: () => <Header title="GameZone" />,
      headerShown: false,
    },
  },
  {
    name: 'ReviewDetails',
    component: ReviewDetails,
    options: {
      headerTitle: () => <Header title="Review Details" />,
      headerShown: false,
    },
  },
];

export const drawer: AppScreen[] = [
  {
    name: 'Home',
    component: HomeStackNavigator,
    options: () => {
      return {
        headerTitle: () => <Header title="Home" />,
        headerStyle: {
          backgroundColor: '#fff',
        },
      };
    },
  },
  {
    name: 'About',
    component: About,
    options: {
      headerTitle: () => <Header title="About" />,
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
];
