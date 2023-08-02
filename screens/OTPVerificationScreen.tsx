import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { StackParamList } from "../App";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";
import Title from "../components/ui/Title";
import { colors } from "../constants/style";

type Props = NativeStackScreenProps<StackParamList, "OTPVerificationScreen">;

const OTPVerificationScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Title>Enter your phone number</Title>
        <Subtitle>OTP sent to XXXXXXXXXX</Subtitle>
        <OTPTextView
          autoFocus
          keyboardType="number-pad"
          handleTextChange={console.log}
          containerStyle={styles.otpInput}
          textInputStyle={styles.otpInputCell}
          tintColor={colors.primary[500]}
          offTintColor={colors.borderColor}
          inputCount={4}
        />
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("EnterDetailsScreen")}
      >
        Proceed
      </Button>
    </View>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 32,
  },
  headingContainer: {
    marginTop: 40,
  },
  button: {
    marginBottom: 180,
  },
  otpInput: {
    marginTop: 24,
  },
  otpInputCell: {
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 4,
    color: colors.white,
    width: 60,
    height: 60,
  },
});
