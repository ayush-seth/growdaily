import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, View } from "react-native";
import { StackParamList } from "../App";

type Props = NativeStackScreenProps<StackParamList, "VerifyNumberScreen">;

const VerifyNumberScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Button
        title="next"
        onPress={() => navigation.navigate("OTPVerificationScreen")}
      />
    </View>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({});
