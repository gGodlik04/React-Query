import axios from "axios"
import { IUsersData } from "../../Interface/IUsers"

export const fetchUsers = async () => {
    const {data} = await axios.get<IUsersData>('https://jsonplaceholder.typicode.com/users')
    return data
}

export const createUser = async (data: object) => {
    return await axios.post("https://jsonplaceholder.typicode.com/users", data)
}