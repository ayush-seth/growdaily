import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import StockActionsCard from "../components/home/StockActionsCard";
import StocksCard from "../components/home/StocksCard";
import Title from "../components/ui/Title";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title textStyle={{ fontWeight: "bold" }}>Hey, Jon!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/bitcoin-stock.png")}
          style={styles.image}
        />
      </View>
      <Title textStyle={{ fontSize: 20, marginTop: 40, marginBottom: 8 }}>
        Ideal for getting started
      </Title>
      <StocksCard />
      <StockActionsCard />
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
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
