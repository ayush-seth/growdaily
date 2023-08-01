import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, SafeAreaView, StyleSheet } from "react-native";
import { StackParamList } from "../App";

type Props = NativeStackScreenProps<StackParamList, "IntroductionScreen">;

const IntroductionScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="next"
        onPress={() => navigation.navigate("VerifyNumberScreen")}
      />
    </SafeAreaView>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
