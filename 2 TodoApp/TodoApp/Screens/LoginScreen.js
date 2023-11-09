import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { auth } from "../Firebase/firebaseConfig";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if(email && password){
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        let userID = user.uid;
        let username = user.displayName;
        navigation.navigate("Home", { userID, username });
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Invalid Email or Password");
      });
    }else{
      alert("Please fill all the fields");
    }
  };
  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Welcome to TodoApp</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertxt}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.footerbtntxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F1F3F6",
  },
  header: {
    flex: 0.3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  headertxt: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5193F2",
    borderBottomWidth: 1,
  },
  body: {
    flex: 0.6,
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flex: 0.5,
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    width: "88%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#F1F3F6",
    elevation: 10,
    padding: "5%",
  },
  buttonContainer: {
    flex: 0.5,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    width: "88%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#5193F2",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  footer: {
    flex: 0.1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  footertxt: {
    fontSize: 15,
    color: "grey",
  },
  footerbtntxt: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default LoginScreen;
