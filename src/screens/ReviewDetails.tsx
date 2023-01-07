import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { ReviewScreenProps } from '../utils/interfaces';
import { colors } from '../styles/theme';
import { reviewStyles } from '../styles';

const ReviewDetails: FC<ReviewScreenProps> = ({
  navigation,
  route: { params },
}) => {
  return (
    <View style={reviewStyles.container}>
      <Text style={reviewStyles.title}>{params.title}</Text>
      <Text style={reviewStyles.body}>{params.body}</Text>
      <Text style={reviewStyles.rating}>Rating : {params.rating}</Text>
      <Button
        title="back"
        color={colors.secondary}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ReviewDetails;
