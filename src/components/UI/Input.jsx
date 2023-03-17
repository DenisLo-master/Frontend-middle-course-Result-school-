import React, { useState } from 'react'
import { IconAt } from "@tabler/icons-react"

export default function Input(props) {

    const [inputValue, setInputValue] = useState(props.value)

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const sizeInput = {
        xs: 12,
        sm: 16,
        md: 18,
        lg: 24,
        xl: 30,
    }
    const radiusInput = {
        xs: 5,
        sm: 8,
        md: 12,
        lg: 16,
        xl: 20,
    }
    const styleInput = {
        fontSize: sizeInput[props.size],
        borderRadius: radiusInput[props.radius],
        border: "1px solid #7f7f7f",
        margin: "0px",
        padding: sizeInput[props.size] * 0.2,
        width: "100%",
        boxSizing: "border-box",
        paddingLeft: props.name === "nickname" ? sizeInput[props.size] * 1.1 : "5px",

    }

    const styleLabel = {
        fontSize: sizeInput[props.size],
        marginTop: 0,
        paddingBottom: sizeInput[props.size] * 0.2,
        marginLeft: props.type === "radio" ? sizeInput[props.size] * 0.2 : 0,
    }
    const styleRequired = {
        fontSize: sizeInput[props.size],
        color: "red",
        marginLeft: sizeInput[props.size] * 0.1
    }

    const styleDescription = {
        fontSize: sizeInput[props.size] * 0.7,
        marginTop: sizeInput[props.size] * 0.1,
        marginBottom: sizeInput[props.size] * 0.1
    }

    const direction = {
        display: "flex",
        flexDirection: props.type === "radio" ? "row-reverse" : "column",
        justifyContent: props.type === "radio" ? "flex-end" : "flex-start",
        alignItems: props.type === "radio" ? "center" : "flex-start",
        marginTop: sizeInput[props.size] * 0.5,
        marginBottom: sizeInput[props.size] * 0.5,
        width: props.type === "radio" ? "auto" : "100%",
        boxSizing: "border-box",
    }

    return (
        <div style={direction}>
            <span style={styleLabel}>
                {props.label}
                {props.required && props.type !== "radio" && <span style={styleRequired}>*</span>}
            </span>
            {props.description && <p style={styleDescription}>{props.description}</p>}
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%"
            }}>
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    value={inputValue}
                    onChange={handleChange}
                    type={props.type}
                    style={styleInput}
                    required={props.required}
                />
                {props.name === "nickname" &&
                    <IconAt style={
                        {
                            position: "absolute",
                            paddingLeft: "5px",
                        }} size={sizeInput[props.size] * 0.8} />}
            </div>
        </div>
    )
}

Input.defaultProps = {
    name: 'name',
    type: "text",
    placeholder: "placeholder",
    label: "label",
    description: "",
    error: "error",
    variant: "default",
    radius: "sm",
    size: "xs",
    disabled: false,
    required: true,
    value: "",
}