import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

export default function LoginScreen() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = () => {
    setError("");
    if (!email || !password) {
      setError("Vui lòng nhập email và mật khẩu!");
      return;
    }
    if (!validateEmail(email)) {
      setError("Email không hợp lệ!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(login(email));
      router.replace("/(tabs)");
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAjEuoHddOWFr-tcfW_cEVTQ-xQ4Qgjjig&s",
        }}
        style={styles.imageBackground}
      >
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Chào mừng bạn</Text>
        <Text style={styles.subtitle}>Đăng nhập tài khoản</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Mật khẩu"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => alert("Chức năng quên mật khẩu!")}
          >
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Đăng nhập</Text>}
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <Text style={styles.orText}>Hoặc</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="google" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="facebook" size={20} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome name="apple" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/register")}>
            <Text style={styles.registerLink}>Tạo tài khoản</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#E3F2FD" 
  },
  imageBackground: { 
    width: "100%", 
    height: "50%", 
    justifyContent: "flex-end" 
  },
  overlay: { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: "rgba(0,0,0,0.3)" 
  },
  contentContainer: {
    flex: 1,
    marginTop: -200,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: { fontSize: 26, fontWeight: "700", color: "#2E7D32", marginTop: 16 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  errorText: { color: "red", marginBottom: 10 },
  inputContainer: { 
    width: "100%", 
    marginVertical: 8 
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F0F8F6",
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#C8E6C9",
  },
  forgotPassword: { alignSelf: "flex-end", marginBottom: 10 },
  forgotPasswordText: { color: "#388E3C" },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#388E3C",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  socialContainer: { flexDirection: "row", alignItems: "center", marginTop: 16 },
  orText: { marginHorizontal: 10, color: "#666" },
  socialIcons: { flexDirection: "row", marginLeft: 8 },
  socialButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  registerContainer: { flexDirection: "row", marginTop: 16 },
  registerText: { color: "#666" },
  registerLink: { color: "#1E90FF", fontWeight: "bold" },
});
