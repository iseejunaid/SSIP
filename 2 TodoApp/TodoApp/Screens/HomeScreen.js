import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import {
  addTodo,
  getTodos,
  deleteTodo,
  toggleTodoCompleted,
} from "../helpers/firebaseFunctions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AddModal from "./addModal";

const HomeScreen = ({ route, navigation }) => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { userID, username } = route.params;
  const [loading, setLoading] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, [userID]);

  const fetchTodos = async () => {
    const todosData = await getTodos(userID);
    console.log(todosData);
    setTodos(todosData);
    if (loading) {
      setLoading(false);
    }
  };

  const handleAddTodo = () => {
    if (text.length > 0) {
      setTodos([{ id: Date.now(), text }, ...todos]);
      addTodo(userID, text);
      setText("");
      fetchTodos();
    }
  };

  const handleDeleteTodo = async (id) => {
    console.log(id);
    setTodos(todos.filter((todo) => todo.id !== id));
    await deleteTodo(userID, id);
    fetchTodos();
  };
  const handleCompletedTodo = async (item) => {
    setIsToggling(true);
    try {
      item.completed = !item.completed;
      await toggleTodoCompleted(userID, item.id);
      fetchTodos();
    } catch (error) {
      console.error("Error toggling todo completed flag:", error);
      item.completed = !item.completed;
      fetchTodos();
    }
    setIsToggling(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <TouchableOpacity
        style={{ flex: 0.1 }}
        onPress={() => handleCompletedTodo(item)}
      >
        {isToggling ? (
          <ActivityIndicator size="small" color="#5193F2" />
        ) : item.completed ? (
          <AntDesign name="checkcircle" size={25} color="green" />
        ) : (
          <MaterialCommunityIcons
            name="radiobox-blank"
            size={25}
            color="black"
          />
        )}
      </TouchableOpacity>
      <View style={{ flex: 0.8, padding: "1%" }}>
        <Text style={styles.todoItemtxt}>{item.text}</Text>
      </View>
      <TouchableOpacity
        style={{ flex: 0.1 }}
        onPress={() => handleDeleteTodo(item.id)}
      >
        <MaterialIcons name="delete" size={28} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Welcome {username}!</Text>
        <TouchableOpacity onPress={() => navigation.popToTop()}>
          <Text style={styles.headerLogouttxt}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={styles.headingtxt}>Tasks:</Text>
          {loading ? (
            <View style={{ flex: 1, width: "100%" }}>
              <ActivityIndicator size="large" color="#5193F2" />
            </View>
          ) : (
            <Text style={{ fontSize: 20 }}>You have {todos.length} tasks</Text>
          )}
        </View>
        <View>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.list}
          />
        </View>
      </View>
      <AddModal
        visible={modalVisible}
        setvisible={setModalVisible}
        onAdd={handleAddTodo}
        text={text}
        setText={setText}
      />
      <TouchableOpacity
        style={styles.addbtnContainer}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add-circle" size={35} color="#F1F3F6" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F1F3F6",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    padding: "2%",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "100%",
    borderBottomWidth: 1,
  },
  headertxt: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5193F2",
  },
  headerLogouttxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    borderWidth: 1,
    padding: "1%",
    borderRadius: 10,
    borderColor: "red",
  },
  body: {
    flex: 0.9,
    width: "100%",
  },
  heading: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    padding: 20,
  },
  headingtxt: {
    fontSize: 28,
    fontWeight: "500",
  },
  list: {
    width: "100%",
    padding: 20,
  },
  todoItemtxt: {
    fontSize: 20,
  },
  listItem: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#5193F2",
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
  },
  addbtnContainer: {
    position: "absolute",
    bottom: "2%",
    right: "5%",
    width: "15.5%",
    height: "7.5%",
    borderRadius: 15,
    backgroundColor: "#5193F2",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
