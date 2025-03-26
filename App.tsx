import 'react-native-gesture-handler';

import { View } from "react-native"
import HomeScreen from "./components/home"
import DetailScreen from "./components/detail";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import './gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import AboutScreen from "./components/about";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="review-detail"
        component={DetailScreen}
        options={{ title: "Detail Review" }}
      />
    </Stack.Navigator>
  );
};

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="home-stack" component={HomeStack} options={{ title: "Home Screen" }} />
        <Drawer.Screen name="about" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>


  )
}

export default App;