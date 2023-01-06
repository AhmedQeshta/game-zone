import React, { FC, useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AppReviews, HomeScreenProps } from '../utils/interfaces';
import { globalStyles } from '../styles';

const Home: FC<HomeScreenProps> = ({ navigation }) => {
  const [reviews, setReviews] = useState<AppReviews[]>([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      id: 1,
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      id: 2,
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      id: 3,
    },
  ]);

  const handlePress = useCallback(
    (review: AppReviews) => {
      navigation.navigate('ReviewDetails', review);
    },
    [navigation],
  );

  return (
    <View style={globalStyles.container}>
      {reviews.length ? (
        reviews?.map(review => (
          <Pressable key={review.id}>
            <Text onPress={() => handlePress(review)}>{review.title}</Text>
          </Pressable>
        ))
      ) : (
        <Text>No reviews</Text>
      )}
    </View>
  );
};

export default Home;
