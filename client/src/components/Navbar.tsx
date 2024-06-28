import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "../layouts/AuthProvider";

export default function Navbar() {

    const navigate = useNavigate()

    return (
        <div className="h-20 flex w-screen flex-row justify-between bg-background p-5">
            <h1 className="font-semibold text-xl">
            React <span className="text-blue-500">+</span> Express
            </h1>
            <Button onClick={()=>navigate("/signin")} className="bg-primary">Login</Button>
        </div>
    )
}