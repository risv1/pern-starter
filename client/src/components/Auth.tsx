import { useState } from "react"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"

export default function Auth() {

    const [loginPrompt, setLoginPrompt] = useState<boolean>(true)

    return (
        <div className="w-screen h-screen flex">
            {loginPrompt ? (
                <LoginForm prompt={()=>setLoginPrompt(false)} />
            ) : (
                <RegisterForm prompt={()=>setLoginPrompt(true)} />
            )}
        </div>
    )
}