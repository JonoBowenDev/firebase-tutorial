import React from "react";
import { Card, Button } from "react-bootstrap"; 

export default function Dashboard() {

    function handleLogout() {

    }

    return (
        <div>
            <Card>

            </Card>
            <div className="w-100 text-center mt-2">
               <Button variant="link" onClick={handleLogout}>Log out</Button>
            </div>
            
        </div>
    )
}
