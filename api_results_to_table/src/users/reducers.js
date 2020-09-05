import { USERS_FETCH_BEGIN, USERS_FETCH_ERROR, USERS_FETCH_SUCCESS, UsersAction, UsersList } from './actions';

export interface UsersState {
    users: UsersList;
    loading: boolean;
    error: boolean;
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: false
};

export const users = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case USERS_FETCH_BEGIN:
            return {...initialState, loading: true};
        case USERS_FETCH_SUCCESS:
            return {...initialState, users: action.users};
        case USERS_FETCH_ERROR:
            return {...initialState, error: true};
        default:
            return state;
    }
};
