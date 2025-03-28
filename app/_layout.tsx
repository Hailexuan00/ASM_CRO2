// app/_layout.tsx
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
// import { Provider, useSelector } from "react-redux";
import { Provider, useSelector } from "react-redux"
import { store, RootState } from "../store";

function AuthGate() {
  const router = useRouter();
  const segments = useSegments();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const inAuthGroup = segments[0] === "auth"; 
    // Vì bạn đang dùng thư mục "auth" (không phải (auth)), 
    // segments[0] sẽ là "auth" nếu đường dẫn là /auth/login

    // Nếu chưa đăng nhập mà không ở /auth => chuyển về /auth/login
    if (!user && !inAuthGroup) {
      router.replace("/auth/login");
    }
    // Nếu đã đăng nhập mà vẫn ở /auth => chuyển sang / (tabs)
    else if (user && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [user, segments]);

  return <Slot />;
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthGate />
    </Provider>
  );
}
