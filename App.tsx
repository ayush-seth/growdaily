import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import EnterDetailsScreen from "./screens/EnterDetailsScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import OTPVerificationScreen from "./screens/OTPVerificationScreen";
import VerifyNumberScreen from "./screens/VerifyNumberScreen";

export type StackParamList = {
  IntroductionScreen: undefined;
  VerifyNumberScreen: undefined;
  OTPVerificationScreen: undefined;
  EnterDetailsScreen: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#090B0C" },
          contentStyle: {
            backgroundColor: "#090B0C",
          },
        }}
      >
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerifyNumberScreen"
          component={VerifyNumberScreen}
          options={{ title: "Verify number" }}
        />
        <Stack.Screen
          name="OTPVerificationScreen"
          component={OTPVerificationScreen}
          options={{ title: "OTP Verification" }}
        />
        <Stack.Screen
          name="EnterDetailsScreen"
          component={EnterDetailsScreen}
          options={{ title: "Enter details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
