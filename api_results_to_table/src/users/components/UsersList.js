import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { UsersAction, usersFetch } from '../actions';
import { MainState } from '../../index';
import { UsersState } from '../reducers';
import { Message } from './Message';
import { UserItem } from './UserItem';

// State interface (not internal component state)
// TODO: Form state can be probably partially based on `redux-form` interfaces, but I can't find proper one
interface StateProps {
    usersState: UsersState;
}

// Actions interface
interface DispatchProps {
    usersFetch: typeof usersFetch;
}

// Component interface
interface Props extends StateProps, DispatchProps {}

class UsersList extends React.Component<Props, {}> {

    componentDidMount() {
        this.props.usersFetch();
    }

    // If the render method will be too long (at some point in the future)
    // it should be sliced to multiple methods like `renderLoading`, `renderError`, `renderList` etc.
    render() {
        const {props} = this;
        const users = props.usersState.users;
		
		console.log(users)
		
		//return <Message>test</Message>;
	
        // Users are loading
        if (props.usersState.loading) {
            return <Message>⏳ Loading...</Message>;
        }

        // There's an error during fetching API
        else if (props.usersState.error) {
            return <Message>😫 Sorry, there's an error during fetching data</Message>;
        }

        // List unfiltered users
        if (users.length) {
            return users.map(user => <UserItem key={user.id} user={user}/>);
        }

        return <Message>😞 Oops, no users available</Message>;
    }
}

// Provide access to state
const mapStateToProps = (state: MainState) => ({
    usersState: state.users
});

// Provide access to dispatching actions
const mapDispatchToProps = (dispatch: Dispatch<UsersAction>) => ({
    ...bindActionCreators({usersFetch}, dispatch)
});

// Connect mappers with component
export default connect(mapStateToProps, mapDispatchToProps)(UsersList);