import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
      justifyContent: 'center',
      padding: 40,
    },
    logoContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
    buttonContainer: {
      justifyContent: 'space-between',
    },
    secondaryButton: {
      backgroundColor: colors.transparent,
      borderColor: colors.darkBlue,
      marginTop: 8,
    },
    primaryButton: {
      marginHorizontal: 40,
      marginTop: 40,
      backgroundColor: colors.green,
    },
    sheetButton: {
      margin: 8,
    },
    sheetButtonText: {
      fontSize: 20,
      color: colors.darkBlue,
    },
  });
};

export default getStyleObj;
