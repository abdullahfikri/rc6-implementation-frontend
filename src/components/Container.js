import React, { useState } from 'react';
import ContainerNav from './ContainerNav';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function Container() {
    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.status === 404) {
                return alert(data.message);
            }
            console.log('gege');
            setEmail('');
            setPassword('');
        } catch (error) {
            console.log(error.message);
        }
    };
    const registerOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                'http://localhost:5000/user/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password }),
                }
            );
            const data = await response.json();
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="w-[464px] min-h-[543px] bg-secondary mx-auto mt-[54px] rounded-[18px] flex items-center flex-col">
            <ContainerNav isLogin={isLogin} setIsLogin={setIsLogin} />
            <div className="containerInput mt-[41px]">
                {isLogin && (
                    <LoginForm
                        email={email}
                        password={password}
                        loginOnSubmit={loginOnSubmit}
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                )}
                {!isLogin && (
                    <RegisterForm
                        registerOnSubmit={registerOnSubmit}
                        name={name}
                        email={email}
                        password={password}
                        setName={setName}
                        setEmail={setEmail}
                        setPassword={setPassword}
                    />
                )}
            </div>
        </div>
    );
}
