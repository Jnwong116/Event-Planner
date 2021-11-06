export const deleteEvent = (e, id) => {
const filteredEvents = e.state.events.filter(s => {
    return s.id !== id;
  });

  e.setState({
    events: filteredEvents
  });
};

export const deleteUser = (e, id) => {
  const filteredUsers = e.state.users.filter(s => {
      return s.id !== id;
    });
  
    e.setState({
      users: filteredUsers
    });
  };