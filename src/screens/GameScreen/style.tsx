import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    answersContainer: {
      paddingHorizontal: 36,
      marginTop: 16,
    },
    nextBTN: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

export default getStyleObj;
