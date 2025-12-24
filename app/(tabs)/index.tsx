import { createHomeStyles } from "@/assets/styles/home.styles";
import { useTheme } from "@/hooks/useTheme";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Index() {
  const { toggleDarkMode, colors } = useTheme();

  const Homestyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos)

  const isLoading = todos === undefined

  if (isLoading) return <LoadingSpinner/>

  return (
    <LinearGradient colors={colors.gradients.background} style={Homestyles.container}>
      <StatusBar barStyle={colors.statusBarStyle}/>
      <SafeAreaView style={Homestyles.safeArea}>

        <Header/>
        <TodoInput/>

         

      </SafeAreaView>
    </LinearGradient>
  );
}
