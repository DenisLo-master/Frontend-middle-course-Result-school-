import React, { FC } from 'react'
import { FormInputs, InputState } from '../components/UI/FormInputs'
import { Input } from '../components/UI/Input'
import { InputStyle } from '../hoc/TopBar';
import { Button } from '@mui/material';




interface SignUpProps {
    onSubmit: (state: SignUpInputs) => void
    onCancel?: () => void;
    inputStyle: InputStyle
}

export interface SignUpInputs {
    name: string
    nickname: string
    email: string
    gender: string
    password: string
}

export const SignUp: FC<SignUpProps> = ({ onSubmit, inputStyle, onCancel }) => {

    const onSubmitForm = (state: InputState) => {
        const signUpInputs = state as SignUpInputs
        onSubmit(signUpInputs)
    }

    return (
        <div
            className='flex w-1/2 flex-col items-center justify-center
             p-2 bg-sky-200 rounded-xl shadow-md'
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

                <div className='flex flex-row py-2'>
                    <div className='pr-4' >
                        <Button
                            type='submit'
                            variant="contained"
                            color="info"
                        >
                            SignUp
                        </Button>
                    </div>
                    <Button
                        variant="outlined"
                        color="info"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </div>
            </FormInputs>
        </div>
    )
}