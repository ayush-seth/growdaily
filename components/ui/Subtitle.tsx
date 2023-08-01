import { ReactNode } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../constants/style";

type Props = {
  children: ReactNode;
  viewStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Subtitle = ({ viewStyle, textStyle, children }: Props) => {
  return (
    <View style={[styles.container, viewStyle]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  text: {
    color: colors.gray,
    fontSize: 16,
  },
});
