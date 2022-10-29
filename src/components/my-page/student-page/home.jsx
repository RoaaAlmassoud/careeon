import React from 'react';
import { Tab, Header } from 'semantic-ui-react';
import Helper from '../../utils/helper';
import LessonCard from '../adviser-page/lesson-card';
import Advisers from './advisers';
import LessonHistory from '../adviser-page/lesson-history'
import '../page-css.css';

export default class Home extends React.Component {

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
            ]
        }
    }

    renderFirstSection = () => {
        const { lessons } = this.state;
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
            </div>
        )
    }

    render() {
        const panes = [
            {
                menuItem: 'キャリサポ',
                render: () => <Tab.Pane attached={false}>
                    <Advisers props={this.props} />
                </Tab.Pane>,
            },
            {
                menuItem: 'ライフチャット',
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