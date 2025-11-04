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
  Modal,
} from "react-native"
import { useRouter } from "expo-router"
import { Ionicons } from "@expo/vector-icons"

interface ClientRequirement {
  id: number
  description: string
  qty: number
  remarks: string
}

export default function AddProjectScreen() {
  const router = useRouter()
  const [jobType, setJobType] = useState<"Manufacturing" | "Maintenance" | "Additional">("Manufacturing")
  const [jobOrderNo, setJobOrderNo] = useState("")
  const [date, setDate] = useState("")
  const [salesPerson, setSalesPerson] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [customer, setCustomer] = useState("")
  const [boatModel, setBoatModel] = useState("")
  const [boatName, setBoatName] = useState("")
  const [hullNo, setHullNo] = useState("")
  const [specification, setSpecification] = useState<"Standard" | "Custom">("Standard")
  const [engineRequired, setEngineRequired] = useState<"Yes" | "No">("Yes")
  const [engineType, setEngineType] = useState("")
  const [notes, setNotes] = useState("")

  const [clientRequirements, setClientRequirements] = useState<ClientRequirement[]>([
    { id: 1, description: "Description 1", qty: 1, remarks: "remark1" },
    { id: 2, description: "Description 2", qty: 2, remarks: "" },
    { id: 3, description: "Description 3", qty: 3, remarks: "" },
  ])
  const [showRequirementModal, setShowRequirementModal] = useState(false)
  const [newRequirement, setNewRequirement] = useState({ description: "", qty: "", remarks: "" })

  const handleAddRequirement = () => {
    if (newRequirement.description && newRequirement.qty) {
      setClientRequirements([
        ...clientRequirements,
        {
          id: clientRequirements.length + 1,
          description: newRequirement.description,
          qty: Number.parseInt(newRequirement.qty),
          remarks: newRequirement.remarks,
        },
      ])
      setNewRequirement({ description: "", qty: "", remarks: "" })
      setShowRequirementModal(false)
    }
  }

  const handleDeleteRequirement = (id: number) => {
    setClientRequirements(clientRequirements.filter((req) => req.id !== id))
  }

  const handleSave = () => {
    router.back()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Project</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Job Type</Text>
          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox} onPress={() => setJobType("Manufacturing")}>
              <Ionicons name={jobType === "Manufacturing" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>Manufacturing</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkbox} onPress={() => setJobType("Maintenance")}>
              <Ionicons name={jobType === "Maintenance" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>Maintenance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkbox} onPress={() => setJobType("Additional")}>
              <Ionicons name={jobType === "Additional" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>Additional</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Job Order No."
              placeholderTextColor="#4F5FD6"
              value={jobOrderNo}
              onChangeText={setJobOrderNo}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Date*"
              placeholderTextColor="#4F5FD6"
              value={date}
              onChangeText={setDate}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Sales Person*"
              placeholderTextColor="#4F5FD6"
              value={salesPerson}
              onChangeText={setSalesPerson}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Delivery Date*"
              placeholderTextColor="#4F5FD6"
              value={deliveryDate}
              onChangeText={setDeliveryDate}
            />
          </View>

          <TextInput
            style={styles.input}
            placeholder="Select Customer*"
            placeholderTextColor="#4F5FD6"
            value={customer}
            onChangeText={setCustomer}
          />

          <View style={styles.customerInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Customer Name</Text>
              <Text style={styles.infoValue}>: ABC Customer</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Mobile</Text>
              <Text style={styles.infoValue}>: +971 2425555363</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Address</Text>
              <Text style={styles.infoValue}>: Dubai - UAE</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Salesman</Text>
              <Text style={styles.infoValue}>: Salesman 1</Text>
            </View>
            <Text style={styles.infoNote}>(these details will be loaded as per the selected customer)</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Select Boat Model*"
            placeholderTextColor="#4F5FD6"
            value={boatModel}
            onChangeText={setBoatModel}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Boat Name*"
              placeholderTextColor="#4F5FD6"
              value={boatName}
              onChangeText={setBoatName}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Hull No.*"
              placeholderTextColor="#4F5FD6"
              value={hullNo}
              onChangeText={setHullNo}
            />
          </View>

          <Text style={styles.sectionTitle}>Specification</Text>
          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox} onPress={() => setSpecification("Standard")}>
              <Ionicons name={specification === "Standard" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>Standard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkbox} onPress={() => setSpecification("Custom")}>
              <Ionicons name={specification === "Custom" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>Custom</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Engine Required</Text>
          <View style={styles.checkboxRow}>
            <TouchableOpacity style={styles.checkbox} onPress={() => setEngineRequired("Yes")}>
              <Ionicons name={engineRequired === "Yes" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkbox} onPress={() => setEngineRequired("No")}>
              <Ionicons name={engineRequired === "No" ? "checkbox" : "square-outline"} size={24} color="#6FCF97" />
              <Text style={styles.checkboxLabel}>No</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Engine Type & Quantity"
            placeholderTextColor="#4F5FD6"
            value={engineType}
            onChangeText={setEngineType}
          />

          <View style={styles.requirementsHeader}>
            <Text style={styles.sectionTitle}>Client Specific Requirements</Text>
            <TouchableOpacity style={styles.addRequirementButton} onPress={() => setShowRequirementModal(true)}>
              <Ionicons name="add-circle" size={32} color="#6FCF97" />
            </TouchableOpacity>
          </View>

          <View style={styles.requirementsTable}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>#</Text>
              <Text style={[styles.tableHeaderText, styles.tableHeaderWide]}>Additional Option Description</Text>
              <Text style={styles.tableHeaderText}>Qty</Text>
              <Text style={styles.tableHeaderText}>Remarks</Text>
              <Text style={styles.tableHeaderText}></Text>
            </View>
            {clientRequirements.map((req) => (
              <View key={req.id} style={styles.tableRow}>
                <Text style={styles.tableCell}>{req.id}</Text>
                <Text style={[styles.tableCell, styles.tableCellWide]}>{req.description}</Text>
                <Text style={styles.tableCell}>{req.qty}</Text>
                <Text style={styles.tableCell}>{req.remarks}</Text>
                <View style={styles.tableActions}>
                  <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="pencil" size={18} color="#6FCF97" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteRequirement(req.id)}>
                    <Ionicons name="trash" size={18} color="#EB5757" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Notes:"
            placeholderTextColor="#4F5FD6"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={4}
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

      <Modal visible={showRequirementModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Client Requirement</Text>

            <TextInput
              style={styles.modalInput}
              placeholder="Description*"
              placeholderTextColor="#4F5FD6"
              value={newRequirement.description}
              onChangeText={(text) => setNewRequirement({ ...newRequirement, description: text })}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Quantity*"
              placeholderTextColor="#4F5FD6"
              keyboardType="numeric"
              value={newRequirement.qty}
              onChangeText={(text) => setNewRequirement({ ...newRequirement, qty: text })}
            />

            <TextInput
              style={styles.modalInput}
              placeholder="Remarks"
              placeholderTextColor="#4F5FD6"
              value={newRequirement.remarks}
              onChangeText={(text) => setNewRequirement({ ...newRequirement, remarks: text })}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={() => {
                  setShowRequirementModal(false)
                  setNewRequirement({ description: "", qty: "", remarks: "" })
                }}
              >
                <Text style={styles.modalCancelButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalSaveButton} onPress={handleAddRequirement}>
                <Text style={styles.modalSaveButtonText}>ADD</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6FCF97",
    marginTop: 16,
    marginBottom: 12,
  },
  checkboxRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 16,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 14,
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
  customerInfo: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
    width: 120,
  },
  infoValue: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    flex: 1,
  },
  infoNote: {
    fontSize: 12,
    color: "#EB5757",
    marginTop: 8,
    fontStyle: "italic",
  },
  requirementsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  addRequirementButton: {
    padding: 4,
  },
  requirementsTable: {
    borderWidth: 1,
    borderColor: "#4F5FD6",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#4F5FD6",
    padding: 12,
  },
  tableHeaderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    width: 50,
  },
  tableHeaderWide: {
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
  },
  tableCell: {
    fontSize: 12,
    color: "#666",
    width: 50,
  },
  tableCellWide: {
    flex: 1,
  },
  tableActions: {
    flexDirection: "row",
    gap: 8,
    width: 60,
    justifyContent: "flex-end",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24,
    marginBottom: 40,
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
    width: "90%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4F5FD6",
    marginBottom: 20,
  },
  modalInput: {
    borderWidth: 2,
    borderColor: "#4F5FD6",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#4F5FD6",
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: "#EB5757",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  modalCancelButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  modalSaveButton: {
    flex: 1,
    backgroundColor: "#4F5FD6",
    borderRadius: 8,
    padding: 14,
    alignItems: "center",
  },
  modalSaveButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
})
