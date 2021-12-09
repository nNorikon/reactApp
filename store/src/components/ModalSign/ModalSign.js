import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {NavLink} from "react-router-dom";


import './ModalSign.scss';
import closeImage from '../../assets/images/close.svg';

export const ModalSign = ({open, setOpen, users, setUsers, viewModal, setViewModal}) => {

    const [form, setForm] = useState(false);
    const [errorUserExists, setErrorUserExists] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        setForm((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }
    const handleClick = (e) => {
        e.preventDefault();
        const date = Date.now();
        const result = {...form, 'id': date}

        const newOrOldUser = users.find((user) => user.email === form.email);

        if (newOrOldUser) {
            setErrorUserExists(true);
        } else {
            const arrUsers = [...users, result];
            setErrorUserExists(false);
            localStorage.setItem('users', JSON.stringify(arrUsers));
            setUsers(arrUsers);
        }
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    style: {backgroundColor: 'rgba(0,0,0,0.8)'}
                }}
            >
                <Fade in={open}>
                    <Box className='modalBlock'
                         component="form"
                         noValidate
                         autoComplete="off">
                        <button className='closeButton' onClick={handleClose}>
                            <img src={closeImage} />
                        </button>
                        <div className='mainBlock'>
                            <div className='articleBlock'>Create an account</div>
                            <div className='formBlock'>
                                <div className='inputBlock'>
                                    <label className='signLabelText'>Name</label>
                                    <TextField id="name" onChange={handleChange} placeholder="Your name" variant="outlined"/>
                                </div>
                                <div className='inputBlock'>
                                    <label className='signLabelText'>Email</label>
                                    <TextField id="email" onChange={handleChange} placeholder="Your email" variant="outlined"/>
                                </div>
                                <div className='inputBlock'>
                                    <label className='signLabelText'>Password</label>
                                    <TextField id="password" onChange={handleChange} placeholder="Enter your password" variant="outlined"/>
                                </div>
                                <button onClick={handleClick} className='signButton'>
                                    Register
                                </button>
                            </div>
                            {errorUserExists && (
                                <div className='errorUserExists'>
                                    User is registered
                                </div>
                            )}

                            <div className='signTextLink'>
                                Do you already have an account?
                                <NavLink to='/'>Sign in</NavLink>
                            </div>
                        </div>
                    </Box>

                </Fade>
            </Modal>
        </div>
    )
        ;
}