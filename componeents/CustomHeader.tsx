import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

export default function CustomHeader(props: any) {
  const {
    title,
    showBack = true,
    backText,
    rightComponent,
    backgroundColor = "#4F5FD6",
  } = props

  const router: any = useRouter()

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        {showBack ? (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
            {backText ? <Text style={styles.backText}>{backText}</Text> : null}
          </TouchableOpacity>
        ) : (
          <View style={{ width: 40 }} /> // placeholder for spacing
        )}

        <Text style={styles.title}>{title}</Text>

        <View style={styles.rightContainer}>
          {rightComponent ? rightComponent : null}
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles: any = StyleSheet.create({
  container: {
    paddingTop: 0,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#fff",
    marginLeft: 4,
    fontSize: 16,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  rightContainer: {
    width: 40,
    alignItems: "flex-end",
  },
})
