Event Management App (React Native)

This app allows users to browse and view details of events. It filters events for Q3 & Q4 of 2024 and groups attendees by department.

Event Listing: Displays upcoming events filtered for Q3 & Q4 2024.
Event Details: Shows event date, venue, instructor/speaker, and attendees.
Attendee Grouping: Groups attendees by their department.
Navigation: Users can navigate between event list and details.
Styled UI: Uses React Native's StyleSheet for styling.

🚀 Setup & Installation

Clone the repository:

git clone https://github.com/your-repo/event-management-app.git
cd event-management-app

Install dependencies:

npm install

Run the application:

npm start

📜 File Descriptions

App.js – Main entry point, sets up navigation.

components/EventList.js – Displays a list of filtered events.

components/EventDetails.js – Shows details of an event and attendees grouped by department.

data/events.json – Stores event details.

data/attendees.json – Stores attendee details.

utils/helpers.js – Contains functions for filtering events and grouping attendees.
