import Ionicons from "@expo/vector-icons/Ionicons";

import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";


import { primary } from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return (
    <Ionicons
      name={props.name}
      size={28}
      style={{ marginBottom: -5 }}
      color={props.color}
    />
  );
}

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Beranda",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="kategori"
        options={{
          title: "Kategori",
          tabBarIcon: ({ color }) => <TabBarIcon name="qr-code-outline" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="pesanan"
        options={{
          title: "Pesanan",
          tabBarIcon: ({ color }) => <TabBarIcon name="reader-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Akun",
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
