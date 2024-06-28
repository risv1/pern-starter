import { useEffect } from "react"
import { useAuth } from "../layouts/AuthProvider"
import Navbar from "./Navbar"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { checkAuth } from "../lib/checkAuth"

export default function Home() {

    const navigate = useNavigate()
    const {setUser} = useAuth()

    useEffect(()=>{
        checkAuth(setUser, navigate)
    }, [])

    return (
        <>
        <Navbar />
        <div className="w-screen h-[95vh] flex justify-center items-center flex-col gap-3">
            <h1 className="font-bold text-xl text-black">Hello World</h1>
            <Button className="w-32">Click Me</Button>
        </div>
        </>
    )
}