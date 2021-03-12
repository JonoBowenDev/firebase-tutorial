import React, { useState, useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom"; 

export default function UpdateProfile() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 

    const { currentUser } = useAuth(); 

    const history = useHistory(); 

    async function handleSubmit (e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match"); 
        }

        try{
            setError("");
            setLoading(true); 
            await signUp(emailRef.current.value, passwordRef.current.value);
            history.push("/"); 
        } catch {
            setError("Failed to create an account"); 
        }
        
        setLoading(false); 
    }

    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant ="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required 
                        defaultValue={currentUser.email}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required 
                        placeholder="Leave blank to keep the same"/>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required 
                        placeholder="Leave blank to keep the same"/>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Update
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            <Link to="/">Cancel</Link>
        </div>
        </div>
    )
}
