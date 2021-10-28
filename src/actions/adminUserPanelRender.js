import Button from "@material-ui/core/Button";

export const renderButtons = e => {
    const users = {
        users: e.state.users
    }
    const result = []
    for(var i = 0; i < e.state.users.length; i++){
        result.push(<Button> {e.state.users[i].name} </Button>);
        result.push(<Button> Update </Button>);
        result.push(<Button> Delete </Button>);
        result.push(<br></br>);
    }
    return <div> {result} </div>;
}