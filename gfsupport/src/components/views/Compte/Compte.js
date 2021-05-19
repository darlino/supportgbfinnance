import React,  {useState, useEffect} from 'react'
import { Navigation } from '../../Layouts/Navigation'
import {Link, BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import { Element } from './Element'
import { BiDownArrow } from 'react-icons/bi'
export const Compte = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogleAccordion = () =>{
        setIsOpen(!isOpen)
    }

    const style = {
        transition : ".2s ease"
    }

    let display = "none"
        if (isOpen === true){
            display = "flex"
            
        }
        else{
            display = "none"
        }

    useEffect(() =>{
        
    },[])

    return (
        <Router>
            <Navigation/>
            <div className="row p-4 d-flex flex-row justify-content-center">
                
                    <Switch>
                        <Route path="/compte/:slug" component={Element} />
                    </Switch>
               
                <div className="bg-secondary m-2" style={{ width : "1px"}}>
                    
                </div>
                <div className="col-4 p-4 m-2 position-sticky d-flex flex-column">
                    <ul className="list-group list-group-flush"> 
        	            <li className="list-group-item">
                            <Link to="/compte/uf">
                                fihfeih
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link to="/compte/usdf">
                                fihfeih
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </Router>
    )
}
