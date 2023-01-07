import { FC, ReactNode } from 'react';

type StackNavigationOptions = {
  headerTitle?: () => ReactNode | string;
  headerShown?: boolean;
  headerStyle?: {
    backgroundColor?: string;
  };
};

export interface AppScreen {
  name: string;
  component: FC | any;
  options?: any;
}
