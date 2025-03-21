import { api } from "../api";

export const login = async (email: string, password: string): Promise<boolean> => {
    try {
        const data: any = await api;

        if (!data || !data.email || !data.password) {
            console.error("API Data is undefined or incomplete:", data);
            return false;
        }

        if (email !== data.email || password !== data.password) {
            return false;
        }

        return true;
    } catch (error) {
        console.error("Error in login service:", error);
        return false;
    }
};