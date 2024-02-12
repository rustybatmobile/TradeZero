import "./InputField.css"

const InputField = ({placeholder, type = 'text'}) => {
    return (
        <input  placeholder={placeholder} type = {type}/>
    )
}

export default InputField

InputField.defaultProps = {
    placeholder: "User ID (eg: AB00001)"
}