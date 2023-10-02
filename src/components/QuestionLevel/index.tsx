import {View, Text, TouchableOpacity} from 'react-native';

import getStyleObj from './style';
import {Thermometer} from 'assets/SVG';
import {useMemo} from 'react';
import {colors} from 'styles/colors';

interface Props {
  level: string;
}

const QuestionLevel: React.FC<Props> = ({level}) => {
  const styles = getStyleObj();

  const generatedColor = useMemo(() => {
    switch (level) {
      case 'hard':
        return colors.purple;
      case 'medium':
        return colors.yellow;
      case 'easy':
        return colors.green;
      default:
        return colors.white;
    }
  }, [level]);

  return (
    <View style={styles.levelContainer}>
      <Text style={styles.levelText}>Question Level</Text>
      <Thermometer fill={generatedColor} />
    </View>
  );
};

export default QuestionLevel;
