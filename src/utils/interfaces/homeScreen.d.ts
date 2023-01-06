export interface AppReviews {
  title: string;
  rating: number;
  body: string;
  id: number;
}

export interface HomeScreenProps {
  navigation: {
    navigate: (screen: string, review?: AppReviews) => void;
  };
}
