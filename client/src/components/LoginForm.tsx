import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components';


export default function LoginForm() {

    const [error, setError]=useState(false)
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    const handleLogin = async () => {
        setError(false)
        try {
            const { email, password } = formValues;
            await signInWithEmailAndPassword(firebaseAuth, email, password)
        } catch (err) {
            console.log(err);
            setError(true)
        }
    };
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) navigate("/admin/dashboard");
    });

    return (
    <>
        {error && <ErrorBox><h5>Email or Password was incorrect. Please try again</h5></ErrorBox>}
        <Container>
            <div className="content">
                <div className="form-container flex column a-center j-center">
                    <div className="form flex column a-center j-center">
                        <div className="title">
                            <h3>Login</h3>
                        </div>
                        <div className="container flex column">
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={formValues.email}
                                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                value={formValues.password}
                                onChange={(e) => setFormValues({ ...formValues, [e.target.name]: e.target.value })}
                            />
                            <button className="signUp" onClick={handleLogin}>Log in</button>
                        </div>
                    </div>
                </div >
            </div >
            </Container>
        </>
    )
}

const Container = styled.div`

  .content {
    display:flex;
    justify-content:center;

    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      .form {
        padding: 2rem;
        background-color: rgba(137,221,61, 0.5);
        width: 25vw;
        gap: 2rem;
        color:white;
        border-radius: 10px;
        h3{
        text-shadow:2px 2px 2px #e63454;
        }
        .container {
          gap: 2rem;
          input {
            padding: 0.5rem 1rem;
            margin:5px;
            width: 15rem;
          }
          button {
            padding: 0.5rem 1rem;
            background-color:#e63454;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;

const ErrorBox = styled.div`
    color:red;
    background-color:pink;
    border:2px solid red;
    width:25vw;
    text-align:center;
    margin-bottom:10px;
`
