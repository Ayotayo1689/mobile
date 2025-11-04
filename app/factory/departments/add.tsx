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

export default function AddDepartmentScreen() {
  const router = useRouter()
  const [departmentName, setDepartmentName] = useState("")
  const [supervisor, setSupervisor] = useState("")

  const handleSave = () => {
    // Save logic here
    router.back()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Add Department</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Department Name *"
            placeholderTextColor="#4F5FD6"
            value={departmentName}
            onChangeText={setDepartmentName}
          />

          <TextInput
            style={styles.input}
            placeholder="Select Supervisor *"
            placeholderTextColor="#4F5FD6"
            value={supervisor}
            onChangeText={setSupervisor}
          />
          <Text style={styles.helperText}>drop down list from supervisors</Text>

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
    marginBottom: 8,
    fontSize: 16,
    color: "#4F5FD6",
  },
  helperText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 16,
    marginLeft: 4,
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
