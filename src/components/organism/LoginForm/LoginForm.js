import FormButton from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";
import LinkText from "../../atoms/LinkText/LinkText";
import Logo from "../../atoms/Logo/Logo";
import Text from "../../atoms/Text/Text";
import "./LoginForm.css"

const LoginForm = (props) => {

    const {onAuthSwitch} = props;

    return (
        <div className="container"> 
            <Text size="large" value={"Login to Zerodha"}/>  
            <div className="logo-container">
                <Logo logoImg={Logo}/>
            </div>
            <InputField placeholder={"User ID (eg: AB00001)"}/>
            <InputField type="password" placeholder={"Enter Password"}/>
            <FormButton fullWidth={true}/>
            <Text isInline={true} value={"Don't have an account yet?"} /> 
            <LinkText onClick={() => onAuthSwitch("signup")} val={" Sign up instead"}/>

        </div>
    )
}

export default LoginForm;