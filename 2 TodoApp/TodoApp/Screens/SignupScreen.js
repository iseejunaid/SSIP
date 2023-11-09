import React, { useState } from "react";
import { auth } from "../Firebase/firebaseConfig";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  

  const handleSignup = async () => {
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then (async (userCredential) => {
          const user = userCredential.user;
          await updateProfile(user,{displayName:username})
          console.log(user);
          Alert.alert("Check Email");
          navigation.popToTop();
        })
        .catch((error) => {
          const errorMessage = error.message;
          if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
            Alert.alert("Email already in use");
          } else if (
            errorMessage ===
            "Firebase: Error (auth/invalid-email)."
          ) {
            Alert.alert("Invalid Email");
          } else {
            console.log(errorMessage);
          }
        });
    } else {
      alert("Password and Confirm Password does not match");
    }
  };

  const handleLogin = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertxt}>Sign Up TodoApp</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
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
          <TextInput
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignup} style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footertxt}>Already have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.footerbtntxt}>Login</Text>
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
    flex: 0.8,
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
    flex: 0.2,
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

export default SignupScreen;
