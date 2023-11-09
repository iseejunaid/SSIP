import {
  addDoc,
  collection,
  getDocs,
  query,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { db } from "../Firebase/firebaseConfig";

export const addTodo = async (userId, todoText) => {
  try {
    const todoRef = collection(db, `users/${userId}/todos`);
    await addDoc(todoRef, {
      text: todoText,
      completed: false,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const getTodos = async (userId) => {
  try {
    const todosQuery = query(
      collection(db, `users/${userId}/todos`),
      orderBy("timestamp", "desc")
    );
    const todoSnapshot = await getDocs(todosQuery);
    const todos = [];
    todoSnapshot.forEach((doc) => {
      todos.push({ id: doc.id, ...doc.data() });
    });
    return todos;
  } catch (error) {
    console.error("Error getting todos:", error);
    return [];
  }
};

export const deleteTodo = async (userId, todoId) => {
  try {
    const todoDocRef = doc(db, `users/${userId}/todos`, todoId);
    await deleteDoc(todoDocRef);
    console.log("Todo deleted successfully");
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export const toggleTodoCompleted = async (userId, todoId) => {
  try {
    const todoDocRef = doc(db, `users/${userId}/todos`, todoId);
    const todoDoc = await getDoc(todoDocRef);
    if (todoDoc.exists()) {
      const currentCompletedValue = todoDoc.data().completed;
      await updateDoc(todoDocRef, {
        completed: !currentCompletedValue,
      });
      console.log("Todo completed flag toggled successfully");
    } else {
      console.error("Todo document does not exist");
    }
  } catch (error) {
    console.error("Error toggling todo completed flag:", error);
  }
};
