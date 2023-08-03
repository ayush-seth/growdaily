import { ReactNode } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card = ({ style, children }: Props) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: "#1D1E20",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
