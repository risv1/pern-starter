import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth } from "../layouts/AuthProvider";
import { API_URL } from "../lib/url";

export default function Navbar() {

    const navigate = useNavigate()
    const {user, setUser} = useAuth()

    const logout = async () => {
        try{
            const response = await fetch(`${API_URL}/logout`, {
                method: "POST",
                credentials: "include"
            })
            const data = await response.json()
            if(response.ok) {
                setUser(null)
                localStorage.removeItem("user")
                navigate("/signin")
            } else {
                console.error(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="h-20 flex w-screen flex-row justify-between bg-background p-5">
            <h1 className="font-semibold text-xl">
            React <span className="text-blue-500">+</span> Express
            </h1>
            {
                user ? (
                    <Button onClick={logout} className="bg-primary">Logout</Button>
                ) : (
                    <Button variant={"destructive"} onClick={()=>navigate("/signin")} className="bg-primary">Login</Button>
                )
            }

        </div>
    )
}