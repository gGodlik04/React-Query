import { useQuery } from "react-query"
import { fetchUsers } from "../../Services/UserServices/users.services"


export const useUsers = () => {return useQuery('users', fetchUsers, {
    keepPreviousData: true,
    refetchOnWindowFocus:false,
})}