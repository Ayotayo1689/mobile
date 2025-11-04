"use client"

import { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { useRouter } from "expo-router"

export default function AddBoatScreen() {
  const router = useRouter()
  const [boatName, setBoatName] = useState("")
  const [length, setLength] = useState("")
  const [beam, setBeam] = useState("")
  const [draft, setDraft] = useState("")
  const [dryWeight, setDryWeight] = useState("")
  const [fuelTank, setFuelTank] = useState("")
  const [waterTank, setWaterTank] = useState("")
  const [dieselTank, setDieselTank] = useState("")
  const [blackTank, setBlackTank] = useState("")

  const handleSave = () => {
    router.back()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Boat Model</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Boat Name *"
            placeholderTextColor="#4F5FD6"
            value={boatName}
            onChangeText={setBoatName}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Length*"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={length}
              onChangeText={setLength}
            />
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Beam*"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={beam}
              onChangeText={setBeam}
            />
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Draft"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={draft}
              onChangeText={setDraft}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Dry Weight"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={dryWeight}
              onChangeText={setDryWeight}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Fuel Tank"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={fuelTank}
              onChangeText={setFuelTank}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Water Tank"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={waterTank}
              onChangeText={setWaterTank}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Diesel Tank"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={dieselTank}
              onChangeText={setDieselTank}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Black Tank"
            placeholderTextColor="#4F5FD6"
            keyboardType="numeric"
            value={blackTank}
            onChangeText={setBlackTank}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
              <Text style={styles.cancelButtonText}>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>SAVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: "#6FCF97",
    padding: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  form: {
    padding: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: "#4F5FD6",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    color: "#4F5FD6",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  thirdInput: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: "#EB5757",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  saveButton: {
    flex: 1,
    backgroundColor: "#4F5FD6",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
