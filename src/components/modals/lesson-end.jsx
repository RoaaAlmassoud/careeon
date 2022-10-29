import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './modal-style.css'

function LessonEndModal() {
    const [open, setOpen] = React.useState(true)
    const [clicked, setClicked] = React.useState(false)

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            centered={true}
        >
            <Modal.Content>
                <p>
                    ライフチャットが終了しました<br />
                    今回のライフチャットの評価を<br />
                    ありがとうボタンを押した回数で教えて下さいv
                </p>
                {
                    clicked ?
                        <h2>ご回答いただき有難うございます。</h2>
                        :
                        <Modal.Description>
                            <img className={'like-img'}
                                onClick={() => setClicked(true)}
                                src='/images/modal-images/like.svg' />
                            <p>
                                ※最大で30回押すことができます
                            </p>
                        </Modal.Description>
                }

                <Button className='underline'>
                    もどる
                </Button>
            </Modal.Content>
        </Modal>
    )
}
export default LessonEndModal
