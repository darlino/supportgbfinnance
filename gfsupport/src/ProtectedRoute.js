
    import { Route, Redirect } from 'react-router-dom'

    const token = window.localStorage.getItem("token");
    
    let isAuth = false
    if (token !== null){
        isAuth = true
    }
    console.log(token, isAuth)
    export function PrivateRoute({ children, ...rest }) {
        return (
          <Route {...rest} render={() => {
              return isAuth === true
              ? children
              : <Redirect to='/auth' />
          }} />
        )
      }

