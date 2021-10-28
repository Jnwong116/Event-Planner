export const deleteEvent = (e, id) => {
const filteredEvents = e.state.events.filter(s => {
    return s.id !== id;
  });

  e.setState({
    events: filteredEvents
  });
};