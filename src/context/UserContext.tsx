'use client'

import { isAuthenticated } from "@/app/lib/Auth";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

interface Context {
    userData: {
        userName: string,
        role: string
    } | null;
    handleLogout: () => void;
    setShowDropdown: Dispatch<SetStateAction<boolean>>;
    setIsUserLogin: Dispatch<SetStateAction<boolean>>;
    showDropdown: boolean,
    isUserLogin: boolean
}

export const UserContext = createContext<Context>({
    userData: null,
    handleLogout: (): void => {
        throw new Error("Function not implemented.");
    },
    setShowDropdown: (): void => {
        throw new Error("Function not implemented.");
    },
    setIsUserLogin: (): void => {
        throw new Error("Function not implemented.");
    },
    showDropdown: false,
    isUserLogin: false
});

export const UserProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [userData, setUserData] = useState<{ userName: string, role: string } | null>(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isUserLogin, setIsUserLogin] = useState(false);

    useEffect(() => {
        ; (async () => {
            const res = JSON.parse(window.localStorage.getItem('atelier-dart-userToken') as string);
            const re = await isAuthenticated();
            if (res?.user && re?.role) {
                setUserData({
                    userName: res.user.userName,
                    role: re.role
                });
                setIsUserLogin(true);
                setShowDropdown(false);
            }
        })();
    }, [isUserLogin]);

    const handleLogout = () => {
        localStorage.removeItem('atelier-dart-userToken');
        setIsUserLogin(false);
        setUserData(null);
    }
    return (
        <UserContext.Provider
            value={{
                userData,
                handleLogout,
                setShowDropdown,
                showDropdown,
                isUserLogin,
                setIsUserLogin
            }}>
            {children}
        </UserContext.Provider>
    )
}