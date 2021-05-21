import React, {useState, useEffect} from 'react'
import bg from '../../assets/poly.svg'
import logo from '../../assets/logo.png'
import axios from 'axios'
import swal from 'sweetalert'
import { Redirect } from 'react-router-dom'

export const Login = (props) => {
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const headers = {
        'Content-Type': 'text/plain',
    }

    const apiClient = axios.create({
        withCredentials: true,
        headers: headers
        
    })

    const handleEmail = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        e.preventDefault()
        setPassword(e.target.value)
    }
    apiClient.defaults.xsrfHeaderName = "X-CSRFToken";
    apiClient.defaults.xsrfCookieName = "csrftoken";

    const handleSubmit = e =>{
        e.preventDefault()
        let fd = new FormData()
        fd.append("email", email)
        fd.append("password", password)
        
        
        apiClient.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
            apiClient.post('http://127.0.0.1:8000/api/login', fd,)
            .then(res => {
                if (res.data.status_code === "200"){
                    window.localStorage.setItem("token", res.data.token)
                    console.log(window.localStorage.getItem("token"))
                    window.location = "/dashboard"
                    
                    
                }
                else{
                    swal({
                        title: "Erreur",
                        text: "Vos informations sont erronées",
                        icon: "error",
                        button: "Ok",
                      });
                }
            })
        });
        
    }

    return (
        <div className="row" style={{ backgroundImage :`url(${bg})`, height: "100vh", background: "cover", overflowX: "hidden", }}>
            <div className="col-4 mx-auto p-4 my-auto bg-light d-flex justify-content-center flex-column">
                    <img src={logo} className="mx-auto" alt="" />
                    <div className="row mx-auto p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Adresse email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" onChange={handleEmail} aria-describedby="emailHelp" placeholder="Entrer votre email"/>
                                <cite id="emailHelp" className="form-text text-muted">Demander a votre administrateur de vous fournir ces informations</cite>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword} placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}
