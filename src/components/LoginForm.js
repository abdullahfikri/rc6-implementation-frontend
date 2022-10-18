import React from 'react';

export default function LoginForm({
    email,
    password,
    setEmail,
    setPassword,
    loginOnSubmit,
}) {
    return (
        <div className="login w-full ">
            <form
                onSubmit={loginOnSubmit}
                className="flex flex-col justify-center flex-wrap gap-4 "
            >
                <input
                    className="w-[322px] h-[56px] rounded-[26px] outline-none px-9 caret-red-500 text-[20px] font-bold text-black bg-inputBg placeholder-inputText"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="w-[322px] h-[56px] rounded-[26px] outline-none px-9 caret-red-500 text-[20px] font-bold text-black bg-inputBg placeholder-inputText"
                    placeholder="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button
                    type="submit"
                    className="w-[322px] h-[56px] bg-buttonBg rounded-[26px] text-white font-bold mt-[30px] transition-all duration-500 hover:opacity-50 hover:text-gray-300 hover:scale-105"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}
