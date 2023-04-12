import React, { FC, FormEventHandler, PropsWithChildren, useState } from 'react'

export interface InputState {
    [key: string]: any
}

interface OnSubmit {
    onSubmitForm: (state: InputState) => void
}

export const FormInputs: FC<PropsWithChildren<OnSubmit>> = ({ children, onSubmitForm }) => {
    const [inputs, setInputs] = useState<InputState>({ key: null })

    const formSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        onSubmitForm(inputs)
    }

    const onChangeValue: FormEventHandler<HTMLFormElement> = (event) => {
        const eventInput = event.target as HTMLInputElement
        setInputs({
            ...inputs,
            [eventInput.name]: eventInput.value
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
