"use client";  // Ensure it's a client-side component

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

// Define types for better clarity
// type UserData = {
//     first_name: string,
//     email: string,
//     sponsorName: string,
//     sponsorEmail: string;
// };

type AuthState = {
    token: string | null,
    userData: any | ''
};

const useAuth = () => {
    const router = useRouter();
    const [auth, setAuth] = useState<AuthState>({ token: null, userData: '' });
    let [showmenu, setShowmenu ] = useState<boolean>(false)

    const clientLogin = async (email: string, password: string): Promise<boolean> => {
        try {
            const result = await axios.post('http://localhost:4000/trade/clienlogin', { email, password });
            const tradeToken = result.data.token;

            if (result.data.isMatch) {
                Cookies.set('tradetoken', tradeToken, { expires: 1 }); // Expires in 1 day
                setAuth({ token: tradeToken, userData: result.data.userData }); // Assuming userData is in response
                return true;
            } else {
                return false;
            }

        } catch (error) {
            console.error("Login error:", error);
            return false;
        }
    };

    const logout = () => {
        Cookies.remove('tradetoken');
        setAuth({ token: null, userData: null });
        router.push('/signin'); // Redirect after logout
    };

    const verifyToken = async () => {
        const token = Cookies.get('tradetoken');
        if (token) {
            try {
                const response = await axios.post('http://localhost:4000/trade/clienVerify', { token });
                if (response.data.valid) {
                    setAuth({ token, userData: response.data.result[0] }); // Assuming user data is here
                } else {
                    logout();
                }
            } catch (error) {
                console.error("Token verification error:", error);
                logout();
            }
        } else {
            logout();
        }
    };

    useEffect(() => {
        const token = Cookies.get('tradetoken');
        if (token) {
            verifyToken();
        } else {
            logout();
        }
    }, []);

    return { clientLogin, logout, auth, setAuth , showmenu, setShowmenu};
};

export default useAuth;
