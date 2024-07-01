export const isAuthenticated = async () => {
    try {
        const token = window.localStorage.getItem('atelier-dart-userToken');
        if (!token) {
            return null;
        }
        const response = await fetch(`/api/user/role?token=${token}`);
        const data = await response.json();
        if (!response.ok) {
            // if user not available in db but token is store in localStorage
            if (data.error.message.includes('User not found')) {
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
