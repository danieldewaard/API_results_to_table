import React from 'react'
import MaterialTable from 'material-table'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { UsersAction, usersFetch } from '../actions';
import { MainState } from '../../index';
import { UsersState } from '../reducers';

// State interface
interface StateProps {
    usersState: UsersState;
}

// Actions interface
interface DispatchProps {
    usersFetch: typeof usersFetch;
}

// Component interface
interface Props extends StateProps, DispatchProps {}


class Table extends React.Component<Props, {}> {
  
  // Run the action to access data from the API 	
  componentDidMount() {
        this.props.usersFetch();
    }	

  render() {
	
	// Access API data and put it in the appropriate form to be displayed in the table
    const {props} = this;
    const users = props.usersState.users;
	
    var i;
	var results = [];
	for (i = 0; i < users.length; i++) {
		results[i] = { id: users[i].id, first_name: users[i].first_name, last_name: users[i].last_name, email: users[i].email, avatar: users[i].avatar};
	}
	
    return (
	  
      <div style={{ maxWidth: '100%' }}>
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
        <MaterialTable
          columns={[
            { title: 'Id', field: 'id'},
            { title: 'Email', field: 'email' },
            { title: 'First Name', field: 'first_name'},
            { title: 'Last Name', field: 'last_name'}
          ]}
		  
          data={results}
          title="Data Display"
		  options={{
			exportButton: true,
			search: false,
			sorting: true,
			headerStyle: { position: 'sticky', top: 0 }, 
			maxBodyHeight: '500px'
		  }}
		  
		  detailPanel={[
			{
			  tooltip: 'Show Avatar Link',
			  render: rowData => {
				return (
				  <div
					style={{
					  fontSize: 15,
					  textAlign: 'left',
					  color: 'grey',
					  marginLeft: '30px'
					}}
				  >
					<div style={{color: 'black', fontSize:25}}>Avatar Link</div>
					{rowData.avatar}
				  </div>
				)
			  },
			}
		  ]}
        />
      </div>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(Table);