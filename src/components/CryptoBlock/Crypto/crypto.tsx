import axios from "axios"
import { FC, useState } from "react"
import { QueryClient, useQuery } from "react-query"
import styles from "./crypto.module.sass"
import { dataType } from "./type"
import { ICrypto } from "../../Interface/ICrypto"
import { CoinsTable } from "../CoinsTable/CoinsTable"



async function fetchCoins(skip: number) {
    const {data} = await axios.get<dataType>(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`)
    return data.coins
}


export const Crypto: FC<ICrypto> = (props: ICrypto) => {

    const [page, setPage] = useState<number>(0);
    const {data, isLoading, isError} = useQuery(['coins', page], () => 
        fetchCoins(page)
    ,{
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });


    if (isLoading) {
        return(
            <h3>Загрузка...</h3>
        )
    }

    if (isError) {
        return(
            <h3>Ошибка</h3>
        )
    }
    
    if (!data) {
        return(
            <h3>Нет данных</h3>
            )
        }
        
    return(
        <div className={styles.cryptoBlock}>
                <CoinsTable data={data}/>
                <button onClick={() => {setPage((page) => page - 10)}}>Next page</button>
                <button onClick={() => {setPage((page) => page + 10)}}>Previous page</button>
                
        </div>
    )
}
