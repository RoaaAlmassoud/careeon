import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './modal-style.css'

function LessonStartModal() {
    const [open, setOpen] = React.useState(true)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            centered={true}
        >
            <Modal.Content>
                <img className={'group-img'} src='/images/modal-images/PC_Lv1_ic_lifechat.svg' />
                <Modal.Description>
                    <p>
                        ライフチャット開始まで1分前です
                    </p>
                </Modal.Description>
                <h1>00:59</h1>
                <Button className='primary'>
                    ライフチャットを開始
                </Button>
            </Modal.Content>
        </Modal>
    )
}

export default LessonStartModal
