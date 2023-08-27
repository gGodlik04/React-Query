import React, { FC, SyntheticEvent, useRef, useState } from "react"
import { IUsersForm } from "../../../Interface/IUsersForm"
import styles from "./usersForm.module.sass"
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { createUser } from "../../../Services/UserServices/users.services";


const initialFormData = {
    nickname: "",
    email: "",
};


export const UsersForm: FC<IUsersForm> = (props: IUsersForm) => {
   
    const [formData, setFormData] = useState<object>(initialFormData);
    const queryClient = useQueryClient();
    queryClient.invalidateQueries({
        queryKey: ['users', { type: 'done' }],
      })

    const mutation = useMutation((newUser: object)  =>  createUser(newUser), {
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['users'] }), // NO INVALIDATION AND NO ADDING NEW INFO FROM FORM, CAUSE JSONPLACEHOLDER DOESN'T POST API
    });

    const onChanged  = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.id)
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutation.mutate(formData) 

        setFormData(initialFormData);

        e.currentTarget.reset();
    }


    return(
        <div>
            <form onSubmit={onSubmited} className={styles.form}>
                <input placeholder="input your nickname" id="nickname" onChange={onChanged}></input>
                <input placeholder="input your email" id="email" onChange={onChanged}></input>
                <button type="submit" className={styles.formButton}>submit</button>
            </form>
            <span className={styles.message}>NO INVALIDATION AND NO ADDING NEW INFO FROM FORM, CAUSE JSONPLACEHOLDER HAVEN'T POST API (BUT REQUEST IS COMPLETED)</span>
        </div>
    )
}