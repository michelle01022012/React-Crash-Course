import { useParms } from 'react-router-dom'
import React, { useEffect } from 'react';

function Users() {
    const { username } = useParms()
    useEffect (() => {
        //fetch('https://api.instagram.com/$(username}')
    })
    return <h1>username</h1>
}

export default Users