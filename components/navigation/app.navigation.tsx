import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../review/detail";
import HomeScreen from "../review/home";
import AboutScreen from "../review/about";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomHeader from "./app.header";


const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="review-detail"
                component={DetailScreen}
            />
        </Stack.Navigator>
    );
};

const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="home-stack" component={HomeStack} options={{ headerShown: false }} />
            <Drawer.Screen name="about" component={AboutScreen} options={{ header: () => <CustomHeader /> }} />
        </Drawer.Navigator>
    )
}

export default AppNavigation;