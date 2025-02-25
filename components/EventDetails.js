import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { matchAttendees } from "../utils/helpers";

const categoryColors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff"];

const EventDetails = ({ route }) => {
  const { event } = route.params;
  const attendeesByDept = matchAttendees(event.id);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{event.name}</Text>
      <Text style={styles.eventDetails}>📅 {event.startDate}</Text>
      <Text style={styles.eventDetails}>📍 {event.venue || "Online"}</Text>
      <Text style={styles.eventDetails}>🎤 {event.instructor || event.speakers?.join(", ")}</Text>
      {event.duration && <Text style={styles.eventDetails}>🕒 Duration: {event.duration}</Text>}
      {event.review && <Text style={styles.eventDetails}>⭐ Review: {event.review}</Text>}

      <View style={styles.categoryContainer}>
        {event.category.map((cat, index) => (
          <Text key={index} style={[styles.categoryBadge, { backgroundColor: categoryColors[index % categoryColors.length], color: "#000" }]}>
            {cat}
          </Text>
        ))}
      </View>

      <Text style={styles.eventDescription}>{event.description}</Text>
      <Text style={styles.sectionTitle}>🧑‍💼 Attendees by Department:</Text>
      {Object.keys(attendeesByDept).map((dept) => (
        <View key={dept} style={styles.departmentContainer}>
          <Text style={styles.departmentTitle}>{dept}</Text>
          {attendeesByDept[dept].map((attendee) => (
            <Text key={attendee} style={styles.attendeeText}>• {attendee}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f0f4f8" },
  header: { fontSize: 26, fontWeight: "bold", marginBottom: 15, textAlign: "center", color: "#2c3e50" },
  eventDetails: { fontSize: 16, color: "#34495e", marginBottom: 10 },
  categoryContainer: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  categoryBadge: { padding: 8, borderRadius: 10, marginRight: 5, fontWeight: "bold" },
  eventDescription: { fontSize: 16, color: "#2c3e50", marginVertical: 10, padding: 10, borderRadius: 8 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginTop: 15, marginBottom: 5, color: "#0a0c33" },
  departmentContainer: { marginBottom: 15, padding: 10, backgroundColor: "#d1e7dd", borderRadius: 8 },
  departmentTitle: { fontSize: 18, fontWeight: "bold", color: "#155724" },
  attendeeText: { fontSize: 16, color: "#155724", marginLeft: 10, marginVertical: 5 },
});

export default EventDetails;
