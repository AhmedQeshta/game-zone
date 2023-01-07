import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from '../../styles';
import { HeaderFCProps } from '../../utils/interfaces';

export const Header: FC<HeaderFCProps> = ({ title }) => {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerTitle}>{title}</Text>
    </View>
  );
};
