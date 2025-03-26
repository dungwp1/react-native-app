import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Button, StyleSheet, StatusBar, Image } from "react-native"
import HomeScreen from "./home";
import { useCallback } from "react";
import starIcon from '../../assets/images/star.png';
import React from "react";

const DetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params || {};
    const { id, title, content, star } = item || {};
    const starArray = Array.from({ length: star });

    return (
        <View>
            <Text style={Style.review}>ID: {id}</Text>
            <Text style={Style.review}>Title: {title}</Text>
            <Text style={Style.review}>Content: {content}</Text>
            <Text style={Style.review}>Rating: {star} </Text>
            <View style={{ flexDirection: 'row' }}>
                {Array.isArray(starArray) && starArray.length > 0 &&
                    starArray.map((item) => (
                        <Image style={{ height: 50, width: 50 }} source={starIcon} />
                    ))
                }
            </View>
            <Button title="Go Home" onPress={() => navigation.goBack()}></Button>

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