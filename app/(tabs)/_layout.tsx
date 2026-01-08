import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import  useTheme  from "@/hooks/useTheme";

const TabsLayout = () => {
  const { colors } = useTheme();
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.textMuted,
            tabBarStyle: {
                backgroundColor: colors.surface,
                borderTopWidth:1,
                borderTopColor:colors.border,
                height:90,
                paddingBottom:30,
                paddingTop:10,
            },
            tabBarLabelStyle:{
                fontSize:16,
                fontWeight:'bold',
            },
            headerShown:false,
        }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
