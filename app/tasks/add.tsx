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
import { Ionicons } from "@expo/vector-icons"

export default function AddTaskScreen() {
  const router = useRouter()
  const [taskType, setTaskType] = useState<"Single" | "Multi">("Single")
  const [project, setProject] = useState("")
  const [department, setDepartment] = useState("")
  const [area, setArea] = useState("")
  const [description, setDescription] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState<"Normal" | "Urgent">("Normal")

  const handleSave = () => {
    router.back()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Task</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.radioRow}>
            <TouchableOpacity style={styles.radio} onPress={() => setTaskType("Single")}>
              <Ionicons
                name={taskType === "Single" ? "radio-button-on" : "radio-button-off"}
                size={24}
                color="#4F5FD6"
              />
              <Text style={styles.radioLabel}>Single</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radio} onPress={() => setTaskType("Multi")}>
              <Ionicons
                name={taskType === "Multi" ? "radio-button-on" : "radio-button-off"}
                size={24}
                color="#4F5FD6"
              />
              <Text style={styles.radioLabel}>Multi</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Select Project/Job Order*"
              placeholderTextColor="#4F5FD6"
              value={project}
              onChangeText={setProject}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Select Department*"
              placeholderTextColor="#4F5FD6"
              value={department}
              onChangeText={setDepartment}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Area"
            placeholderTextColor="#4F5FD6"
            value={area}
            onChangeText={setArea}
          />

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Task Description*"
            placeholderTextColor="#4F5FD6"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={6}
          />

          <TextInput
            style={styles.input}
            placeholder="Select Task Due Date*"
            placeholderTextColor="#4F5FD6"
            value={dueDate}
            onChangeText={setDueDate}
          />

          <View style={styles.radioRow}>
            <TouchableOpacity style={styles.radio} onPress={() => setPriority("Normal")}>
              <Ionicons
                name={priority === "Normal" ? "radio-button-on" : "radio-button-off"}
                size={24}
                color="#4F5FD6"
              />
              <Text style={styles.radioLabel}>Normal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radio} onPress={() => setPriority("Urgent")}>
              <Ionicons
                name={priority === "Urgent" ? "radio-button-on" : "radio-button-off"}
                size={24}
                color="#4F5FD6"
              />
              <Text style={styles.radioLabel}>Urgent</Text>
            </TouchableOpacity>
          </View>

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
  radioRow: {
    flexDirection: "row",
    gap: 24,
    marginBottom: 20,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  radioLabel: {
    fontSize: 16,
    color: "#333",
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
  textArea: {
    height: 120,
    textAlignVertical: "top",
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
