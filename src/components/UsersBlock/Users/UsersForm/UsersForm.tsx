import { FC } from "react"
import { IUsersForm } from "../../../Interface/IUsersForm"


export const UsersForm: FC<IUsersForm> = (props: IUsersForm) => {


    return(
        <div>
            <form>
                <input placeholder="input your nickname"></input>
                <input placeholder="input your email"></input>
                <button type="submit"></button>
            </form>
        </div>
    )
}