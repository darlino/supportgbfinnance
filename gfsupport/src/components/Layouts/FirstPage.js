import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import { BiPhoneCall } from 'react-icons/bi'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export const FirstPage = () => {
    return (
        <>
        <div className="p-4  d-flex flex-column justify-content-center">
            <h1 className="text-center font-weight-bold" style={{ color : "#021859"}}> Base de connaisance </h1>
            <hr/>
            <div className="container p-4 d-flex justify-content-center  mx-auto">
                <Link to="/compte" className="shadow flip col-4 p-4 m-2 d-flex flex-column justify-content-center" style={{ height : "150px", width: "40px"}} >
                    <img src={card1} className="mx-auto" style={{ height : "100%", width: "80px", objectFit:"cover", background: "100%"}} alt=""/>
                    <p style={{ fontSize:"20px" , fontWeight: "bold", textAlign: "center", color: "#000"}}> Compte</p>
                </Link>
                <Link to="/cartes" className="shadow col-4 p-4 m-2 d-flex flex-column justify-content-center" style={{ height : "150px", width: "40px"}} >
                    <img src={card2} className="mx-auto" style={{ height : "100%", width: "80px", objectFit:"cover", background: "100%"}} alt=""/>
                    <p style={{ fontSize:"20px" , fontWeight: "bold", textAlign: "center", color: "#000"}}> Cartes Global Finances</p>
                </Link>
                <Link to="/issues" className="shadow col-4 p-4 m-2 d-flex flex-column justify-content-center" style={{ height : "150px", width: "40px"}} >
                    <img src={card3} className="mx-auto" style={{ height : "100%", width: "80px", objectFit:"cover", background: "100%"}} alt=""/>
                    <p style={{ fontSize:"20px" , fontWeight: "bold", textAlign: "center", color: "#000"}}> Problemes Techniques</p>
                </Link>
            </div>
        </div>
        <div className="row px-2 mb-4 d-flex flex-column justify-content-center" style={{ backgroundColor : "#021e73"}}>
            <h1 className="text-center font-weight-bold p-4 col-6 mx-auto" style={{ color : "#fff"}}> Vous ne trouvez pas ce que vous cherchez?</h1>
            <hr/>
            <div className="container p-4 d-flex justify-content-center  mx-auto">
                <button className="text-dark font-weight-bold col-3 bg-light rounded"> 
                <a href="tel:675 70 88 96">
                    <h5 className="font-weight-bold" style={{ color : "#021859"}}> Contactez nous <BiPhoneCall/> </h5>
                </a>
                </button>
            </div>
        </div>
        <footer className="row px-2 mb-4 font-weight-bold d-flex  justify-content-evenly" style={{ fontFamily : "Fira Sans", color : "#000"}} >
            <div className="col-3 p-4">
                <img src={logo} alt="" />
                <h6 className="ml-3"> &copy;  Global Finance SA</h6>
            </div>
            <div className="col-3 p-4">
                yo
            </div>
            <div className="col-3 p-4">
                yo
            </div>
            <div className="col-3 p-4">
                yo
            </div>
        </footer>
        </>
    )
}
