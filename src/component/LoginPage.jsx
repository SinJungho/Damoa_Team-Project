import Modal from 'react-modal';
import LoginForm from './LoginForm';
import { useState } from 'react';
import style from '../css/LoginForm.module.css';

export default function LoginPage() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <>
            <button type="button" onClick={openModal} className={style.loginButton}>
                로그인
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className={style.content}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)' },
                }}
            >
                <LoginForm />
            </Modal>
        </>
    );
}
