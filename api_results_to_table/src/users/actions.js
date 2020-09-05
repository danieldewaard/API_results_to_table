import axios from 'axios';
// import { postsApiUrl } from './constants';
import { Action, Dispatch } from 'redux';

export const USERS_FETCH_BEGIN = 'USERS_FETCH_BEGIN';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
	avatar: string;
}

export type UsersList = User[];

export interface UsersAction extends Action {
    users: UsersList;
}

// Internal action creators
const usersFetchBegin = () => {
    return {
        type: USERS_FETCH_BEGIN
    };
};

const usersFetchSuccess = (users: UsersList) => {
    //console.log(Users);
    return {
        type: USERS_FETCH_SUCCESS,
        users
    };
};

const usersFetchError = () => {
    return {
        type: USERS_FETCH_ERROR
    };
};

// Action creator that returns function (thunk) instead of an action
// Will be processed by `redux-thunk` middleware
export const usersFetch = () => (dispatch: Dispatch<UsersAction>) => {

    // API request will be executed...    
    dispatch(usersFetchBegin());

    // ...now
    return axios.get('https://reqres.in/api/users')
		.then(resp => {
        //.then((response: { data: UsersList }) => {
        //.then((response: { data: UsersList }) => {
              
            // Get only 10 first posts, due to task requirements
            // Array should be sliced ASAP, because we don't need large amount of data in an action
            
            //const first10Posts = response.data;// .slice(0, 10);
			console.log("something happened")
			
            console.log(resp.data.data)
			dispatch(usersFetchSuccess(resp.data.data));
        })
        .catch(() => {
			console.log("something went wrong")
            // Something is no yes 👎 (thanks Tusk for english lessons)
            dispatch(usersFetchError());
        });
};