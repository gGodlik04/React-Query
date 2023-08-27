import { FC, useState } from "react"
import { useQuery } from "react-query"
import styles from "./crypto.module.sass"
import { ICrypto } from "../../Interface/ICrypto"
import { CoinsTable } from "../CoinsTable/CoinsTable"
import { fetchCoins } from "../../Services/CryptoServices/crypto.services"
import { useCoins } from "../hooks/useCoins"




export const Crypto: FC<ICrypto> = (props: ICrypto) => {

    const [page, setPage] = useState<number>(0);
    const {isLoading, isError, data} = useCoins(page)


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
