import { NextPage } from 'next'
import { Button, Modal } from "flowbite-react";
import { Dispatch, SetStateAction } from 'react';
interface Props {
    content?: string,
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>
}

const TextModal: NextPage<Props> = ({ content = '', openModal, setOpenModal }) => {
    console.log(content)
    return <Modal show={openModal} dismissible onClose={() => setOpenModal(false)}>
        <Modal.Header>Text Editor Content</Modal.Header>
        <Modal.Body>
            <div>{content}</div>
        </Modal.Body>
    </Modal>
}

export default TextModal