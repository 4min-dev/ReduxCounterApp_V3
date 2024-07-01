import React from 'react'
import '../../../style/css/sections/usersSection/userSection.css'
import List from '../../UI/lists/List'
import { UserList } from '../../UI/lists/userList/UserList'
import { IUser } from '../../../ts/interfaces/users/IUser'
import { ContentLoader } from '../../UI/loaders/ContentLoader'
import { ErrorInterface } from '../../UI/errors/ErrorInterface'
import { GreenStyleButton } from '../../UI/buttons/GreenStyleButton'
import { useTypedSelectorStates } from '../../../hooks/useTypedSelectorStates'
import { fetchUsers } from '../../../redux/thunk/fetchUsers'
import { useTypedDispatch } from '../../../hooks/useTypedDispatch'

export const HomePageUsersSection:React.FC = () => {

  const selector = useTypedSelectorStates(state => state.userReducer)
  const dispatch = useTypedDispatch()

  const loadUsers = () => dispatch(fetchUsers())

  return (
    <section className='homePageUsersSection'>
      {
        selector.isLoading 
        ? <ContentLoader/> : selector.error 
          ? <ErrorInterface error={selector.error}/> : selector.users.length > 0 
            ? <List listContainerName={'userListContainer'} items={selector.users} renderItem={(user:IUser) => <UserList user={user} key={user.id}/>}/> 
            : <GreenStyleButton handleClick={loadUsers} buttonText='Load clients'/>
      }
    </section>
  )
}