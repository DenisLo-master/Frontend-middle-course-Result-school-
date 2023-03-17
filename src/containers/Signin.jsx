import React from 'react'
import FormInputs from '../components/UI/FormInputs'
import Input from '../components/UI/Input'

function Signin({ onSubmit, inputStyle }) {
    return (
        <div style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "15px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "5px 5px 5px gray"
        }}>
            <h3>Вход</h3>
            <FormInputs onSubmit={onSubmit} >
                <Input
                    name="email"
                    type="email"
                    label="Почта"
                    {...inputStyle}
                />
                <Input
                    name="password"
                    type="password"
                    label="Пароль"
                    {...inputStyle}
                />
                <button
                    style={{
                        margin: "2px",
                        backgroundColor: "#387aff",
                        color: "#fff",
                        borderRadius: "5px",
                        border: "1px solid #387aff"
                    }}
                    type='submit'>Войти</button>
            </FormInputs>
        </div>
    )
}

export default Signin