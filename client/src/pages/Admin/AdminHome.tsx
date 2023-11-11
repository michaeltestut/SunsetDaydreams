import React from 'react'
import {signOut, onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router';


export default function AdminHome() {
    function logOut() {
        signOut(firebaseAuth);
    };
    const navigate = useNavigate()

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate("/admin/login");
    });

    return (
        <>
            <div>AdminHome</div>
            <button onClick={logOut} >Log Out</button>
        </>
    )
}
