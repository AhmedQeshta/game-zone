import { About, Home, ReviewDetails } from '../screens';
import { AppScreen } from '../utils/interfaces';
import { HomeStackNavigator } from './homeStack';

export const screen: AppScreen[] = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'GameZone',
      // headerShown: false,
    },
  },
  {
    name: 'ReviewDetails',
    component: ReviewDetails,
    options: {
      title: 'Review Details',
      headerStyle: {
        backgroundColor: '#fff',
      },
      // headerShown: false,
    },
  },
];

export const drawer: AppScreen[] = [
  {
    name: 'HomeNavigator',
    component: HomeStackNavigator,
    options: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerShown: false,
    },
  },
  {
    name: 'AboutNavigator',
    component: About,
    options: {
      title: 'About',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerShown: false,
    },
  },
];
