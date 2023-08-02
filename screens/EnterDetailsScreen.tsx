import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, TextInput, View } from "react-native";
import { StackParamList } from "../App";
import Button from "../components/ui/Button";
import Subtitle from "../components/ui/Subtitle";
import Title from "../components/ui/Title";
import { colors } from "../constants/style";

type Props = NativeStackScreenProps<StackParamList, "EnterDetailsScreen">;

const EnterDetailsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Title>Enter your full name</Title>
        <Subtitle>Enter your details to get started</Subtitle>
        <TextInput style={styles.input} />
      </View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("MainTabs")}
      >
        Proceed
      </Button>
    </View>
  );
};

export default EnterDetailsScreen;

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
  input: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    padding: 16,
    color: colors.white,
    fontSize: 16,
    marginTop: 24,
  },
});
