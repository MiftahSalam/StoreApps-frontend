import React, { useState } from 'react'
const axios = require('axios').default

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue)

    const handleChange = e => {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

function Login(props) {
    const username = useFormInput('')
    const password = useFormInput('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        console.log("Login -> handleLogin")
        setError(null)
        setLoading(true)

        axios.defaults.withCredentials = true
        axios({
            method: 'post',
            url: 'http://localhost:5000/users/login/',
            data: {
                username: username.value,
                password: password.value    
            },
            withCredentials: true,
        })
        .then(response => {
            console.log("Login -> handleLogin -> response", response.data)
            console.log("Login -> handleLogin -> cookie", document.cookie)
            return response.data
        })
        .then(data => {
            console.log("Login -> handleLogin -> response data json",data)
            props.history.push('/dashboard')
        })
        .catch(error => {
            setLoading(false)
            console.log("Login -> handleLogin -> response error",error)
            if(error.response.status === 401) setError(error.response.data.message)
            // else setError("Something went wrong")
        })
    }

    return (
        <div 
            // style={{ 
            //     display: 'flex', 
            //     flexDirection: 'column', 
            //     justifyContent: 'center', 
            //     alignItems: 'center' 
            //     }}
        >
            Login<br /><br />
            <div>
                Username<br />
                <input type="text" {...username} autoComplete="new-password" />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input  type="text" {...password} autoComplete="new-password" />
            </div>
            { error && <><small style={{ color: 'red' }}>{error}</small></> }
            <input 
                type="button" 
                value={loading ? 'Loading...' : 'Login'} 
                onClick={handleLogin}
                disabled={loading}
            />
        </div>
    )
}

export default Login