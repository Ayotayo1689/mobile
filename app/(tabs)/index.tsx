import { useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DashboardScreen() {
  const router = useRouter();

  const navigationCards = [
    { title: "Factory", route: "/factory" },
    { title: "Projects", route: "/projects" },
    { title: "Tasks", route: "/tasks" },
    { title: "Customer", route: "/customers" },
    { title: "Reports", route: "/reports" },
    { title: "Vacation", route: "/vacation" },
  ];

  const recentUpdates = [
    { text: "Project 1 - Customer A boat inspection done", time: "1 min ago" },
    { text: "Project 1 - Material Delivered", time: "1 day ago" },
    { text: "Project 1 - Job Order Created", time: "1 day ago" },
    { text: "Project 2 - Material Delivered", time: "1 day ago" },
    { text: "Project 1 - Material Delivered", time: "2 day ago" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome, Admin!</Text>
      </View>

      <View style={styles.cardsContainer}>
        {navigationCards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => router.push(card.route as any)}
          >
            <Text style={styles.cardText}>{card.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <View style={styles.summaryRow}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Active Projects</Text>
            <Text style={styles.summaryValue}>4</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Active Workers</Text>
            <Text style={styles.summaryValue}>8</Text>
          </View>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryLabel}>Active Tasks</Text>
            <Text style={styles.summaryValue}>5</Text>
          </View>
        </View>
      </View>

      <View style={styles.updatesContainer}>
        <View style={styles.updatesHeader}>
          <Text style={styles.updatesTitle}>Recent Task Updates</Text>
          <TouchableOpacity>
            <Text style={styles.viewMore}>View More</Text>
          </TouchableOpacity>
        </View>
        {recentUpdates.map((update, index) => (
          <View key={index} style={styles.updateItem}>
            <View style={styles.updateDot} />
            <View style={styles.updateContent}>
              <Text
                style={styles.updateText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {update.text}
              </Text>
              <Text style={styles.updateTime}>{update.time}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F5FD6",
  },
  header: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    gap: 15,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 1,
    flex: 1,
    minWidth: 80,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4F5FD6",
  },
  summaryContainer: {
    backgroundColor: "#6FCF97",
    margin: 20,
    borderRadius: 16,
    padding: 20,
  },
  summaryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryLabel: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  updatesContainer: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 16,
    padding: 20,
    marginBottom: 40,
  },
  updatesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  updatesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4F5FD6",
  },
  viewMore: {
    fontSize: 14,
    color: "#4F5FD6",
  },
  updateItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  updateDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#F4C430",
    marginRight: 12,
  },
  updateContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  updateText: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  updateTime: {
    fontSize: 12,
    color: "#999",
  },
});
