import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { drawer } from './screen';

import { CustomDrawer } from '../components/drawer/CustomDrawer';
import { colors } from '../styles/theme';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawer: FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          // headerShown: false,
          drawerActiveBackgroundColor: colors.secondary,
          drawerActiveTintColor: colors.white,
          drawerLabelStyle: {
            marginLeft: -20,
          },
        }}>
        {drawer?.map(props => (
          <Screen key={props?.name} {...props} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};
