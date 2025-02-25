import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { filterEvents } from "../utils/helpers";
import eventsData from "../data/events.json";

const EventList = ({ navigation }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(filterEvents(eventsData));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📅 Gjensidige Events (Q3 & Q4 2024)</Text>
      <FlatList
        data={events}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.eventItem}
            onPress={() => navigation.navigate("EventDetails", { event: item })}
          >
            <Text style={styles.eventTitle}>{item.name}</Text>
            <Text style={styles.eventData}>{item.startDate} | {item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f0f4f8" },
  header: { fontSize: 26, fontWeight: "bold", marginBottom: 15, textAlign: "center", color: "#2c3e50" },
  eventItem: { padding: 15, backgroundColor: "#0a0c33", marginBottom: 8, borderRadius: 10 },
  eventTitle: { fontSize: 18, fontWeight: "bold", color: "#ffffff" },
  eventData: { fontSize: 16, color: "#f0f4f8", marginBottom: 5 },
});

export default EventList;
