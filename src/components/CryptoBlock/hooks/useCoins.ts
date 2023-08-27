import { useQuery } from "react-query";
import { fetchCoins } from "../../Services/CryptoServices/crypto.services";


export const useCoins = (page: number) => {
    return useQuery(['coins', page], () => 
        fetchCoins(page)
    ,{
        keepPreviousData: true,
        refetchOnWindowFocus: false,
    });
}