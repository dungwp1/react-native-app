import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native"
import HomeScreen from "./home";

const DetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params || {};
    const { id, title, star } = item || {};
    return (
        <View>
            <Text style={Style.review}>ID: {id}</Text>
            <Text style={Style.review}>Title: {title}</Text>
            <Text style={Style.review}>Rating: {star}</Text>
            <Button title="Go Home" onPress={() => navigation.goBack('home')}></Button>

        </View>
    )

}

export default DetailScreen;

const Style = StyleSheet.create({
    review: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
    }
})