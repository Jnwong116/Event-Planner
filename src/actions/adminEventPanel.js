import Button from "@material-ui/core/Button";

export const renderButtons = e => {
    const events = {
        events: e.state.events
    }
    const result = []
    for(var i = 0; i < e.state.events.length; i++){
        result.push(<Button> {e.state.events[i].name} </Button>);
        result.push(<Button> Update </Button>);
        result.push(<Button> Delete </Button>);
        result.push(<br></br>);
    }
    return <div> {result} </div>;
}