import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import user from '../../assets/user.png'
import axios from 'axios'
import './responsivelogo.css'

export const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toogle = () =>{
        setIsOpen(!isOpen)
    }
    let display = "none"
    if (isOpen === true){
        display = "flex"
    }

    else {
        display = "none"
    }
    const config = {
        headers: { Authorization: `Bearer ${window.localStorage.getItem("token")}` }
    };

    const bodyParameters = {
        key: "value"
     };


    const logOut = async () =>{
        await axios.post('http://127.0.0.1:8000/api/logout',bodyParameters, config)
        .then(res => {
            console.log(res.data)
            window.localStorage.clear()
            window.location = "/auth"
        })
    }

    return (
        <div>
            <nav className="p-1 d-flex">
                <div className="container-fluid py-2 m-4 d-flex  justify-content-between">
                    <div className="col-2 col-lg-5 col-md-4 col-sm-2">
                        <img src={logo} alt="Home"  />
                    </div>
                    <div className="pr-4">
                        <div className="mt-1 bg-secondary rounded-circle" id="PopoverFocus" style={{ width : "40px", overflow: "hidden"}} onClick={toogle}>
                            <img src ={user} alt = "" style={{ width: "100%", height : "100%" , background : "cover", objectFit : "cover", backgroundSize : "100%"}} />
                            <div className="position-absolute p-2 mt-2 " style= {{ display : `${display}`}}>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-action" style={{ cursor : "pointer"}}> profile </li>
                                    <li className="list-group-item list-group-item-action" style={{ cursor : "pointer"}} onClick={logOut}> logout </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
