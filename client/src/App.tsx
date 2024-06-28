import { Button } from "./components/ui/button";

export default function App() {
    return (
        <div className="w-screen h-screen flex justify-center items-center flex-col gap-3">
            <h1 className="font-bold text-xl text-black">Hello World</h1>
            <Button className="w-32">Click Me</Button>
        </div>
    )
}