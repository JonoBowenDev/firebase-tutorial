import React, { useState, useRef } from 'react'; 
import { Form, Button, Card, Alert } from 'react-bootstrap'; 
import { useAuth } from "../contexts/AuthContext"; 
import { Link, useHistory } from "react-router-dom"; 

export default function ForgotPassword() {

    const emailRef = useRef();

    const [error, setError] = useState(""); 
    const [loading, setLoading] = useState(false); 

    const { login } = useAuth(); 

    const history = useHistory(); 

    async function handleSubmit (e) {
        e.preventDefault();

        try{
            setError("");
            setLoading(true); 
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/"); 
        } catch {
            setError("Failed to sign in"); 
        }
        
        setLoading(false); 
    }

    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Login</h2>
                {error && <Alert variant ="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">
                        Reset Password
                    </Button>
                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        </div>
    )
}
