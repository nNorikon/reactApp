import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';


import './ModalSign.scss';
import closeImage from '../../assets/images/close.svg';
import axios from "axios";
import {usedApiUrl} from "../../mock";

export const ModalSign = ({users, setUsers, viewModal, setViewModal, inputs, label, url, textUrl, labelModal, setIsAuth, setUserId, setBasketInfo}) => {

    const [form, setForm] = useState(false);
    const [errorUserUndefined, setErrorUserUndefined] = useState(false);
    const [errorUserExists, setErrorUserExists] = useState(false);
    const handleClose = (state) => setViewModal(state);

    console.log(users)
    const authUser = (formObject) => {
        const isUser = users.find((user) => user.email === formObject.email);
        const comparePasswords = isUser.password === formObject.password;
        if (isUser) {
            if (comparePasswords) {
                setIsAuth(true);
                setViewModal(false);
                setUserId(isUser.id);
                localStorage.setItem('isAuth', 'true');
                localStorage.setItem('userId', `${isUser.id}`)
            }
            return comparePasswords;
        }
        setErrorUserUndefined(true);
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

        if (!users) {
            setErrorUserExists(true);
        } else {
            setErrorUserExists(false);
            const apiUrlUsers = `${usedApiUrl}/register`;
            axios.post(apiUrlUsers, result).then((res) => {
                setViewModal('signin');
                setBasketInfo(0);
            });
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

    let key = 0;
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
                            <img src={closeImage} alt='Close'/>
                        </button>
                        <div className='mainBlock'>
                            <div className='articleBlock'>{labelModal}</div>
                            <div className='formBlock'>
                                {
                                    inputs.map((elem) => {
                                        return (
                                            <div key={key++} className='inputBlock'>
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