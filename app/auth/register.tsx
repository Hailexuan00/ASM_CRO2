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
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirm) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (!email.includes("@")) {
      alert("Email không hợp lệ!");
      return;
    }
    if (password !== confirm) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
    router.replace("/auth/login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAjEuoHddOWFr-tcfW_cEVTQ-xQ4Qgjjig&s" }}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Chào mừng bạn</Text>
        <Text style={styles.subtitle}>Tạo tài khoản mới</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Họ và tên"
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
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
          <TextInput
            placeholder="Xác nhận mật khẩu"
            style={styles.input}
            secureTextEntry
            value={confirm}
            onChangeText={setConfirm}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={{ color: "#7C7C7C" }}>Bạn đã có tài khoản? </Text>
          <TouchableOpacity onPress={() => router.push("/auth/login")}>
            <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF7E7",
  },
  imageBackground: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
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
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E7D32",
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 8,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#F0F8F6",
    borderRadius: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#C8E6C9",
  },
  button: {
    width: "100%",
    height: 48,
    backgroundColor: "#388E3C",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottomContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
});
