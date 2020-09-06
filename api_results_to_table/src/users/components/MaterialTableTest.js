import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { UsersAction, usersFetch } from '../actions';
import { MainState } from '../../index';
import { UsersState } from '../reducers';
import { Message } from './Message';
import { UserItem } from './UserItem';


interface StateProps {
    usersState: UsersState;
}

// Actions interface
interface DispatchProps {
    usersFetch: typeof usersFetch;
}

// Component interface
interface Props extends StateProps, DispatchProps {}


class MaterialTableTest extends React.Component<Props, {}> {
	
  componentDidMount() {
        this.props.usersFetch();
    }	

  render() {
	  
    const {props} = this;
    const users = props.usersState.users;
	  
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Adı', field: 'name' },
            { title: 'Soyadı', field: 'surname' },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Demo Title"
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
export default connect(mapStateToProps, mapDispatchToProps)(MaterialTableTest);

//ReactDOM.render(<MaterialTableTest />, document.getElementById('App'));