import React, {useState} from 'react';
import {
    useDeleteUserMutation,
    useGetAllUsersQuery,
    useRegistrationMutation
} from "../redux/user/userApiSlice";
import {Card, Stack, Typography, Tooltip} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import AddUserButton from "../components/UI/Button/Button"
import LoginInput from "../components/UI/Input/Input"


const Users = () => {
    const {data, isSuccess} = useGetAllUsersQuery()
    const [deleteUser] = useDeleteUserMutation()
    const handleDeleteUser = async (login) => deleteUser(login)
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [registration] = useRegistrationMutation()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (login.length && pass.length) {
            try {

                await registration({login, password: pass})


            } catch (e) {
                console.log(e)
            }
        }
    }
    if (!isSuccess) return <Typography>loading</Typography>
    return (
        <Stack display={'flex'} justifyContent={'center'} width={'100vw'} alignItems={'center'}>
            <form name={'tarifForm'} onSubmit={handleSubmit} className="login_form">
                <fieldset className="login_form_group_input">
                    <div className="login_input_email">
                        <LoginInput value={login} onChange={e => setLogin(e.target.value)} placeholder="Login"/>
                    </div>
                    <div className="login_input_pass">
                        <LoginInput value={pass} onChange={e => setPass(e.target.value)} placeholder="Password"/>
                    </div>
                </fieldset>

                <AddUserButton onClick={handleSubmit} type="submit" form="tarifForm"
                        className="table__button btn btn_table">Add
                </AddUserButton>
            </form>
            <Typography variant="h4" color="#56585a" fontWeight={700}>Users</Typography>
            <Stack display={'flex'} width={'80vw'} gap={1} flexDirection={'row'}>
                {
                    data.map((user, index) => (
                            <Card
                                sx={{width: 'fit-content', display: 'flex', alignItems: 'center', padding: 1, gap: 1}}>
                                <Typography fontSize={22}>{`${index + 1}. ${user.login}`}</Typography>
                                <DeleteIcon sx={{cursor: 'pointer'}} onClick={() => handleDeleteUser(user.login)}
                                            color={'error'}/>
                            </Card>

                    ))
                }
            </Stack>
        </Stack>
    );
};

export default Users;