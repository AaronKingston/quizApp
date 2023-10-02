import { View } from "react-native";
import getStyleObj from "./style";
import { PrimaryButton } from "components";
import { colors } from "styles/colors";
import { Logo } from "assets/SVG";
import { useNavigation } from "@react-navigation/native";

const StartScreen:React.FC = () => {
  const {navigate} = useNavigation();
  const styles = getStyleObj();
  return(
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <PrimaryButton onPress={() => navigate("MenuScreen")} name={"PLAY"} customStyle={{backgroundColor: colors.green}}/>
    </View>
  );
}

export default StartScreen;