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
import {logDOM} from "@testing-library/react";

export const ModalSign = ({users, setUsers, viewModal, setViewModal, inputs, label, url, textUrl, labelModal, setIsAuth, setUserId, setBasketInfo}) => {

    const [form, setForm] = useState(false);
    const [errorUserUndefined, setErrorUserUndefined] = useState(false);
    const [errorUserExists, setErrorUserExists] = useState(false);
    const handleClose = (state) => setViewModal(state);

    const authUser = (formObject) => {
        const isUser = users.find((user) => user.email === formObject.email);
        const comparePasswords = isUser.password === formObject.password;
        if (isUser) {
            if (comparePasswords) {
                setIsAuth(true);
                setViewModal(false);
                markDataBaseAuthIs(isUser.id);
                setUserId(isUser.id);
                localStorage.setItem('userId', `${isUser.id}`)
            }
            return comparePasswords;
        }
        setErrorUserUndefined(true);
    }

    const markDataBaseAuthIs = (id) => {
        localStorage.setItem('isAuth', 'true');
    }

    const handleChange = (e) => {
        setForm((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }
        })
    }

    const handleClickAuthorization = (e) => {
        e.preventDefault();
        authUser(form);
    };

    const handleClickRegistration = (e) => {
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
            setViewModal('signin');
            setBasketInfo(0);
        }
    }

    const modalButton = (stateOfModal) => {
        if (stateOfModal === 'signin') {
            return (<button onClick={handleClickAuthorization} className='signButton'>
                Log in
            </button>)
        } else {
            return (<button onClick={handleClickRegistration} className='signButton'>
                Register
            </button>)
        }
    }


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={Boolean(viewModal)}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    style: {backgroundColor: 'rgba(0,0,0,0.8)'}
                }}
            >
                <Fade in={Boolean(viewModal)}>
                    <Box className='modalBlock'
                         component="form"
                         noValidate
                         autoComplete="off">
                        <button className='closeButton' onClick={handleClose}>
                            <img src={closeImage}/>
                        </button>
                        <div className='mainBlock'>
                            <div className='articleBlock'>{labelModal}</div>
                            <div className='formBlock'>
                                {

                                    inputs.map((elem) => {
                                        return (
                                            <div className='inputBlock'>
                                                <label className='signLabelText'>{elem.labelName}</label>
                                                <TextField id={elem.id} onChange={handleChange}
                                                           placeholder={elem.placeholder}
                                                           variant="outlined"/>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div className='errorUserExists'>
                                {errorUserExists && ('User is registered!')}
                                {errorUserUndefined && ('User doesn\'t! exist!')}
                            </div>

                            {modalButton(viewModal)}

                            <div className='containerModalSignButton'>
                                <div className='signTextLink'>{label}</div>
                                <button className='modalSignInButton' onClick={(e) => {
                                    e.preventDefault()
                                    handleClose(url)
                                }}>{textUrl}
                                </button>
                            </div>
                        </div>
                    </Box>

                </Fade>
            </Modal>
        </div>
    )
}