import React, { FC } from 'react'
import { FormInputs, InputState } from '../components/UI/FormInputs'
import { Input } from '../components/UI/Input'
import { InputStyle } from '../hoc/TopBar';




interface SignUpProps {
    onSubmit: (state: SignUpInputs) => void
    inputStyle: InputStyle
}

export interface SignUpInputs {
    name: string
    nickname: string
    email: string
    gender: string
    password: string
}

export const SignUp: FC<SignUpProps> = ({ onSubmit, inputStyle }) => {

    const onSubmitForm = (state: InputState) => {
        const signUpInputs = state as SignUpInputs
        onSubmit(signUpInputs)
    }

    return (
        <div
            style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "15px",
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "5px 5px 5px gray"
            }}
        >
            <h3>Регистрация</h3>
            <FormInputs onSubmitForm={onSubmitForm} >
                <Input
                    name="name"
                    type="text"
                    label="Имя"
                    placeholder="Введите имя"
                    {...inputStyle}
                />
                <Input
                    name="nickname"
                    type="text"
                    label="Ник"
                    placeholder="Введите ник"
                    required={false}
                    {...inputStyle}
                />
                <Input
                    name="email"
                    type="email"
                    label="Почта"
                    placeholder="name@mail.com"
                    {...inputStyle}
                />
                <Input
                    name="gender"
                    value="male"
                    type="radio"
                    label="мужской"
                    {...inputStyle}
                />
                <Input
                    name="gender"
                    value="female"
                    type="radio"
                    label="женский"
                    {...inputStyle}
                />
                <Input
                    name="password"
                    type="password"
                    label="Пароль"
                    placeholder="пароль"
                    {...inputStyle}
                />
                <Input
                    name="repeatPassword"
                    type="password"
                    label="Повторите пароль"
                    placeholder="Повторите пароль"
                    {...inputStyle}
                />
                <button
                    style={{
                        margin: "10px",
                        fontSize: "16px",
                        backgroundColor: "#387aff",
                        color: "#fff",
                        borderRadius: "5px",
                        border: "1px solid #387aff"
                    }}
                    type='submit'
                >
                    Войти
                </button>
            </FormInputs>
        </div>
    )
}