// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import React from "react";

// export default function TabsLayout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,          // Ẩn tiêu đề mặc định
//         tabBarActiveTintColor: "#1E90FF",
//         tabBarInactiveTintColor: "#999",
//       }}
//     >
//       {/* Tab Home (index.tsx) */}
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Tab Tìm kiếm (search.tsx) */}
//       <Tabs.Screen
//         name="search"
//         options={{
//           title: "Tìm kiếm",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="search-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Tab Giỏ hàng (cart.tsx) */}
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: "Giỏ hàng",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="cart-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Tab Thông báo (notifications.tsx) */}
//       <Tabs.Screen
//         name="notifications"
//         options={{
//           title: "Thông báo",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="notifications-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Tab Cá nhân (profile.tsx) */}
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: "Cá nhân",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
