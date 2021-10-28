import Button from "@material-ui/core/Button";
const log = console.log;
export const renderButtons = e => {
    const result = []
    for(var i = 0; i < e.state.events.length; i++){
        result.push(<Button> {e.state.events[i].name} </Button>);
        result.push(<Button> Update </Button>);
        result.push(<Button
                        onClick={() =>
                        deleteEvent(this, this.state.events[i].id)
                    }
                    > Delete </Button>);
        result.push(<br></br>);
    }
    return <div> {result} </div>;
}

export const deleteEvent = (e, id) => {
        log(id)
    const filteredEvents = e.state.events.filter(s => {
        return s.id !== id;
      });
    
        log(filteredEvents)
    
      e.setState({
        events: filteredEvents
      });
};