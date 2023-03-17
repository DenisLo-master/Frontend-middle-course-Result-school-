import React, { useState } from 'react'

export default function FormInputs({ children, onSubmit }) {
    const [inputs, setInputs] = useState()

    const formSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputs)
    }

    const onChangeValue = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form
            onSubmit={formSubmit}
            onChange={onChangeValue}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "flex-start",
                width: "100%",
                padding: "40px",
                boxSizing: "border-box"
            }}
        >
            {children}
        </form>

    )
}
