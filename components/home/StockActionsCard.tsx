import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/style";
import Card from "../ui/Card";

type Props = {};

const StockActionsCard = (props: Props) => {
  return (
    <Card>
      <Pressable onPress={() => console.log("deposit called")}>
        <View style={styles.actionButton}>
          <Image
            source={require("../../assets/images/deposit.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.text}>Deposit</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log("withdraw called")}>
        <View style={styles.actionButton}>
          <Image
            source={require("../../assets/images/withdraw.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.text}>Withdraw</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log("help called")}>
        <View style={styles.actionButton}>
          <Image
            source={require("../../assets/images/help.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.text}>Help</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => console.log("invite friend called")}>
        <View style={styles.actionButton}>
          <Image
            source={require("../../assets/images/invite-friends.png")}
            style={{ width: 30, height: 30 }}
          />
          <Text style={styles.text}>Invite Friends</Text>
        </View>
      </Pressable>
    </Card>
  );
};

export default StockActionsCard;

const styles = StyleSheet.create({
  text: { color: colors.white },
  actionButton: {
    alignItems: "center",
    gap: 8,
    justifyContent: "space-between",
  },
});
