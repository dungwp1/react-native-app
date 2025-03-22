import { StyleSheet, Text, View } from "react-native";

const style = StyleSheet.create({
    container: {
        marginTop: 50
    },
    item1: {
        backgroundColor: 'red'
    },
    item2: {
        backgroundColor: 'orange'
    },
    item3: {
        backgroundColor: 'yellow'
    },
    item4: {
        backgroundColor: 'blue'
    },
})
const FlexBox = () => {
    return (
        <View style={style.container}>
            <View style={style.item1}><Text>item 1</Text></View>
            <View style={style.item2}><Text>item 2</Text></View>
            <View style={style.item3}><Text>item 3</Text></View>
            <View style={style.item4}><Text>item 4</Text></View>
        </View>
    )
}

export default FlexBox;