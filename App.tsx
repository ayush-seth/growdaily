import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { colors } from "./constants/style";
import EnterDetailsScreen from "./screens/EnterDetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import IntroductionScreen from "./screens/IntroductionScreen";
import NewsScreen from "./screens/NewsScreen";
import OTPVerificationScreen from "./screens/OTPVerificationScreen";
import ProfileScreen from "./screens/ProfileScreen";
import QuantifyScreen from "./screens/QuantifyScreen";
import VerifyNumberScreen from "./screens/VerifyNumberScreen";

export type StackParamList = {
  IntroductionScreen: undefined;
  VerifyNumberScreen: undefined;
  OTPVerificationScreen: undefined;
  EnterDetailsScreen: undefined;
  MainTabs: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1D1E20",
          borderTopWidth: 0,
          height: 84,
        },
        tabBarLabelStyle: { fontSize: 12 },
        tabBarActiveTintColor: colors.primary[500],
        tabBarInactiveTintColor: colors.white,
      }}
      sceneContainerStyle={{
        backgroundColor: colors.black,
        paddingHorizontal: 32,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Quantify" component={QuantifyScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.black },
          contentStyle: {
            backgroundColor: colors.black,
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
        <Stack.Screen
          name="MainTabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
