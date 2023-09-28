/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password == '') {
          setError('Please enter correct details!');
        } else {
          // TODO: Send signup request to server
          setError('Register successful');
          setEmail('');
          setPassword('');
        }
      };


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Full name</label>
                <input value={name} name="name" id='name' placeholder='Enter your full name here ...' type="text" />

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label mb-3">
                        Enter Your Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="enter email here ..."
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label mb-3">
                        Enter Your password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="enter password here..."
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                    </div>
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                   
                  
                   
                    <div className="d-grid gap-2">
                      <button type="submit">Login</button>
                    </div>
                  </form>
        </>
    )
}