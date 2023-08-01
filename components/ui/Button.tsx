import React, { ReactNode } from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/style";

type Props = {
  style: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  children: ReactNode;
};

const Button = ({ style, onPress, children }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 80,
    paddingVertical: 16,
    backgroundColor: colors.primary[500],
    borderRadius: 12,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontSize: 16,
  },
});
