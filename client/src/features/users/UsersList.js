import { useGetUsersQuery } from "./usersApiSlice"
import User from './User'

const UsersList = () => {

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()

    let content

    if (isLoading) content = <p>Loading...</p> 

    if (isError) {
        content = <p className="errmsg">{error?.data?.message}</p>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null

        content = (
            <div className="max-w-3xl mx-auto bg-white shadow-lg p-4 rounded-md mt-4">
    <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b border-gray-300">Username</th>
                        <th className="py-2 px-4 border-b border-gray-300">Roles</th>
                        <th className="py-2 px-4 border-b border-gray-300">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
            </div>
        )
    }

    return content
}
export default UsersList