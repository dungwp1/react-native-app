import { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ITodo {
  id: string,
  name: string,
}
export default function App() {

  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState<ITodo[]>([]);
  useEffect(() => {
    setTodo("");
  }, [listTodo]);

  const handleAddTodo = () => {
    Keyboard.dismiss();
    if (!todo) {
      Alert.alert('Không thể Add Todo', 'Vui lòng nhập todo',
        [
          { text: 'Ok', style: 'cancel' }, // Nút hủy không xóa
        ]
      );
    }
    else {
      const createId = uuid.v4();
      setListTodo([...listTodo, { id: createId, name: todo }])

    }
  }
  const confirmDeleteTodo = (id: string) => {
    Alert.alert('Xác nhận xóa', 'Bạn có chắc chắn muốn xóa mục này?',
      [
        { text: 'Hủy', style: 'cancel' }, // Nút hủy không xóa
        { text: 'Có', onPress: () => handleDeleteTodo(id) }, // Nút xóa
      ]
    );
  };

  const handleDeleteTodo = (id: string) => {
    setListTodo(listTodo.filter(item => item.id !== id))
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>To Do App</Text>

        {/* input form */}
        <View style={styles.inputForm}>
          <TextInput style={styles.inputTodo} value={todo} onChangeText={(value => setTodo(value))} />
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.todoButton} onPress={() => handleAddTodo()}>
              <Text>Add Todo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* list todo */}
        <View style={styles.listTodo}>
          <FlatList
            data={listTodo}
            keyExtractor={item => item.id + " "}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => confirmDeleteTodo(item.id)}>
                  <View style={styles.todo}>
                    <View style={styles.todoText} >
                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                    <FontAwesome style={styles.todoFont} name="trash" size={30} color="orange" />
                  </View>


                </Pressable>
              )
            }}
          />
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'orange',
    marginTop: 60,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  inputForm: {
    paddingHorizontal: 20,
  },
  inputTodo: {
    marginTop: 10,
    borderBlockColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '100%'
  },
  buttonView: {
    alignItems: 'center'
  },
  todoButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#299FF5',
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
  },
  listTodo: {
    flex: 1,
  },
  todo: {
    flexDirection: "row",
    // flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: '#299FF5',
    margin: 10,
    padding: 7,

  },
  todoText: {
    width: "90%"

  },
  text: {
    fontSize: 20
  },
  todoFont: {
    width: "7%",
    alignContent: 'center'
  },

});
