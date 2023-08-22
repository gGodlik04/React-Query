import { FC } from "react"
import { IUsersTable } from "../../Interface/IUsersTable"


export const UsersTable: FC<IUsersTable> = (props: IUsersTable) => {

    const { data } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                {data.map((user: userType) => {
                    return (
                        <tbody>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        </tbody>
                    )
                }
                )}
            </table>
        </div>
    )
}

export type userType = {
    id: string;
    name: string;
    email: string;
}