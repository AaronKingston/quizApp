import {StyleSheet} from 'react-native';
import {colors} from 'styles/colors';

const getStyleObj = () => {
  return StyleSheet.create({
    levelContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 3,
      borderColor: colors.lightBlue,
      borderRadius: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 40,
      marginTop: 20,
    },
    levelText: {
      color: colors.white,
      fontSize: 16,
    },
  });
};

export default getStyleObj;
