import jwt from 'jsonwebtoken'

export const genToken = async ({ _id }: { _id: string }) => {
    try {
        if (_id) {
            const token = await jwt.sign(_id, 'abcdefgh');
            return token && token
        } else {
            throw new Error()
        }
    } catch (error) {
        throw new Error('Token generation Failed')
    }
}

export const verifyToken = async (token: string) => {
    try {

    } catch (error) {
        throw new Error('Token Verification Failed');
    }
}