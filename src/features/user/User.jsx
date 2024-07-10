import { useDispatch, useSelector } from "react-redux"
import {fecthUsers} from './userSlice'
import { useEffect } from "react"
const User = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fecthUsers())
    }, [])
    return (
        <div>
            <h2>Users List</h2>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.error ? <div>Error, {user.error}</div> : null}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            ): null}
        </div>
    )
}
export default User
