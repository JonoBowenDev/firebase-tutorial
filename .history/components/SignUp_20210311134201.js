import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function SignUp() {

    return (
        <div>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                    </Form.Group>

                </Form>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">

        </div>
        </div>
    )
}
