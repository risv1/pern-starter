// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const checkAuth = (setUser, navigate) => {
    const getUser = localStorage.getItem("user")
        console.log("user: ", getUser)
        if(getUser){
            setUser(JSON.parse(localStorage.getItem("user")!))
        } else {
            navigate("/signin")
        }
}