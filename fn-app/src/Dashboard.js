import React, { useState } from 'react'
import axios from 'axios'

import { getUserCookie } from './utils/common'

function Dashboard(props) {
    const user = getUserCookie()
    const [loading, setLoading] = useState(false)

    const handleLogout = () => {
        setLoading(true)
        axios.get('http://localhost:5000/users/logout')
        .then(response => {
            console.log("Dashboard -> handleLogout -> response", response.data)
            return response.data
        })
        .then(data => {
            console.log("Dashboard -> handleLogout -> response data json",data)
            if(data.message === 'OK') {
                props.history.push('/login')        
            }
        })
        .catch(error => {
            setLoading(false)
            console.log("Dashboard -> handleLogout -> response error",error)
        })
        setLoading(false)
    }

    return (
        <div>
            Welcome {user}!<br /><br />
            <input type="button" onClick={handleLogout} value="Logout" disabled={loading}/>
        </div>
    )
}

export default Dashboard