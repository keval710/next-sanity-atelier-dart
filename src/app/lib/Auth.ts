import { AuthResType } from "@/types/Type";

export const isAuthenticated = async (): Promise<AuthResType | null> => {
    try {
        const res = JSON.parse(window.localStorage.getItem('atelier-dart-userToken') as string);
        if (!res?.token) {
            return null;
        }
        const response = await fetch(`/api/user/role?token=${res.token}`);
        const data: AuthResType = await response.json();
        if (!response.ok) {
            // if user not available in db but token is store in localStorage
            if (data?.error.message.includes('User not found')) {
                window.localStorage.removeItem('atelier-dart-userToken');
            } else {
                throw new Error('Failed to fetch user role');
            }
        }
        return data;
    } catch (error) {
        console.error('Error fetching user role:', error);
        throw error;
    }
};
