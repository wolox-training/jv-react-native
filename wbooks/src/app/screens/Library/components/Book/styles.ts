import { StyleSheet } from 'react-native';
import { darkGrey, white, black } from '@constants/colors';

export default StyleSheet.create({
  bookCard: {
    flex: 1,
    flexDirection: 'row',
    margin: 25,
    padding: 25,
    paddingBottom: 85,
    backgroundColor: white,
    borderRadius: 10,
    shadowColor: black,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    elevation: 1
  },
  infoBook: {
    marginLeft: 20
  },
  titleBook: {
    fontSize: 16,
    fontWeight: 'bold',
    color: darkGrey
  },
  authorBook: {
    fontSize: 14,
    color: darkGrey
  },
  imgBook: {
    width: 39,
    height: 60
  }
});
