
import { Box, Paper, Stack } from '@mui/material'
import { Typography, Button } from '@mui/material'
import { TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerAdmin, selectLoggedUser } from '../redux/authSlice'
import { Link, Navigate } from 'react-router-dom'


const RegisterAdmin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const dispatch=useDispatch()
    const loggedUser=useSelector(selectLoggedUser)

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        if(password!==confirmPassword){
            alert("Password and Confirm Password must be same")
            return
        }
        else{
            dispatch(registerAdmin({email,password}))
        }
    }
    return (
        <>
        {loggedUser && <Navigate to={"/"}/>}
        <Box display={'flex'} alignItems={'center'} p={10} flexDirection={'column'} minHeight={"100vh"}  >
        <Typography fontWeight={"bold"}  variant='h2' mb={15}>Task Management System</Typography>
            <Paper  sx={{ padding: "16px", width: '400px' }} >
                <Typography variant='h3' align='center' gutterBottom> Register As Admin </Typography >
                <form onSubmit={handleRegisterSubmit}>
                    <Stack direction={'column'} gap={2}>
                        <TextField
                            label="Email"
                            id='email'
                            value={email}
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            label="Password"
                            id='password'
                            value={password}
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            label="Confirm Password"
                            value={confirmPassword}
                            id='confirmPassword'
                            type='password'
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <Stack direction={'row'} gap={2}>
                            <Button variant="contained" type='submit'>Register As Admin</Button>
                            <Link to={"/login"}> <Button variant='text'  >Have an Account?</Button> </Link>
                        </Stack>

                    </Stack>
                </form>
            </Paper>
        </Box>
        </>
        

    )
}

export default RegisterAdmin