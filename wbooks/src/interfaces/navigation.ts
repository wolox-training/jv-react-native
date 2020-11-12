import { StackNavigationProp } from '@react-navigation/stack';
import Routes from '@constants/routes';
import { Book as IBook } from '@interfaces/book';

type RootStackParamList = {
  Home: undefined;
  Detail: IBook;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, Routes.Home>;
