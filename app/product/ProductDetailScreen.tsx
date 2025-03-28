import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params || {}; // Kiểm tra nếu không có dữ liệu sản phẩm
  const [quantity, setQuantity] = useState(0);
  const price = product?.price || 250000;

  useEffect(() => {
    console.log("Product received:", product);
  }, [product]);

  if (!product) {
    return (
      <View style={styles.centeredView}>
        <Text>Lỗi: Không có dữ liệu sản phẩm!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{product.name}</Text>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Product Image */}
        <Image source={{ uri: product.img }} style={styles.image} />

        {/* Product Info */}
        <View style={styles.infoContainer}>
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>Cây trồng</Text>
            <Text style={styles.tag}>Ưa bóng</Text>
          </View>
          <Text style={styles.price}>{price.toLocaleString()}đ</Text>

          {/* Product Details */}
          <View style={styles.details}>
            <Text style={styles.detailText}>Kích cỡ: Nhỏ</Text>
            <Text style={styles.detailText}>Xuất xứ: Châu Phi</Text>
            <Text style={[styles.detailText, { color: "green" }]}>Tình trạng: Còn 156 sp</Text>
          </View>

          {/* Quantity and Buy Button in One Row */}
          <View style={styles.actionRow}>
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={() => setQuantity(Math.max(0, quantity - 1))}>
                <Ionicons name="remove-circle-outline" size={28} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Ionicons name="add-circle-outline" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>CHỌN MUA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff" 
  },
  centeredView: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 4,
  },
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    flex: 1, 
    textAlign: "center" 
  },
  image: { 
    width: "100%", 
    height: 300, 
    resizeMode: "contain", 
    marginVertical: 10 
  },
  infoContainer: { 
    padding: 16 
  },
  tagContainer: { 
    flexDirection: "row", 
    gap: 8, 
    marginBottom: 8 
  },
  tag: {
    backgroundColor: "green",
    color: "white",
    padding: 6,
    borderRadius: 4,
    fontSize: 12,
  },
  price: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginVertical: 8 
  },
  details: { 
    marginVertical: 8 
  },
  detailText: { 
    fontSize: 14, 
    marginVertical: 2 
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: { 
    fontSize: 18, 
    marginHorizontal: 12 
  },
  buyButton: {
    backgroundColor: "green",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buyText: { 
    color: "white", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});

export default ProductDetailScreen;