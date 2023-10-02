import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    answerContainer: {
      marginTop: 8,
      paddingVertical: 8,
      borderRadius: 16,
      borderWidth: 3,
      borderColor: colors.borderColor,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    answerText: {
      color: colors.white,
      fontSize: 16,
      width: '80%',
    },
    check: {
      width: 26,
      height: 26,
      borderRadius: 16,
      borderWidth: 3,
      borderColor: colors.borderColor,
    },
  });
};

export default getStyleObj;
