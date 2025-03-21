import { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';


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
      alert('input todo')
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
        {/* body */}
        <View style={styles.body}>
          <TextInput style={styles.inputTodo} value={todo} onChangeText={(value => setTodo(value))} />
          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.todoButton} onPress={() => handleAddTodo()}>
              <Text>Click me</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={listTodo}
          keyExtractor={item => item.id + " "}
          renderItem={({ item }) => {
            return (
              <Pressable onPress={() => confirmDeleteTodo(item.id)}>
                <Text style={styles.todoItem} >{item.name}</Text>
              </Pressable>
            )
          }}
        />
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
  body: {
    paddingHorizontal: 20,

  },
  buttonView: {
    alignItems: 'center'
  },
  inputTodo: {
    marginTop: 10,
    borderBlockColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    width: '100%'
  },
  todoItem: {
    margin: 10,
    padding: 10,
    fontSize: 15,
    backgroundColor: '#299FF5',
  },
  todoButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#299FF5',
    alignItems: 'center',
    width: 100,
    borderRadius: 10,
  }
});
