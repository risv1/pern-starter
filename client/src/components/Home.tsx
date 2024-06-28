import Navbar from "./Navbar"
import { Button } from "./ui/button"

export default function Home() {
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