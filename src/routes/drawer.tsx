import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { drawer } from './screen';

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawer: FC = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        {drawer?.map(props => (
          <Screen key={props?.name} {...props} />
        ))}
      </Navigator>
    </NavigationContainer>
  );
};
