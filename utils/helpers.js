import attendeesData from "../data/attendees.json";

export const filterEvents = (events) => {
  return events.filter((event) => {
    const eventDate = new Date(event.startDate);
    return eventDate.getFullYear() === 2024 && eventDate.getMonth() >= 6;
  });
};

export const matchAttendees = (eventId) => {
  const attendees = attendeesData.filter((attendee) => attendee.attendedEventIDs.includes(eventId));
  const groupedAttendees = {};

  attendees.forEach((attendee) => {
    if (!groupedAttendees[attendee.department]) {
      groupedAttendees[attendee.department] = [];
    }
    groupedAttendees[attendee.department].push(attendee.name);
  });

  return groupedAttendees;
};
