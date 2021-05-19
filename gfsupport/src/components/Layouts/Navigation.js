import React from 'react'
import logo from '../assets/logo.png'
import './responsivelogo.css'
export const Navigation = () => {
    return (
        <div>
            <nav className="p-1 d-flex justify-content-between">
                <div className="col-2 col-lg-5 col-md-4 col-sm-2">
                    <img src={logo} alt="Home"  />
                </div>
                <div className="">
                    <button className="mt-1 rounded">
                       Raise a request
                    </button>
                </div>
                
            </nav>
        </div>
    )
}
