import React from 'react'
import axios from 'axios'
import { Navigation } from '../layouts/Navigation'
import { Sidebar } from '../layouts/sidebar'
export const Dashboard = (props) => {

   
    

    return (
        <div>
            <Navigation/>
            <Sidebar/>
            <div classname="col-10 bg-primary">
                yo
            </div>
        </div>
    )
}
