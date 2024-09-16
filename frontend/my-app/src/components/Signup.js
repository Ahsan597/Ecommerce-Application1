import React, { useState,useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import Home from '@material-ui/icons/Home';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import Home from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import './Signup.css'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { AuthContext } from './context/AuthContext';

export default function Signup({onLogin}) {
    const [name, setName] = useState("");
    const [name1, setName1] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [pass1, setPass1] = useState("");
    const [nameerror, setNameerror] = useState(false);
    const [name1error, setName1error] = useState(false);
    const [passerror, setPasserror] = useState(false);
    const [emailerror, setEmailerror] = useState(false);
    const [pass1error, setPass1error] = useState(false);
    const [helpertext, setHelpertext] = useState();
    const [helperText1, setHelperText1] = useState();
    const [helperText2, setHelperText2] = useState();
    const [helperText3, setHelperText3] = useState();
    const [helperText4, setHelperText4] = useState();
    const [passwordshow, setPasswordshow] = useState(false)
    const [passwordshow1, setPasswordshow1] = useState(false)

    const { setIsAuthenticated } = useContext(AuthContext);

    const navigate = useNavigate();
    const submithanlder = (e) => {
        // e.prevent.default()
        axios.post('http://localhost:4200/signup/postsignup', {
            name,
            name1,
            email,
            pass
        })
            .then(response => { 
                // console.log(response)
                // console.log('Signup successful:', response.data);
                // Redirect the user to the home page after successful signup
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    setIsAuthenticated(true);
                    navigate('/');
                  }
              
            })
            .catch(error => {
                console.log(error)
                console.error('Error signing up:', error);
            });
    }

    

    useEffect(() => {
        // const urlParams = new URLSearchParams(window.location.search);
        // const myParam = urlParams.get('id');
        // axios.get(`http://localhost:4200/signup/getsignup?id=${myParam}`)
        //     .then(response => {
        //         console.log(response.data)
        //         setName(response.data.name)
        //         setName1(response.data.name1)
        //         setPass(response.data.pass)
        //         setPass1(response.data.pass1)
        //         setEmail(response.data.email)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

        if (name.length > 0 && name.length < 5) {
            setNameerror(true)
            setHelpertext("name must be of five characters ")
        }
        else if (name.length < 1) {
            setNameerror(true)
            setHelpertext("must enter your first name ")
        }
        else if (name.length === 5) {
            setNameerror(false)
            setHelpertext("")
        }


        if (name1.length > 0 && name1.length < 5) {
            setName1error(true)
            setHelperText2("name must be of five characters ")
        }
        else if (name1.length < 1) {
            setName1error(true);
            setHelperText2("must enter your last name ")
        }
        else if (name1.length === 5) {
            setName1error(false)
            setHelperText2("")
        }
        if (pass.length > 0 && pass.length < 8) {
            setPasserror(true);
            setHelperText3("password must be of eight characters ")
        }
        else if (pass.length < 1) {
            setPasserror(true);
            setHelperText3("must enter password ")
        }
        else if (pass.length == 8) {
            setPasserror(false)
            setHelperText3("")
        }

        if (email.length < 1) {
            setEmailerror(true);
            setHelperText1("must enter email")
        }
        else if (email.indexOf("@gmail.com") === -1) {
            setEmailerror(true);
            setHelperText1("email is invalid")
        }
        else {
            setEmailerror(false);
            setHelperText1("")
        }

        if (pass1 != pass) {
            setPass1error(true,);
            setHelperText4("password doesnot match ")
        }
        else if (pass1.length < 1) {
            setPass1error(true);
            setHelperText4("not match ")
        }
        else {
            setPass1error(false)
            setHelperText4("")
        }

    }, [name, name1, email, pass, pass1])
    const handleChange = (func, value) => {
        func(value)
    }
    return (
        <div>
            <div className="accformheight">
                <div className="margin-top">
                    <div className="form" autoComplete="off">
                        <h2 className="createaccount">Create Account</h2>
                        <p className="mm">Enter  FirstName:</p><br></br>
                        <TextField
                            error={nameerror}
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => handleChange(setName, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helpertext}
                            variant="standard"
                        /><br></br>
                        <p className="mm">Enter lastName:</p><br></br>
                        <TextField
                            error={name1error}
                            type="text"
                            name="name1"
                            value={name1}
                            onChange={e => handleChange(setName1, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helperText2}
                            variant="standard"
                        /><br></br>
                        <p className="mm mmmm">Enter email or Phone no:</p><br></br>
                        <TextField
                            error={emailerror}
                            type="text"
                            name="email"
                            value={email}
                            onChange={e => handleChange(setEmail, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helperText1}
                            variant="standard"
                        /><br></br><p className="mm ">Enter Password</p>
                        <br></br>
                        <TextField
                            error={passerror}
                            type={passwordshow ? "text" : "password"}
                            value={pass}
                            name="pass"
                            onChange={e => handleChange(setPass, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helperText3}
                            variant="standard"
                        />
                        {passwordshow ? <VisibilityIcon className="btnsh" onClick={() => setPasswordshow(false)} /> : <VisibilityOffIcon className="btnsh" onClick={() => setPasswordshow(true)} />}
                        <br></br>
                        <p className="mm mmm">Enter Password again</p><br></br>
                        <TextField
                            error={pass1error}
                            type={passwordshow1 ? "text" : "password"}
                            name="pass1"
                            value={pass1}
                            onChange={e => handleChange(setPass1, e.target.value)}
                            id="standard-error-helper-text"
                            helperText={helperText4}
                            variant="standard"
                        />
                        {passwordshow1 ? <VisibilityIcon className="btnsh" onClick={() => setPasswordshow1(false)} /> : <VisibilityOffIcon className="btnsh" onClick={() => setPasswordshow1(true)} />}
                        <br></br>
                        <button className="btn7" disabled={nameerror === true || name1error === true || emailerror === true || passerror === true || pass1error === true} onClick={submithanlder}>Create</button>
                    </div>
                </div>
            </div></div>
    )
}
