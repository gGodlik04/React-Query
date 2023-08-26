import { FC } from "react"
import { IUsersTable } from "../../Interface/IUsersTable"
import { userType } from "./UsersTableType";


export const UsersTable: FC<IUsersTable> = (props: IUsersTable) => {

    const { data } = props;

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                {data.map((user: userType) => {
                    return (
                        <tbody key={user.id}>
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

