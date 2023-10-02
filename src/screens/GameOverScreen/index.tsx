import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {PrimaryButton} from 'components';

import getStyleObj from './style';
import {CheckFalse, CheckTrue} from 'assets/SVG';

const GameOverScreen = () => {
  const styles = getStyleObj();
  const {navigate} = useNavigation();
  const {params} = useRoute();

  const {correctAnswers, incorrectAnswers} = params || {};

  return (
    <View style={styles.mainContainer}>
      <View style={styles.resultBoard}>
        <Text style={styles.text}>Result</Text>
        <View style={styles.score}>
          <View>
            <Text style={styles.text}>correct</Text>
            <View style={styles.row}>
              <CheckTrue />
              <Text style={[styles.text, styles.spaceLeft8]}>
                {correctAnswers || 0}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.text}>incorrect</Text>
            <View style={styles.row}>
              <CheckFalse />
              <Text style={[styles.text, styles.spaceLeft8]}>
                {incorrectAnswers || 0}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <PrimaryButton
          name="Menu"
          onPress={() => {
            navigate('StartScreen');
          }}
        />
        {/* <PrimaryButton
          name="Play Again"
          onPress={() => {
            navigate('GameScreen');
          }}
        /> */}
      </View>
    </View>
  );
};

export default GameOverScreen;
