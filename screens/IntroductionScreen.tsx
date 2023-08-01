import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, StyleSheet, View } from "react-native";
import { StackParamList } from "../App";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";
import Title from "../components/ui/Title";

type Props = NativeStackScreenProps<StackParamList, "IntroductionScreen">;

const IntroductionScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/bitcoin.png")}
          style={styles.image}
        />
      </View>
      <Title textStyle={styles.title}>Invest In Idea</Title>
      <Subtitle textStyle={styles.subtitle}>
        Unlock your potential for groundbreaking returns by investing in
        game-changing ideas that will shape the future.
      </Subtitle>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("VerifyNumberScreen")}
      >
        Create an account
      </Button>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    aspectRatio: 1,
    width: "80%",
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
  },
  button: {
    marginTop: 50,
  },
});
