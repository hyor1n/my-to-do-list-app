import { db } from '@/lib/prisma';

export const getAllUsers = async () => {
    return await db.user.findMany();
};

export const getUserByUsername = async (username: string) => {
    return await db.user.findUnique({
        where: {
            username,
        },
    });
};

export const getUserById = async (id: string) => {
    return await db.user.findUnique({
        where: {
            id,
        },
    });
};

interface CreateUserProps {
    name: string;
    username: string;
    password: string;
}

export const createNewUser = async ({ name, username, password }: CreateUserProps) => {
    return await db.user.create({
        data: {
            name,
            username,
            password,
        },
    });
};
