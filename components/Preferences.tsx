import { View, Text } from "react-native";
import React, { useState } from "react";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles.";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const Preferences = () => {
    const [isAutoSync, setIsAutoSync] = useState(true);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

    const {isDarkMode, toggleDarkMode, colors} = useTheme()
    const settingStyles = createSettingsStyles(colors)
  return (
    <LinearGradient colors={colors.gradients.surface} style={settingStyles.section}>
        <Text style={settingStyles.sectionTitle}>Preferences</Text>

        <View>
            <View>
                <LinearGradient colors={colors.gradients.primary} style={settingStyles.settingIcon}>
                    <Ionicons name="moon" size={18} color="#fff"/>
                </LinearGradient>
            </View>
        </View>
    </LinearGradient>
  );
};

export default Preferences;
