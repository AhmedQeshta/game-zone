import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { ReviewScreenProps } from '../utils/interfaces';

const ReviewDetails: FC<ReviewScreenProps> = ({ route: { params } }) => {
  return (
    <View>
      <Text>{params.id}</Text>
      <Text>{params.title}</Text>
      <Text>{params.body}</Text>
    </View>
  );
};

export default ReviewDetails;
