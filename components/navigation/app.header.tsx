import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const CustomHeader = () => {
    const navigation: any = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                <FontAwesomeIcon icon={faBars} size={24} color="white" />

            </TouchableOpacity>
            <Text style={styles.title}>My App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1E88E5", // Màu xanh dương
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
});

export default CustomHeader;
