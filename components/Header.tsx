import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import  useTheme  from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {

    const {colors} = useTheme();

    const Homestyles = createHomeStyles(colors)

    const todos = useQuery(api.todos.getTodos)

    const completedCount = todos ? todos.filter((todo) => todo.isCompleted).length : 0
    const totalCount = todos ? todos.length : 0

    const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0

  return (
    <View style={Homestyles.header}>
      <View style={Homestyles.titleContainer}>

        <LinearGradient colors={colors.gradients.primary} style={Homestyles.iconContainer}>
          <Ionicons name='flash-outline' size={28} color="#ffff"/>
        </LinearGradient>

        <View style={Homestyles.titleTextContainer}>
          <Text style={Homestyles.title}>
            Today&apos;s Task 
          </Text>
          <Text style={Homestyles.subtitle}>
            {completedCount} of {totalCount} completed
          </Text>
        </View>

      </View>
      
        <View style={Homestyles.progressContainer}>
          <View style={Homestyles.progressBarContainer}>
            <View style={Homestyles.progressBar}>
              <LinearGradient
                colors={colors.gradients.success}
                style={[Homestyles.progressFill, {width: `${progressPercentage}%`}]}
              />
            </View>
            <Text style={Homestyles.progressText}>{Math.round(progressPercentage)}%</Text>
          </View>
        </View>
    </View>
  )
}

export default Header 
