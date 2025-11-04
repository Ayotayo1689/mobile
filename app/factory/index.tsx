"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ManageFactoryScreen() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [workingHoursVisible, setWorkingHoursVisible] = useState(false);
  const [weekDays, setWeekDays] = useState("");
  const [dayHours, setDayHours] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const options = [
    { title: "Workers", route: "/factory/workers" },
    { title: "Supervisor", route: "/factory/supervisors" },
    { title: "Department", route: "/factory/departments" },
  ];

  const handleSaveWorkingHours = async () => {
    if (!weekDays || !dayHours) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("days", weekDays);
      formData.append("hours", dayHours);
      formData.append("user_id", user?.userid || "");

      const response = await fetch(
        `https://dsoftuae.com/alshaalimarine/api/working_hours_add.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      console.log("Working hours response:", result);

      if (result?.success || result?.status === "success") {
        Alert.alert("Success", "Working hours saved successfully!");
        setWorkingHoursVisible(false);
        setWeekDays("");
        setDayHours("");
      } else {
        Alert.alert("Error", "Failed to save working hours. Please try again.");
      }
    } catch (error) {
      console.error("Error saving working hours:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <View style={{ ...styles.container }}>
      <View style={styles.cardsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(option.route as any)}
          >
            <Text style={styles.cardText}>{option.title}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles.card}
          onPress={() => setWorkingHoursVisible(true)}
        >
          <Text style={styles.cardText}>Working Hours</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={workingHoursVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setWorkingHoursVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Working Hours</Text>

            <TextInput
              style={styles.input}
              placeholder="Week Days *"
              value={weekDays}
              onChangeText={setWeekDays}
            />

            <TextInput
              style={styles.input}
              placeholder="Day Hours *"
              value={dayHours}
              onChangeText={setDayHours}
            />

            <TouchableOpacity
              style={[styles.saveButton, submitting && { opacity: 0.6 }]}
              onPress={handleSaveWorkingHours}
              disabled={submitting}
            >
              {submitting ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.saveButtonText}>SAVE</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F5FD6",
    padding: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "30%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 100,
  },
  cardText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "#4F5FD6",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "90%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "#4F5FD6",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: "#6FCF97",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    marginTop: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
