import { useEffect } from "react"
import { View, ActivityIndicator } from "react-native"
import { useRouter } from "expo-router"
// import { useAuth } from "@/contexts/AuthContext"
import { useAuth } from "@/contexts/auth-context"
import Logo from "@/componeents/Logo"

export default function SplashScreen() {
  const router = useRouter()
  const { user, loading } = useAuth()

  useEffect(() => {
    if (!loading) {
      if (user) router.replace("/(tabs)")
      else router.replace("/(auth)/signin")
    }
  }, [loading, user])

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Logo />
      {/* <ActivityIndicator size="large" color="#000" className="mt-6" /> */}
    </View>
  )
}
