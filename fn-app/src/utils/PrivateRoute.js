import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getUserCookie } from './common'

function PrivateRoute({component: Component, ...rest}) {
    // console.log("PrivateRoute -> component", Component)
    // console.log("PrivateRoute -> rest", rest)
    return (
        <Route 
            {...rest}
            component={(props) => 
                getUserCookie() ? <Component {...props} />: <Redirect to={{
                    pathname: '/login',
                    state: {
                        from: props.location
                    }
                }}/>
            }
        />
        // <Route 
        //     {...rest}
        //     render={(props) => {
        //         console.log("PrivateRoute -> render -> props",props);
        //         getUser() ? <Component {...props} /> : <Redirect to={{
        //             pathname: '/login',
        //             state: {
        //                 from: props.location
        //             }
        //         }} 
        //         />
        //     }}
        // />
    )
}

export default PrivateRoute