import React from 'react';
import { Header } from '../components/shared/Header';
import { About, Home, ReviewDetails } from '../screens';
import { AppScreen, DrawerIconProps } from '../utils/interfaces';
import { HomeStackNavigator } from './homeStack';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        drawerIcon: ({ color }: DrawerIconProps) => (
          <Icon name="home" size={20} color={color} />
        ),
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
      drawerIcon: ({ color }: DrawerIconProps) => (
        <Icon name="info" size={20} color={color} />
      ),
    },
  },
];
