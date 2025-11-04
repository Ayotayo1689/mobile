import SafeScreen from "@/componeents/SafeScreen";
import { useAuth } from "@/contexts/auth-context";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TabLayout() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { logout, user } = useAuth();

  const handleLogout = () => {
    setShowLogoutModal(false);
    logout();
  };

  return (
    <SafeScreen>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#4F5FD6",
          tabBarInactiveTintColor: "#999",
          headerStyle: {
            backgroundColor: "#4F5FD6",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="customers"
          options={{
            title: "Customers",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="logout"
          options={{
            title: "Logout",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-out" size={size} color={color} />
            ),
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setShowLogoutModal(true);
            },
          }}
        />
      </Tabs>

      <Modal
        visible={showLogoutModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setShowLogoutModal(false)}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Logout</Text>
              <Text style={styles.modalMessage}>
                Are you sure you want to logout?
              </Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.cancelButton]}
                  onPress={() => setShowLogoutModal(false)}
                >
                  <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.button, styles.confirmButton]}
                  onPress={handleLogout}
                >
                  <Text style={styles.buttonText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    width: 320,
    maxWidth: "90%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
    textAlign: "center",
  },
  modalMessage: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#EB5757",
  },
  confirmButton: {
    backgroundColor: "#4F5FD6",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
