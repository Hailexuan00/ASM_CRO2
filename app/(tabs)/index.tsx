import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../home/HomeScreen";
import ProductDetailScreen from "../product/ProductDetailScreen";

const Stack = createStackNavigator();

export default function StackNavigator() { 
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Trang chủ" }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Chi tiết sản phẩm" }} />
    </Stack.Navigator>
  );
}
