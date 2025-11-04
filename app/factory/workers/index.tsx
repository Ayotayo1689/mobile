"use client";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Worker {
  id: number;
  name: string;
  basic: number;
  allowance: number;
  total: number;
  regularHrCost: number;
  evaluation: number;
}

export default function WorkersScreen() {
  const router = useRouter();
  const [searchName, setSearchName] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");
  const [searchStatus, setSearchStatus] = useState("");

  const departments = [
    {
      name: "Department 1",
      workers: [
        {
          id: 1,
          name: "Employee 1",
          basic: 2000,
          allowance: 500,
          total: 2500,
          regularHrCost: 20,
          evaluation: 4,
        },
        {
          id: 2,
          name: "Employee 2",
          basic: 3000,
          allowance: 200,
          total: 3200,
          regularHrCost: 30,
          evaluation: 3.5,
        },
        {
          id: 3,
          name: "Employee 3",
          basic: 2500,
          allowance: 500,
          total: 3000,
          regularHrCost: 22,
          evaluation: 5,
        },
      ],
    },
    {
      name: "Department 2",
      workers: [
        {
          id: 4,
          name: "Employee 1",
          basic: 2000,
          allowance: 500,
          total: 2500,
          regularHrCost: 20,
          evaluation: 4,
        },
        {
          id: 5,
          name: "Employee 2",
          basic: 3000,
          allowance: 200,
          total: 3200,
          regularHrCost: 30,
          evaluation: 3.5,
        },
        {
          id: 6,
          name: "Employee 3",
          basic: 2500,
          allowance: 500,
          total: 3000,
          regularHrCost: 22,
          evaluation: 5,
        },
      ],
    },
    {
      name: "Department 3",
      workers: [
        {
          id: 7,
          name: "Employee 1",
          basic: 2000,
          allowance: 500,
          total: 2500,
          regularHrCost: 20,
          evaluation: 4,
        },
        {
          id: 8,
          name: "Employee 2",
          basic: 3000,
          allowance: 200,
          total: 3200,
          regularHrCost: 30,
          evaluation: 3.5,
        },
        {
          id: 9,
          name: "Employee 3",
          basic: 2500,
          allowance: 500,
          total: 3000,
          regularHrCost: 22,
          evaluation: 5,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Worker name"
          value={searchName}
          onChangeText={setSearchName}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Department"
          value={searchDepartment}
          onChangeText={setSearchDepartment}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Status"
          value={searchStatus}
          onChangeText={setSearchStatus}
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
        <Text style={styles.sectionTitle}>Current Workers</Text>

        {departments.map((dept, deptIndex) => (
          <View key={deptIndex} style={styles.departmentSection}>
            <View style={styles.departmentHeader}>
              <View style={styles.departmentDot} />
              <Text style={styles.departmentName}>{dept.name}</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.table}>
                <View style={styles.tableHeader}>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    #
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colMedium]}>
                    Name
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    Basic
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    Allowance
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    Total
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    Regular Hr.Cost
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    Evaluation
                  </Text>
                  <Text style={[styles.tableHeaderText, styles.colSmall]}>
                    Actions
                  </Text>
                </View>

                {dept.workers.map((worker, index) => (
                  <View key={worker.id} style={styles.tableRow}>
                    <Text style={[styles.tableCell, styles.colSmall]}>
                      {index + 1}
                    </Text>
                    <Text style={[styles.tableCell, styles.colMedium]}>
                      {worker.name}
                    </Text>
                    <Text style={[styles.tableCell, styles.colSmall]}>
                      {worker.basic}
                    </Text>
                    <Text style={[styles.tableCell, styles.colSmall]}>
                      {worker.allowance}
                    </Text>
                    <Text style={[styles.tableCell, styles.colSmall]}>
                      {worker.total}
                    </Text>
                    <Text style={[styles.tableCell, styles.colSmall]}>
                      {worker.regularHrCost}
                    </Text>
                    <Text style={[styles.tableCell, styles.colSmall]}>
                      {worker.evaluation}
                    </Text>
                    <View
                      style={[
                        styles.tableCell,
                        styles.colSmall,
                        styles.actionsCell,
                      ]}
                    >
                      <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="pencil" size={18} color="#6FCF97" />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="trash" size={18} color="#EB5757" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/factory/workers/add")}
      >
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
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
  departmentSection: {
    marginBottom: 24,
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
    backgroundColor: "#F4C430",
    marginRight: 8,
  },
  departmentName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6FCF97",
  },
  table: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    padding: 12,
  },
  tableHeaderText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#333",
  },
  tableRow: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  tableCell: {
    fontSize: 12,
    color: "#666",
  },
  colSmall: {
    width: 60,
  },
  colMedium: {
    width: 120,
  },
  actionsCell: {
    flexDirection: "row",
    gap: 8,
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
});
