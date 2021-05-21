import React from 'react'
import { Navigation } from '../layouts/Navigation'
import { Sidebar } from '../layouts/Sidebar'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { Account } from '../Components/Account'
import  {Cards}  from '../Components/Cards'
import  {Technical}  from '../Components/Technical'
import  {Main}  from '../Components/Main'
import  {Users}  from '../Components/Users'
import  {ChakraProvider}  from '@chakra-ui/react'
export const Dashboard = (props) => {

    return (
        <Router>
            <ChakraProvider>
                <Navigation/>
                
                <Switch>
                    <div className="row d-flex p-2 m-4 ">
                        <Sidebar/>
                        <Route path="/admin/account" component={Account}/>
                        <Route path="/admin/card" component={Cards}/>
                        <Route path="/admin/technical" component={Technical}/>
                        <Route path="/admin/users" component={Users}/>
                        <Route path="/admin/dashboard" component={Main}/>
                        
                    </div>
                </Switch>
            </ChakraProvider>
        </Router>
    )
}
