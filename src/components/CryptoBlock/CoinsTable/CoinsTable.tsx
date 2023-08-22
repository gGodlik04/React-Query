import { FC } from "react"
import { ICoinsTable } from "../../Interface/ICoinsTable"
import { currencyType } from "../Crypto/type"
import styles from "./coinsTable.module.sass"



export const CoinsTable: FC<ICoinsTable> = (props: ICoinsTable) => {

    const {data} = props;

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>№</th>
                        <th></th>
                        <th>NAME</th>
                        <th>TICKER</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                { (data as []).map((currency: currencyType) => {
                    return(
                        <tbody>
                            <tr key={currency.id}>
                                <td>{currency.rank}</td>
                                <td><img src={currency.icon} className={styles.cryptoImg}></img></td>
                                <td>{currency.name}</td>
                                <td>{currency.symbol}</td>
                                <td>{currency.price}</td>
                            </tr>
                        </tbody>
                    )
                })
                }
                </table>
        </div>
    )
}