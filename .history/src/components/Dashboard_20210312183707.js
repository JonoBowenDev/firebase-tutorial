import React from "react";
import { Card } from "react-bootstrap"; 

export default function Dashboard() {
    return (
        <div>
            <Card>
            </Card>
            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
            
        </div>
    )
}
