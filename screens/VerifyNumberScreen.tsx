import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { StackParamList } from "../App";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";
import Title from "../components/ui/Title";
import { colors } from "../constants/style";

type Props = NativeStackScreenProps<StackParamList, "VerifyNumberScreen">;

const VerifyNumberScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Title>Enter your phone number</Title>
        <Subtitle>Verify your account</Subtitle>
        <PhoneInput
          value={phoneNumber}
          onChangeFormattedText={setPhoneNumber}
          layout="second"
          containerStyle={{ backgroundColor: colors.black, marginTop: 24 }}
          textContainerStyle={[
            styles.phoneInputBorder,
            { backgroundColor: colors.black },
          ]}
          flagButtonStyle={[styles.phoneInputBorder, { marginRight: 12 }]}
          textInputStyle={{ color: "white" }}
          codeTextStyle={{ color: "white", marginRight: 0 }}
          disableArrowIcon
          withDarkTheme
        />
      </View>

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("OTPVerificationScreen")}
      >
        Proceed
      </Button>
    </View>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  headingContainer: {
    marginTop: 40,
  },
  button: {
    marginBottom: 180,
  },
  phoneInputBorder: {
    borderColor: colors.borderColor,
    borderWidth: 0.5,
    borderRadius: 4,
  },
});
