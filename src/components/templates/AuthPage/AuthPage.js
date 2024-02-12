import { useState } from "react"
import LoginForm from "../../organism/LoginForm/LoginForm"
import SignUpForm from "../../organism/SignUpForm/SignUpForm"

const AuthPage = () => {

    const [isLoginPage, setIsLoginPage] = useState(true);

    const handleAuthSwitch = (val) => {
        if(val == "signup") {
            setIsLoginPage(false)
        } else {
            setIsLoginPage(true)
        }
    }

    return (
        <>
            {isLoginPage ? 
                <LoginForm 
                    onAuthSwitch={handleAuthSwitch}
                /> : 
                <SignUpForm 
                    onAuthSwitch={handleAuthSwitch}
                />}
        </>
    )
}

export default AuthPage