"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

interface Project {
  id: number
  jobNo: string
  customer: string
  jobType: string
  boat: string
  hull: string
  description: string
  dueDate: string
  status: "DONE" | "PENDING" | "ONGOING"
  createdDate: string
}

export default function ProjectsScreen() {
  const router = useRouter()
  const [viewMode, setViewMode] = useState<"card" | "list">("card")

  const projects: Project[] = [
    {
      id: 1,
      jobNo: "02/2025",
      customer: "ABC Customer",
      jobType: "Manufacturing",
      boat: "ABC boat1",
      hull: "Axcbsd678903we",
      description: "Inspect, collect material sample description",
      dueDate: "12-10-2025",
      status: "DONE",
      createdDate: "09-10-2025",
    },
    {
      id: 2,
      jobNo: "03/2025",
      customer: "ADC Customer",
      jobType: "Manufacturing",
      boat: "ABC boat2",
      hull: "Axcbsd678435903we",
      description: "Inspect, collect material sample description",
      dueDate: "12-10-2025",
      status: "PENDING",
      createdDate: "09-10-2025",
    },
    {
      id: 3,
      jobNo: "04/2025",
      customer: "XYZ Customer",
      jobType: "Manufacturing",
      boat: "XYZ boat1",
      hull: "A2324sd678903we",
      description: "Inspect, collect material sample description",
      dueDate: "12-10-2025",
      status: "ONGOING",
      createdDate: "09-10-2025",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DONE":
        return "#6FCF97"
      case "PENDING":
        return "#EB5757"
      case "ONGOING":
        return "#4F5FD6"
      default:
        return "#999"
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Boat Name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Customer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Created Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Due Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Job No.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Job Type</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Active projects</Text>

        {viewMode === "card" ? (
          projects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <View style={styles.cardHeader}>
                <View style={styles.cardHeaderLeft}>
                  <View style={styles.projectDot} />
                  <View>
                    <Text style={styles.jobNo}>Job No. {project.jobNo}</Text>
                    <Text style={styles.customer}>{project.customer}</Text>
                    <Text style={styles.jobType}>{project.jobType}</Text>
                  </View>
                </View>
                <View style={styles.cardHeaderRight}>
                  <Text style={styles.createdDate}>{project.createdDate}</Text>
                  <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="pencil" size={20} color="#6FCF97" />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="trash" size={20} color="#EB5757" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.cardBody}>
                <View style={styles.cardRow}>
                  <Text style={styles.label}>BOAT: {project.boat}</Text>
                  <Text style={styles.label}>HULL: {project.hull}</Text>
                </View>
                <Text style={styles.description}>{project.description}</Text>
                <View style={styles.cardFooter}>
                  <Text style={styles.dueDate}>Due Date: {project.dueDate}</Text>
                  <Text style={[styles.status, { color: getStatusColor(project.status) }]}>{project.status}</Text>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.listView}>
            <Text style={styles.listTitle}>LIST FORMAT</Text>
            {projects.map((project) => (
              <View key={project.id} style={styles.listItem}>
                <View style={styles.listItemHeader}>
                  <View style={styles.projectDot} />
                  <View style={styles.listItemContent}>
                    <Text style={styles.listJobNo}>Job Order No.</Text>
                    <Text style={styles.listCustomer}>Customer Name</Text>
                    <Text style={styles.listJobType}>Job Type</Text>
                    <Text style={styles.listRemarks}>Remarks</Text>
                    <Text style={styles.listDueDate}>Due Date</Text>
                  </View>
                  <View style={styles.listItemRight}>
                    <Text style={styles.listAssignDate}>Assign Date</Text>
                    <Text style={styles.listBoatName}>Boat Name</Text>
                    <Text style={styles.listHullNo}>Hull No.</Text>
                    <Text style={styles.listStatus}>Status</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => router.push("/projects/add")}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.boatFab} onPress={() => router.push("/projects/add-boat")}>
        <Ionicons name="boat" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  filterContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  filterButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
  filterButtonText: {
    fontSize: 12,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#4F5FD6",
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
  searchButtonText: {
    fontSize: 12,
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
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  cardHeaderLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  projectDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F4C430",
    marginRight: 12,
    marginTop: 4,
  },
  jobNo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4F5FD6",
  },
  customer: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 2,
  },
  jobType: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  cardHeaderRight: {
    alignItems: "flex-end",
  },
  createdDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  iconButton: {
    padding: 4,
    marginTop: 4,
  },
  cardBody: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: "#666",
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dueDate: {
    fontSize: 12,
    color: "#EB5757",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  listView: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 16,
  },
  listItem: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  listItemHeader: {
    flexDirection: "row",
  },
  listItemContent: {
    flex: 1,
    marginLeft: 12,
  },
  listItemRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  listJobNo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listCustomer: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listJobType: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listRemarks: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listDueDate: {
    fontSize: 12,
    color: "#666",
  },
  listAssignDate: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listBoatName: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listHullNo: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  listStatus: {
    fontSize: 12,
    color: "#666",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 100,
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
  boatFab: {
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
