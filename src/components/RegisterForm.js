import React from 'react';

export default function RegisterForm({
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    registerOnSubmit,
}) {
    return (
        <div className="register w-full ">
            <form
                onSubmit={registerOnSubmit}
                className="flex flex-col justify-center flex-wrap gap-4"
            >
                <input
                    className="w-[322px] h-[56px] rounded-[26px] outline-none px-9 caret-red-500 text-[20px] font-bold text-black bg-inputBg placeholder-inputText"
                    placeholder="Name"
                    type="text"
                    required
                    minLength={3}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="w-[322px] h-[56px] rounded-[26px] outline-none px-9 caret-red-500 text-[20px] font-bold text-black bg-inputBg placeholder-inputText"
                    placeholder="Email"
                    type="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="w-[322px] h-[56px] rounded-[26px] outline-none px-9 caret-red-500 text-[20px] font-bold text-black bg-inputBg placeholder-inputText"
                    placeholder="Password"
                    type="password"
                    required
                    minLength={8}
                    maxLength={16}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button
                    type="submit"
                    className="w-[322px] h-[56px] mb-10 bg-buttonBg rounded-[26px] text-white font-bold mt-[30px] transition-all duration-500 hover:opacity-50 hover:text-gray-300 hover:scale-105"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}
