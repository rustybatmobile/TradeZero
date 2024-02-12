import FormButton from "../../atoms/Button/Button";
import InputField from "../../atoms/InputField/InputField";
import LinkText from "../../atoms/LinkText/LinkText";
import Logo from "../../atoms/Logo/Logo";
import Text from "../../atoms/Text/Text";
import "./SignUpForm.css"

const SignUpForm = (props) => {

    const {onAuthSwitch} = props;

    return (
        <div className="container"> 
            <Text value={"Register to Zerodha"}/>  
            <div className="logo-container">
                <Logo logoImg={Logo}/>
            </div>
            <InputField placeholder={"Enter Full Name"}/>
            <InputField placeholder={"Enter Email"}/>
            <InputField type="password" placeholder={"Enter Password"}/>
            <FormButton fullWidth={true} value = {"Sign Up"}/>
            <Text isInline={true} value={"Already have an account yet?"} /> 
            <LinkText onClick={() => onAuthSwitch("login")} val={" Login now"}/>
        </div>
    )
}

export default SignUpForm;