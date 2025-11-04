import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      router.replace("/(tabs)");
    } else {
      Alert.alert("Error", "Invalid credentials");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ImageBackground
        source={require("../../assets/images/background.jpg")} // replace with your background image path
        style={styles.background}
        resizeMode="cover"
      >
        {/* Opacity overlay */}
        <View style={styles.overlay} />

        <View style={styles.content}>
          <Image
            source={require("../../assets/images/logowhite.png")} // replace with your logo image path
            style={styles.logo}
            resizeMode="contain"
          />

          <View style={styles.formCard}>
            <Text style={styles.title}>Factory Management</Text>
            <Text style={styles.subtitle}>Login to continue</Text>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholderTextColor="#777"
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#777"
              />

              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.47)", 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  formCard: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#0A1B39",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#485066",
    textAlign: "center",
    marginBottom: 24,
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#F9FAFB",
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    color: "#333",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  button: {
    backgroundColor: "#03a808ff",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
