"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, TextInput } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

interface Supervisor {
  id: number
  name: string
  department: string
}

export default function SupervisorsScreen() {
  const router = useRouter()
  const [searchSupervisor, setSearchSupervisor] = useState("")
  const [searchDepartment, setSearchDepartment] = useState("")

  const supervisors: Supervisor[] = [
    { id: 1, name: "Supervisor 1", department: "Department 1" },
    { id: 2, name: "Supervisor 2", department: "Department 1" },
    { id: 3, name: "Supervisor 3", department: "Not Assigned" },
    { id: 4, name: "Supervisor 4", department: "Department 3" },
  ]

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Supervisors"
          value={searchSupervisor}
          onChangeText={setSearchSupervisor}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Department"
          value={searchDepartment}
          onChangeText={setSearchDepartment}
        />
        <View style={styles.searchButtons}>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Current Supervisors</Text>

        {supervisors.map((supervisor) => (
          <View key={supervisor.id} style={styles.supervisorCard}>
            <View style={styles.supervisorInfo}>
              <View style={styles.supervisorDot} />
              <View style={styles.supervisorDetails}>
                <Text style={styles.supervisorName}>{supervisor.name}</Text>
                <Text style={styles.supervisorDepartment}>{supervisor.department}</Text>
              </View>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="pencil" size={20} color="#6FCF97" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="trash" size={20} color="#EB5757" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => router.push("/factory/supervisors/add")}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    fontSize: 14,
  },
  searchButtons: {
    flexDirection: "row",
    gap: 8,
  },
  searchButton: {
    flex: 1,
    backgroundColor: "#4F5FD6",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  clearButton: {
    flex: 1,
    backgroundColor: "#EB5757",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 16,
  },
  supervisorCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  supervisorInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  supervisorDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F4C430",
    marginRight: 12,
  },
  supervisorDetails: {
    flex: 1,
  },
  supervisorName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 4,
  },
  supervisorDepartment: {
    fontSize: 14,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#6FCF97",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
})
