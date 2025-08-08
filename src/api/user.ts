import axios from "axios";

const API_BASE = 'http://localhost:8080/api/users';

export const fetchUsers = async () => {
    const res = await axios.get(API_BASE);
    return res.data;
};

export const createUser = async (user: any) => {
    const res = await axios.post(API_BASE, user);
    return res.data;
};