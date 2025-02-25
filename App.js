import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EventList" component={EventList} options={{ title: "Events" }} />
        <Stack.Screen name="EventDetails" component={EventDetails} options={{ title: "Event Details" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
