import { FC } from "react"
import { IUsersForm } from "../../../Interface/IUsersForm"
import styles from "./usersForm.module.sass"


export const UsersForm: FC<IUsersForm> = (props: IUsersForm) => {


    return(
        <div>
            <form>
                <input placeholder="input your nickname"></input>
                <input placeholder="input your email"></input>
                <button type="submit" className={styles.formButton}>submit</button>
            </form>
        </div>
    )
}