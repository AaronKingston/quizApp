import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LeftArrow} from 'assets/SVG';
import {TouchableOpacity, View} from 'react-native';
import GameOverScreen from 'screens/GameOverScreen';
import GameScreen from 'screens/GameScreen';
import MenuScreen from 'screens/MenuScreen';
import StartScreen from 'screens/StartScreen';
import {colors} from 'styles/colors';
const {Navigator, Screen} = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="StartScreen"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="GameScreen"
          component={GameScreen}
          options={{
            headerShown: true,
            title: 'Game',
            headerLeft: () => (
              <TouchableOpacity>
                <LeftArrow fill={colors.white} />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: colors.backgroundColor,
            },
            headerTitleStyle: {
              color: colors.white,
            },
          }}
        />

        <Screen
          name="GameOverScreen"
          component={GameOverScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
