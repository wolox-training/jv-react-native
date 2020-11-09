import { StyleSheet } from 'react-native';
import { darkGrey, white, black } from '@constants/colors';

export default StyleSheet.create({
  bookCard: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
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
    paddingLeft: 20,
    flex: 1
  },
  titleBook: {
    fontSize: 16,
    fontWeight: 'bold',
    color: darkGrey
  },
  authorBook: {
    fontSize: 14,
    marginTop: 4,
    color: darkGrey
  },
  imgBook: {
    marginLeft: 10,
    width: 40,
    height: 60
  }
});
