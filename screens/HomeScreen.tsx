import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Hey, Jon!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/bitcoin-stock.png")}
          style={styles.image}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    aspectRatio: "2 / 1",
  },
  image: {
    marginTop: 22,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
