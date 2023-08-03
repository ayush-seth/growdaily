import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/style";
import Card from "../ui/Card";

type Props = {};

const StocksCard = (props: Props) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <View style={styles.stock}>
        <Text style={styles.stockName}>BTC/USDT</Text>
        <Text style={styles.stockPrice}>28372.01</Text>
        <Text style={[styles.stockChange, { color: "#409E88" }]}>2.98%</Text>
      </View>
      <View style={styles.stock}>
        <Text style={styles.stockName}>ETH/USDT</Text>
        <Text style={styles.stockPrice}>1786.62</Text>
        <Text style={styles.stockChange}>-0.22%</Text>
      </View>
      <View style={styles.stock}>
        <Text style={styles.stockName}>DOGE/USDT</Text>
        <Text style={styles.stockPrice}>0.00389</Text>
        <Text style={styles.stockChange}>-0.22%</Text>
      </View>
    </Card>
  );
};

export default StocksCard;

const styles = StyleSheet.create({
  stock: {
    alignItems: "center",
    gap: 12,
  },
  stockName: { color: colors.gray, fontSize: 15 },
  stockPrice: { color: colors.white, fontSize: 16 },
  stockChange: { color: "#9D0505" },
});
