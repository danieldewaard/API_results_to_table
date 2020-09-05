import * as React from 'react';
import { User } from '../actions';

interface Props {
    user: User;
}

export const UserItem: React.SFC<Props> = props => {

    // TODO: I don't like `dangerouslySetInnerHTML` solution, but I don't have any other ideas ATM
    return (
        <div className="user">
            <p>{props.user.id}</p>
        </div>
    );
};
