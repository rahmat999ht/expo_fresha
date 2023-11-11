import { StyleSheet, TextInput, Text, View } from "react-native";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { SafeAreaView } from "react-native-safe-area-context";
import { black, white, primary, brown } from "../../constants/Colors";

export default function HomeView() {
  let [search, setSearch] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.lokasi}>
          <Ionicons name="location-sharp" size={26} color={black} />
          <Text>Dikirim ke</Text>
          <Text style={styles.textLokasi}>Dikirim ke</Text>
          <Ionicons name="chevron-down-sharp" size={26} color={black} />
        </View>
        <View style={styles.formIcon}>
          <View style={styles.formSearch}>
            <Ionicons name="search" size={24} color="#000000" />
            <TextInput
              style={styles.input}
              placeholder="Cari produk di sini..."
              onChangeText={(text) => setSearch(text)}
            />
          </View>
          <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "#F5F5F5",
  },
  header: {
    height: 200,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  formIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  lokasi: {
    width: "100%",
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textLokasi: {
    fontWeight: "bold",
    marginStart: 5,
  },
  formSearch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    backgroundColor: "#DADADA",
    borderRadius: 30,
    padding: 10,
    marginRight: 20,
    flex: 1,
  },
  input: {
    flex: 1,
    height: 50,
  },
});
