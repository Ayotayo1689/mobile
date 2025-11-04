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

interface Boat {
  name: string;
  hullNo: string;
}

interface Customer {
  id: number;
  name: string;
  phone: string;
  email: string;
  location: string;
  boats: Boat[];
}

export default function CustomersScreen() {
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [boatName, setBoatName] = useState("");

  const customers: Customer[] = [
    {
      id: 1,
      name: "ABC Customer",
      phone: "+971 52 790 8101",
      email: "info@abc.com",
      location: "Deira, Dubai - UAE",
      boats: [
        { name: "Boat 123", hullNo: "A34567890998" },
        { name: "Boat 23242", hullNo: "A76547890924" },
      ],
    },
    {
      id: 2,
      name: "XYZ Customer",
      phone: "+971 52 35654",
      email: "xyz@abc.com",
      location: "Deira, Dubai - UAE",
      boats: [
        { name: "Boat XY123", hullNo: "A34567890998" },
        { name: "Boat XY23242", hullNo: "A76547890924" },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Customer List</Text>
      </View>

      <View style={styles.filterContainer}>
        <TextInput
          style={styles.filterInput}
          placeholder="Customer Name"
          placeholderTextColor="#666"
          value={customerName}
          onChangeText={setCustomerName}
        />
        <TextInput
          style={styles.filterInput}
          placeholder="Boat Name"
          placeholderTextColor="#666"
          value={boatName}
          onChangeText={setBoatName}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {customers.map((customer) => (
          <View key={customer.id} style={styles.customerCard}>
            <View style={styles.customerHeader}>
              <View>
                <Text style={styles.customerName}>{customer.name}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location" size={16} color="#666" />
                  <Text style={styles.location}>{customer.location}</Text>
                </View>
              </View>
              <View style={styles.customerActions}>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="pencil" size={20} color="#6FCF97" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="trash" size={20} color="#EB5757" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.contactRow}>
              <View style={styles.contactItem}>
                <Ionicons name="call" size={16} color="#6FCF97" />
                <Text style={styles.contactText}>{customer.phone}</Text>
              </View>
              <View style={styles.contactItem}>
                <Ionicons name="mail" size={16} color="#6FCF97" />
                <Text style={styles.contactText}>{customer.email}</Text>
              </View>
            </View>

            <Text style={styles.boatsTitle}>BOATS</Text>
            {customer.boats.map((boat, index) => (
              <View key={index} style={styles.boatRow}>
                <Text style={styles.boatName}>{boat.name}</Text>
                <Text style={styles.hullNo}>H.N: {boat.hullNo}</Text>
              </View>
            ))}
          </View>
        ))}

        <Text style={styles.note}>
          Boats and hull number will be loaded from projects we created under
          this customer
        </Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/customers/add")}
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
  header: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6FCF97",
  },
  filterContainer: {
    backgroundColor: "#fff",
    padding: 12,
    flexDirection: "row",
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  filterInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    fontSize: 12,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#4F5FD6",
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  searchButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  resetButton: {
    backgroundColor: "#EB5757",
    borderRadius: 8,
    padding: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  resetButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  customerCard: {
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
  customerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  customerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  location: {
    fontSize: 12,
    color: "#666",
  },
  customerActions: {
    flexDirection: "row",
    gap: 8,
  },
  iconButton: {
    padding: 4,
  },
  contactRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  contactText: {
    fontSize: 12,
    color: "#666",
  },
  boatsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6FCF97",
    marginBottom: 8,
  },
  boatRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  boatName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  hullNo: {
    fontSize: 12,
    color: "#666",
  },
  note: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 80,
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
