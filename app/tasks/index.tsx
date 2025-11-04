"use client"
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

interface Task {
  id: number
  supervisor: string
  jobNo: string
  customer: string
  area: string
  description: string
  dueDate: string
  assignDate: string
  boat: string
  hull: string
  status: "DONE" | "PENDING" | "ONGOING"
}

export default function TasksScreen() {
  const router = useRouter()

  const tasks: Task[] = [
    {
      id: 1,
      supervisor: "Supervisor 1",
      jobNo: "02/2025",
      customer: "ABC Customer",
      area: "Area",
      description: "Task description 1",
      dueDate: "12-10-2025",
      assignDate: "09-10-2025",
      boat: "ABC boat1",
      hull: "Axcbsd678903we",
      status: "DONE",
    },
    {
      id: 2,
      supervisor: "Supervisor 1",
      jobNo: "02/2025",
      customer: "ABC Customer2",
      area: "Area",
      description: "Task description 1",
      dueDate: "12-10-2025",
      assignDate: "09-10-2025",
      boat: "ABC boat1",
      hull: "Axcbsd678903we",
      status: "ONGOING",
    },
    {
      id: 3,
      supervisor: "Supervisor 1",
      jobNo: "02/2025",
      customer: "ABC Customer",
      area: "Area",
      description: "Task description 1",
      dueDate: "12-10-2025",
      assignDate: "09-10-2025",
      boat: "ABC boat1",
      hull: "Axcbsd678903we",
      status: "PENDING",
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

  const groupedTasks = tasks.reduce(
    (acc, task) => {
      const project = `Project ${task.jobNo.split("/")[0]}`
      if (!acc[project]) {
        acc[project] = {}
      }
      const dept = "Department 1"
      if (!acc[project][dept]) {
        acc[project][dept] = []
      }
      acc[project][dept].push(task)
      return acc
    },
    {} as Record<string, Record<string, Task[]>>,
  )

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Task List</Text>
        <Text style={styles.headerSubtitle}>Will show active project tasks</Text>
      </View>

      <View style={styles.filterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Supervisor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Task Assign Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Due Date</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Project</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Department</Text>
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
        {Object.entries(groupedTasks).map(([project, departments]) => (
          <View key={project}>
            <Text style={styles.projectTitle}>{project}</Text>
            {Object.entries(departments).map(([dept, deptTasks]) => (
              <View key={dept}>
                <View style={styles.departmentHeader}>
                  <View style={styles.departmentDot} />
                  <Text style={styles.departmentTitle}>{dept}</Text>
                </View>
                {deptTasks.map((task) => (
                  <View key={task.id} style={styles.taskCard}>
                    <View style={styles.taskHeader}>
                      <View>
                        <Text style={styles.supervisor}>{task.supervisor}</Text>
                        <Text style={styles.customer}>{task.customer}</Text>
                        <Text style={styles.area}>{task.area}</Text>
                        <Text style={styles.description}>{task.description}</Text>
                        <Text style={styles.dueDate}>Due Date: {task.dueDate}</Text>
                      </View>
                      <View style={styles.taskHeaderRight}>
                        <Text style={styles.jobNo}>Job No. {task.jobNo}</Text>
                        <Text style={styles.boat}>BOAT: {task.boat}</Text>
                        <Text style={styles.hull}>HULL: {task.hull}</Text>
                        <TouchableOpacity style={styles.iconButton}>
                          <Ionicons name="pencil" size={20} color="#6FCF97" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconButton}>
                          <Ionicons name="trash" size={20} color="#EB5757" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.taskFooter}>
                      <Text style={styles.assignDate}>{task.assignDate}</Text>
                      <Text style={[styles.status, { color: getStatusColor(task.status) }]}>{task.status}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={() => router.push("/tasks/add")}>
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
  header: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6FCF97",
  },
  headerSubtitle: {
    fontSize: 12,
    color: "#666",
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
  projectTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6FCF97",
    marginBottom: 12,
    marginTop: 8,
  },
  departmentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  departmentDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#4F5FD6",
    marginRight: 8,
  },
  departmentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EB5757",
  },
  taskCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  supervisor: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 4,
  },
  customer: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 2,
  },
  area: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 12,
    color: "#EB5757",
  },
  taskHeaderRight: {
    alignItems: "flex-end",
  },
  jobNo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 4,
  },
  boat: {
    fontSize: 12,
    color: "#666",
    marginBottom: 2,
  },
  hull: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  iconButton: {
    padding: 4,
    marginTop: 4,
  },
  taskFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  assignDate: {
    fontSize: 12,
    color: "#666",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
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
