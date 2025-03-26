import { Alert, Button, FlatList, Platform, TouchableOpacity } from "react-native";
import { View, Text } from "react-native"
import { OPENSANS_REGULAR } from "../utils/const";
import DetailScreen from "./detail";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
interface IReview {
    id: number;
    title: string;
    star: number;
}



const HomeScreen = () => {
    const navigation = useNavigation();
    const [reviews, setReviews] = useState<IReview[]>([
        { id: 1, title: "title 1", star: 1 },
        { id: 2, title: "title 2", star: 3 },
        { id: 3, title: "title 3", star: 5 },

    ]);
    return (
        <View>
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => item.id + ''}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('review-detail', { item })}>
                                <Text style={Style.reviewItem}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}

                />
            </View>
        </View>
    )

}

export default HomeScreen;

const Style = StyleSheet.create({
    reviewItem: {
        backgroundColor: '#26A0F5',
        margin: 15,
        padding: 10
    }
})