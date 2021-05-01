import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { getUserCookie } from './common'

function PublicRoute({component: Component, ...rest}) {
    return (
        <Route 
            {...rest}
            component={ props =>
                !getUserCookie() ? <Component {...props} />: <Redirect to={{
                    pathname: '/dashboard'
                }}/>
            }
        />
    )
}

export default PublicRoute