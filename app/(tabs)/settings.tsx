import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles.';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import ProgressStats from '@/components/ProgressStats';
import Preferences from '@/components/Preferences';

const SettingScreen = () => {


  const {colors} = useTheme();

  const settingStyles = createSettingsStyles(colors)
  return (
    <LinearGradient colors={colors.gradients.background} style={settingStyles.container}>
      <SafeAreaView style={settingStyles.safeArea}>
        <View style={settingStyles.header}>
          <View style={settingStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingStyles.iconContainer}>
              <Ionicons name='settings' size={28} color="#fff"/>
            </LinearGradient>
            <Text style={settingStyles.title}>Settings</Text>
          </View>
        </View>
        <ScrollView style={settingStyles.scrollView} contentContainerStyle={settingStyles.content} showsVerticalScrollIndicator={false}>
          <ProgressStats/>
          <Preferences/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default SettingScreen