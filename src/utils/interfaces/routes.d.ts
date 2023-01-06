import { FC } from 'react';

type StackNavigationOptions = {
  title?: string;
  headerShown?: boolean;
  headerStyle?: {
    backgroundColor?: string;
  };
};

export interface AppScreen {
  name: string;
  component: FC | any;
  options?: StackNavigationOptions;
}
