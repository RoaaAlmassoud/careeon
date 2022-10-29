import React from 'react';
import { Tab, Header } from 'semantic-ui-react';
import Helper from '../../utils/helper';
import AddLesson from './add-lesson';
import LessonCard from './lesson-card';
import LessonHistory from './lesson-history';
import '../page-css.css';

export default class HomePage extends React.Component {

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

                },
                {
                    id: 2,
                    title: "キャリアについて",
                    profilePicture: '/images/profile_image.svg',
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人",
                },
                {
                    id: 3,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについて",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人"
                },
                {
                    id: 4,
                    profilePicture: '/images/profile_image.svg',
                    title: "キャリアについて",
                    date: "5/2(月)",
                    from: "10:00",
                    to: "10:20",
                    capacity: "8人/ 7人"
                },
            ],
            userType: localStorage.getItem('userType') ?
                localStorage.getItem('userType') : 'adviser'
        }
    }

    renderFirstSection = () => {
        const { lessons, userType } = this.state;
        return (
            <div className='lesson-section'>
                <div className='lessons'>
                    {
                        Helper.empty(lessons) ?
                            <Header as='h3'>登録されているライフチャットはありません</Header>
                            :
                            <div className='lesson-cards'>
                                {
                                    lessons.map((lesson) => {
                                        return <LessonCard lesson={lesson} props={this.props} />
                                    })
                                }
                            </div>
                    }
                </div>
                {
                    userType === 'adviser' ?
                        <AddLesson />
                        : null
                }
            </div>
        )
    }

    render() {
        const panes = [
            {
                menuItem: 'ライフチャット予定',
                render: () => <Tab.Pane attached={false}>
                    {this.renderFirstSection()}
                </Tab.Pane>,
            },
            {
                menuItem: '履歴',
                render: () => <Tab.Pane attached={false}>
                    <LessonHistory props={this.props} />
                </Tab.Pane>,
            },
        ]
        return (
            <div className='user-page'>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div >
        );
    }


}