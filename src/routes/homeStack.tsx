import { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screen } from './screen';

const { Navigator, Screen } = createStackNavigator();

export const HomeStackNavigator: FC = () => {
  return (
    <Navigator>
      {screen?.map(props => (
        <Screen key={props?.name} {...props} />
      ))}
    </Navigator>
  );
};
