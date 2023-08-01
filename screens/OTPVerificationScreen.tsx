import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import { StackParamList } from "../App";

type Props = NativeStackScreenProps<StackParamList, "OTPVerificationScreen">;

const OTPVerificationScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Button
        title="next"
        onPress={() => navigation.navigate("EnterDetailsScreen")}
      />
    </View>
  );
};

export default OTPVerificationScreen;

const styles = StyleSheet.create({});
