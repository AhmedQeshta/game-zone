export interface AppReviews {
  title: string;
  rating: number;
  body: string;
  id: number;
}

interface Route {
  params: AppReviews;
}

export interface ReviewScreenProps {
  route: Route;
}
