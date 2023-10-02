import {useCallback, useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Portal} from 'react-native-portalize';
import {useModalize, Modalize} from 'react-native-modalize';

import {getCategory} from 'store/action/quizAction';
import {PrimaryButton, SecondaryButton} from 'components';

import getStyleObj from './style';
import {Logo} from 'assets/SVG';
import {colors} from 'styles/colors';

const difficultyData = [
  {id: 'easy', name: 'Easy'},
  {id: 'medium', name: 'Medium'},
  {id: 'hard', name: 'Hard'},
];

const MenuScreen: React.FC = () => {
  const styles = getStyleObj();
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const [modalType, setModalType] = useState();
  const [categoryButton, setCategoryButton] = useState({
    id: '',
    name: 'ANY CATEGORY',
  });
  const [difficultyButton, setDifficultyButton] = useState({
    id: '',
    name: 'ANY DIFFICULTY',
  });
  const {category, categoryLoading} = useSelector(state => state.quiz);

  const {ref, open, close} = useModalize();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const renderItem = ({item}: RenderItemType) => (
    <TouchableOpacity
      style={styles.sheetButton}
      onPress={() => handleModalItemPress(item)}>
      <Text style={styles.sheetButtonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const openModalHandler = useCallback(value => {
    setModalType(value);
    open();
  }, []);

  const handleModalItemPress = useCallback(
    ({name, id}) => {
      if (modalType === 'DIFFICULTY') {
        setDifficultyButton({name, id});
      } else {
        setCategoryButton({name, id});
      }
      close();
    },
    [close, modalType],
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton
          onPress={() => openModalHandler('DIFFICULTY')}
          customStyle={styles.secondaryButton}
          name={difficultyButton.name}
          color={colors.white}
        />
        <SecondaryButton
          onPress={() => openModalHandler('CATEGORY')}
          customStyle={styles.secondaryButton}
          name={categoryButton.name}
          color={colors.white}
        />
      </View>
      <PrimaryButton
        customStyle={styles.primaryButton}
        name="PLAY"
        onPress={() => {
          navigate('GameScreen', {
            difficulty: difficultyButton,
            category: categoryButton,
          });
        }}
      />
      <Portal>
        <Modalize
          ref={ref}
          handlePosition={'outside'}
          disableScrollIfPossible={false}
          flatListProps={{
            data: modalType === 'DIFFICULTY' ? difficultyData : category,
            renderItem: renderItem,
            keyExtractor: item => item.id,
            showsVerticalScrollIndicator: false,
          }}
        />
      </Portal>
    </View>
  );
};

export default MenuScreen;
