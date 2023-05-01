export interface INotice {
  type: 'sell' | 'lost-found' | 'for-free';
  sex: 'male' | 'female';
  title: string;
  name: string;
  date: string;
  breed: string;
  location: string;
  price: string;
  photo: string;
  comments: string;
}
