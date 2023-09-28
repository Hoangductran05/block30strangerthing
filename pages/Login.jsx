import React, { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" >Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com " id="email" name="email" />
            <label htmlFor="password" >Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button type="submit">Log in</button>
        </form>
        <button>Already have an account? Register here.</button>
        </>
    )
}