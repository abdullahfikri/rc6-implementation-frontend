import React from 'react';

export default function ContainerNav({ isLogin, setIsLogin }) {
    return (
        <div className="containerNav mt-[30px]">
            <button
                onClick={() => {
                    setIsLogin(true);
                }}
                className={`w-[120px] py-5  rounded-[16px] font-bold transition-all duration-300 hover:bg-inputBg hover:text-gray-500 ${
                    isLogin && 'bg-inputBg'
                }`}
            >
                Log In
            </button>
            <button
                onClick={() => {
                    setIsLogin(false);
                }}
                className={`w-[120px] py-5 rounded-[16px] font-bold transition-all duration-300 hover:bg-inputBg hover:text-gray-500 ${
                    !isLogin && 'bg-inputBg'
                } `}
            >
                Sign Up
            </button>
            <div className="w-full h-[2px] bg-black mt-5"></div>
        </div>
    );
}
