import React, { FC } from 'react'
import { FormInputs, InputState } from '../components/UI/FormInputs'
import { Input } from '../components/UI/Input'
import { InputStyle } from '../hoc/TopBar';
import { Button } from '@mui/material';


interface SignInProps {
    onSubmit: (state: SignInInputs) => void;
    onCancel?: () => void;
    inputStyle: InputStyle
}

export interface SignInInputs {
    email: string
    password: string
}

export const SignIn: FC<SignInProps> = ({ onSubmit, inputStyle, onCancel }) => {

    const onSubmitForm = (state: InputState) => {
        const signUpInputs = state as SignInInputs
        onSubmit(signUpInputs)
    }

    return (
        <div
            className='flex w-1/2 flex-col items-center justify-center
             p-2 bg-sky-200 rounded-xl shadow-md'
        >
            <h3>Вход</h3>
            <FormInputs onSubmitForm={onSubmitForm} >
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
                <div className='flex flex-row py-2'>
                    <div className='pr-4' >
                        <Button
                            type='submit'
                            variant="contained"
                            color="info"
                        >
                            SignIn
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
