import * as React from 'react';

export const Message: React.SFC = props => {
    return (
        <p className="message">{props.children}</p>
    );
};
