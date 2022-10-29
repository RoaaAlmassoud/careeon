import React from 'react';
import { Tab, Header } from 'semantic-ui-react';
import Helper from '../../utils/helper';
import LessonCard from './lesson-card';
import '../page-css.css';

export default class LessonHistory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lessons: [
                {
                    id: 1,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについてあいう キャリアについてあいう",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人",
                    likes: 10
                },
                {
                    id: 2,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについてあいう キャリアについてあいう",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人",
                    likes: 10
                },
                {
                    id: 3,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについてあいう キャリアについてあいう",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人",
                    likes: 10
                },
                {
                    id: 4,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについてあいう キャリアについてあいう",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人",
                    likes: 10
                },
                {
                    id: 5,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについてあいう キャリアについてあいう",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人",
                    likes: 10
                },
            ]

        }

    }

    render() {
        let { lessons } = this.state;
        return (
            <div className='lesson-cards'>
                {
                    !Helper.empty(lessons) ?
                        lessons.map((lesson) => {
                            return <LessonCard lesson={lesson} props={this.props.props} />
                        })
                        :
                        <Header as='h3'>完了したライフチャットはありません</Header>
                }
            </div >
        );
    }


}