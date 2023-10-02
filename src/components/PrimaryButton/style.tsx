import {StyleSheet} from 'react-native';
import { colors } from 'styles/colors';

const getStyleObj = () => {
    return StyleSheet.create({
        button: {
            paddingVertical: 20,
            paddingHorizontal: 25,
            backgroundColor: colors.skyBlue,
            borderRadius: 37,
            justifyContent: 'center',
            alignContent: 'center',
          },
        text: {
            color: colors.white,
            textAlign: 'center',
        }
    });
};

export default getStyleObj;