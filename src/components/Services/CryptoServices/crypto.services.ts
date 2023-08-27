import axios from "axios"
import { dataType } from "../../CryptoBlock/Crypto/type"

 export async function fetchCoins(skip: number) {
    const {data} = await axios.get<dataType>(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`)
    return data.coins
}