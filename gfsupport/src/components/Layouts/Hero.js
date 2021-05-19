import React from 'react'
import bg from '../assets/bg.png'
import { Heading } from '@chakra-ui/react' 
import './responsivelogo.css'
const style= {
    backgroundImage: `url(${bg})`,
    height: "70vh",
    backgroundSize: "100%",
    marginBottom:'2px',
    opacity: .8,
    backgroundRepeat: 'no-repeat'
    
}

const textStyle = {
    position:'absolute',
    left: "50%",
    top: "40%",
    transform : "translate(-50%,-50%)"
}
export const Hero = () => {
    return (
        <div style={style}>
            <div className="container  text-center mx-auto justify-content-center d-flex flex-column" style={textStyle}>
                <Heading style={{ color: "#fff", fontWeight : "bold"}} fontSize={["20px","25px","50px"]} className="pb-4">
                    How can we help you ?
                </Heading>
                <button className="col-5 col-xs-4 col-lg-2 col-md-3 mt-1 rounded mx-auto">
                    Raise a request
                </button>
            </div>
        </div>
    )
}
