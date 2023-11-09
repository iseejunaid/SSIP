import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const HomeScreen = ({route}) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  console.log(route.params);
  const handleAddTodo = () => {
    if (text.length > 0) {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={(value) => setText(value)}
        placeholder="Add a todo"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    marginTop: 10,
  },
  todoItem: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default HomeScreen;
