import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    questionContainer: {},
    questionPagination: {
      marginTop: 36,
      paddingHorizontal: 36,
    },
    paginationText: {
      color: colors.lightBlue,
      fontSize: 16,
    },
    currentPagination: {
      color: colors.lightBlue,
      fontSize: 16,
      fontWeight: '800',
    },
    question: {
      marginTop: 36,
      paddingHorizontal: 40,
    },
    questionText: {
      color: colors.white,
      fontSize: 16,
    },
  });
};

export default getStyleObj;
