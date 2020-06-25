import React, {useContext} from 'react'
import UserComponentF from './UserComponentF'
import {UserContext, ChannelContext} from '../App';

function UserComponentE() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default UserComponentE
