// a universal representation of a user.
// should be used in profile page.
// TODO: implement this.
class User extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const {username, email, birthday, name} = this.props;
        return (
            <div>
                <h5> username:
                    {User.username}
                    </h5>
                    <h5> name:
                    {User.name}
                    </h5>
                    <h5> email:
                    {User.email}
                    </h5>
                    <h5> birthday:
                    {User.birthday}
                    </h5>
            </div>
        )
    }
}

export default User;