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

        const data = await response.json();

        if (!response.ok) {
            return { error: { status: response.status, message: data.error?.message || 'An error occurred' } };
        }
        return data;
    } catch (error: any) {
        console.error('Registration failed:', error);
        // Return a structured error response for network or unexpected errors
        return { error: { message: error.message || 'Network error occurred' } };
    }
}
