import React, { FC, SyntheticEvent, useRef, useState } from "react"
import { IUsersForm } from "../../../Interface/IUsersForm"
import styles from "./usersForm.module.sass"


const initialFormData = {
    nickname: "",
    email: "",
};


export const UsersForm: FC<IUsersForm> = (props: IUsersForm) => {
   
    const [formData, setFormData] = useState(initialFormData);
    // const { nickname, email } = formData;

    const onChanged  = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id)
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

        setFormData(initialFormData);
    }


    return(
        <div>
            <form onSubmit={onSubmited}>
                <input placeholder="input your nickname" id="nickname" onChange={onChanged}></input>
                <input placeholder="input your email" id="email" onChange={onChanged}></input>
                <button type="submit" className={styles.formButton}>submit</button>
            </form>
        </div>
    )
}