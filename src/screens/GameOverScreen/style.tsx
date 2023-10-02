import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    text: {
      color: colors.white,
      fontSize: 18,
      textAlign: 'center',
    },
    resultBoard: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '30%',
      borderWidth: 3,
      borderColor: colors.borderColor,
      paddingVertical: '16%',
      marginHorizontal: 32,
      borderRadius: 8,
    },
    score: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 32,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    spaceLeft8: {
      marginLeft: 8,
      marginTop: 4,
    },
    footer: {
      bottom: 64,
      left: 0,
      right: 0,
      position: 'absolute',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
  });
};

export default getStyleObj;
