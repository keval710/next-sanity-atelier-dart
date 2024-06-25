export async function regUser(payload: { name: string; email: string; password: string }) {
    try {
        const response = await fetch('/api/user/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
}