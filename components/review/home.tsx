import { Alert, Button, FlatList, Modal, Platform, Pressable, StatusBar, TouchableOpacity } from "react-native";
import { View, Text } from "react-native"
import { OPENSANS_REGULAR } from "../../utils/const";
import DetailScreen from "./detail";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import CustomHeader from "../navigation/app.header";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDeleteLeft, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import CreateModal from "./create.modal";

interface IReview {
    id: number;
    title: string;
    content: string;
    star: number;
}

const HomeScreen = () => {
    const navigation = useNavigation();
    const [reviews, setReviews] = useState<IReview[]>([]);

    const [modalVisible, setModalVisible] = useState(false);

    let onDelete = (id) => {
        setReviews(reviews.filter((item) => item.id !== id))
    }

    let onConfirmDelete = (id) => {
        Alert.alert(
            "Bạn có muốn xóa thẻ?",
            "Thẻ không thể hoàn tác sau khi xóa, bạn chắc chứ?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: () => onDelete(id), // Xóa nếu nhấn "Delete"
                },
            ]
        );
    }
    return (
        <View>
            <CustomHeader />
            <View >
                <TouchableOpacity style={{ alignSelf: 'center', marginTop: 15 }} onPress={() => setModalVisible(true)}>
                    <FontAwesomeIcon size={40} color="#1E88E5" icon={faSquarePlus} />
                </TouchableOpacity>
                <View >
                    <FlatList
                        data={reviews}
                        keyExtractor={(item) => item.id + ''}
                        renderItem={({ item }) => {
                            return (
                                <View style={Style.reviewItem}>
                                    <TouchableOpacity style={Style.reviewText} onPress={() => navigation.navigate('review-detail', { item })}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{item.title}</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => onConfirmDelete(item.id)}>
                                        <FontAwesomeIcon size={25} icon={faDeleteLeft} />
                                    </TouchableOpacity>
                                </View>

                            )
                        }}

                    />
                </View>

            </View>
            <CreateModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                reviews={reviews}
                setReviews={setReviews}
            />
        </View>
    )

}

export default HomeScreen;

const Style = StyleSheet.create({
    reviewItem: {
        backgroundColor: '#26A0F5',
        margin: 15,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    reviewText: {
        width: "90%"
    },
})