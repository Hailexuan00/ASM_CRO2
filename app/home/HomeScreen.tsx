import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import data from "../../model/data.json";

const COLORS = {
  primary: "#007AFF",
  background: "#F0F8FF",
  text: "#333",
  card: "#f5f5f5",
};

export default function HomeScreen() {
  const navigation = useNavigation();
  const [plants, setPlants] = useState([]);
  const [pots, setPots] = useState([]);
  const [combo, setCombo] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setPlants(data.plants);
    setPots(data.pots);
    setCombo(data.combo);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhAjEuoHddOWFr-tcfW_cEVTQ-xQ4Qgjjig&s" }}
          style={styles.imageBackground}
        >
          <View style={styles.overlay} />
          <Text style={styles.headerText}>Planta - Toả sáng không gian nhà bạn</Text>
        </ImageBackground>
      </View>

      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* DANH SÁCH CÂY TRỒNG */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cây trồng</Text>
        <FlatList
          data={plants}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
              activeOpacity={0.7}
            >
              <Image source={{ uri: item.img }} style={styles.cardImage} />
              <Text style={styles.cardName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* DANH SÁCH CHẬU CÂY */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Chậu cây</Text>
        <FlatList
          data={pots}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
              activeOpacity={0.7}
            >
              <Image source={{ uri: item.img }} style={styles.cardImage} />
              <Text style={styles.cardName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* DANH SÁCH COMBO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Combo chăm sóc</Text>
        <FlatList
          data={combo}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("ProductDetail", { product: item })}
              activeOpacity={0.7}
            >
              <Image source={{ uri: item.img }} style={styles.cardImage} />
              <Text style={styles.cardName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerText: {
    position: "absolute",
    bottom: 20,
    left: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  searchContainer: {
    backgroundColor: COLORS.card,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    fontSize: 16,
    padding: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    color: COLORS.text,
  },
  card: {
    width: 120,
    marginRight: 16,
    borderRadius: 10,
    backgroundColor: COLORS.card,
    alignItems: "center",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",
  },
  cardName: {
    fontSize: 14,
    textAlign: "center",
    color: COLORS.text,
  },
});
