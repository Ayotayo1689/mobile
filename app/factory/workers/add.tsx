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

export default function AddWorkerScreen() {
  const router = useRouter()
  const [workerName, setWorkerName] = useState("")
  const [department, setDepartment] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [jobStartingDate, setJobStartingDate] = useState("")
  const [basicSalary, setBasicSalary] = useState("")
  const [allowance, setAllowance] = useState("")
  const [visaCost, setVisaCost] = useState("")
  const [otherCost, setOtherCost] = useState("")
  const [accommodationCost, setAccommodationCost] = useState("")
  const [transportationCost, setTransportationCost] = useState("")
  const [regularHr, setRegularHr] = useState("")
  const [overtimeHr, setOvertimeHr] = useState("")
  const [holidayHr, setHolidayHr] = useState("")

  const handleSave = () => {
    // Save logic here
    router.back()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Worker</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Worker Name *"
            placeholderTextColor="#4F5FD6"
            value={workerName}
            onChangeText={setWorkerName}
          />

          <TextInput
            style={styles.input}
            placeholder="Select Department*"
            placeholderTextColor="#4F5FD6"
            value={department}
            onChangeText={setDepartment}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Mobile*"
              placeholderTextColor="#4F5FD6"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="E-mail"
              placeholderTextColor="#4F5FD6"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Date of Birth"
              placeholderTextColor="#4F5FD6"
              value={dateOfBirth}
              onChangeText={setDateOfBirth}
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Job Starting Date"
              placeholderTextColor="#4F5FD6"
              value={jobStartingDate}
              onChangeText={setJobStartingDate}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Basic Salary*"
              placeholderTextColor="#4F5FD6"
              value={basicSalary}
              onChangeText={setBasicSalary}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Allowance"
              placeholderTextColor="#4F5FD6"
              value={allowance}
              onChangeText={setAllowance}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Visa Cost / Year"
              placeholderTextColor="#4F5FD6"
              value={visaCost}
              onChangeText={setVisaCost}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Other Cost / Year"
              placeholderTextColor="#4F5FD6"
              value={otherCost}
              onChangeText={setOtherCost}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Accommodation Cost / Year"
              placeholderTextColor="#4F5FD6"
              value={accommodationCost}
              onChangeText={setAccommodationCost}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.halfInput]}
              placeholder="Transportation Cost / Year"
              placeholderTextColor="#4F5FD6"
              value={transportationCost}
              onChangeText={setTransportationCost}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Regular Hr."
              placeholderTextColor="#4F5FD6"
              value={regularHr}
              onChangeText={setRegularHr}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Overtime Hr."
              placeholderTextColor="#4F5FD6"
              value={overtimeHr}
              onChangeText={setOvertimeHr}
              keyboardType="numeric"
            />
            <TextInput
              style={[styles.input, styles.thirdInput]}
              placeholder="Holiday Hr."
              placeholderTextColor="#4F5FD6"
              value={holidayHr}
              onChangeText={setHolidayHr}
              keyboardType="numeric"
            />
          </View>

          <Text style={styles.autoFillText}>Auto fill</Text>

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
  thirdInput: {
    flex: 1,
  },
  autoFillText: {
    textAlign: "center",
    color: "#666",
    marginVertical: 16,
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
