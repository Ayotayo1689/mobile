import { View, Image } from "react-native"

export default function Logo() {
  return (
    <View className="items-center justify-center">
      <Image
        source={require("../assets/images/logowhite.png")} // put your logo in assets/
        style={{ width: 150, height: 150, resizeMode: "contain" }}
      />
    </View>
  )
}
