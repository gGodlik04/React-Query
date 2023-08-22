import { FC } from "react";
import { IUsers } from "../../../Interface/IUsers";
import { UsersForm } from "../UsersForm/UsersForm";
import styles from "./users.module.sass"
import axios from "axios";
import { useQuery } from "react-query";
import { UsersTable } from "../../UsersTable/UsersTable";


async function fetchUsers() {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}


export const Users: FC<IUsers> = (props: IUsers) => {

    const {data, isLoading, isError} = useQuery('users', fetchUsers, {
        keepPreviousData: true,
        refetchOnWindowFocus:false,
    });

    if (isLoading) {
        return(<div>
            Загрузка
        </div>)
    }

    if (isError) {
        return(<div>
            Ошибка при загрузке
        </div>)
    }

    if(!data){
        return(
            <div>
                Нет данных
            </div>
        )
    }
    

    return(
        <div className={styles.usersBlock}>
            <UsersTable data={data}/>
            <UsersForm/>
        </div>
    )
}