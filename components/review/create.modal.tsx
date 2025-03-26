import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CreateModal = (props: any) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');
    const [inputRating, setInputRating] = useState('');

    const { modalVisible, setModalVisible, reviews, setReviews } = props;

    let onSave = () => {
        setReviews([...reviews, {
            id: reviews.length + 1,
            title: inputTitle,
            content: inputContent,
            star: inputRating
        }])
        setInputTitle('')
        setInputContent('')
        setInputRating('')
    }
    let onCloseModal = () => {
        setModalVisible(!modalVisible)
        setInputTitle('')
        setInputContent('')
        setInputRating('')
    }

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextHeader}>CREATE A REVIEW</Text>
                        <Text style={styles.modalText}>Tiêu đề</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here..."
                            value={inputTitle}
                            onChangeText={setInputTitle}
                        />
                        <Text style={styles.modalText}>Nội dung</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here..."
                            value={inputContent}
                            onChangeText={setInputContent}
                        />
                        <Text style={styles.modalText}>Rating</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Type here..."
                            value={inputRating}
                            onChangeText={setInputRating}
                        />

                        <View style={{ flexDirection: "row", gap: 20 }}>
                            <Pressable
                                style={[styles.button, styles.buttonSave]}
                                onPress={() => {
                                    onSave();
                                    setModalVisible(false);
                                }}>
                                <Text style={styles.textStyle}>Save</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => onCloseModal()}>
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default CreateModal;
const styles = StyleSheet.create({
    // View mờ nền khi mở modal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)", // Nền đen mờ
    },

    // Hộp chứa modal chính
    modalView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Hiệu ứng bóng trên Android
    },

    // Tiêu đề "Create a review"
    modalTextHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: '#26A0F5'
    },
    modalText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },

    // Ô nhập liệu
    input: {
        width: "100%",
        height: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#f9f9f9",
        marginBottom: 20,
    },

    // Container chứa nút bấm
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },

    // Style chung cho nút
    button: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
        marginHorizontal: 5,
    },

    // Nút Save - màu xanh
    buttonSave: {
        backgroundColor: "#1E88E5",
    },

    // Nút Close - màu đỏ
    buttonClose: {
        backgroundColor: "#E53935",
    },

    // Chữ trong nút
    textStyle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});
