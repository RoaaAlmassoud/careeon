import React from 'react';
import { Tab, Header, Button } from 'semantic-ui-react';
import Helper from '../../utils/helper';

import '../page-css.css';

export default class LessonCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lesson: props ? props.lesson : {}
        }
    }

    lessonClicked = () => {
        this.props.props.props.navigate(`/lessons/${this.state.lesson ? this.state.lesson.id : ''}`)
        window.location.reload()
    }

    render() {
        let { lesson } = this.state;
        return (
            <div className='lesson-card' onClick={() => this.lessonClicked()}>
                {
                    !Helper.empty(lesson) ?
                        <>
                            <div className='lesson-info'>
                                {
                                    lesson.profilePicture ?
                                        <div className='left-side'>
                                            <img src={lesson.profilePicture} />
                                        </div>
                                        : null
                                }

                                <div className='right-side'>
                                    <Header as={"h3"}>{lesson.title}</Header>
                                    <p>{`${lesson.date} ${lesson.from}-${lesson.to}`}</p>
                                    <p>{`参加予定人数：${lesson.capacity}`}</p>
                                    {
                                        !Helper.empty(lesson.likes) ?
                                            <div className='lesson-likes'>
                                                <img src="/images/page-images/heart.png" />
                                                <p>{`ありがとう：${lesson.likes}`}</p>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                            {
                                this.props.withRegisterButton ?
                                    <div className='participate-section'>
                                        <Button className='primary'>参加する</Button>
                                    </div>
                                    : null
                            }
                        </>
                        :
                        null
                }

            </div >
        );
    }


}