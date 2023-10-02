import {StyleSheet} from 'react-native';
import { colors } from 'styles/colors';

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
        marginBottom: 60,
      },
    });
};

export default getStyleObj;