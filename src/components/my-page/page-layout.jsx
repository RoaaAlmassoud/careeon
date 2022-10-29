import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import HomePage from './adviser-page/home-page';
import LessonDetails from './adviser-page/lesson-details';
import MyPage from './adviser-page/my-page';
import Home from "./student-page/home";
import AdviserDetails from './student-page/adivser-details'
import './page-css.css';

export default class PageLayout extends React.Component {

    constructor(props) {
        super(props);
        let activeSection = props ? props.activeSection : 'first';
        let userType = props ? props.userType : 'adviser';
        let pathName = document.location.pathname;
        this.lessonId = props ? props.match ? props.match.params.id : '' : '';
        this.state = {
            activeSection: activeSection,
            userType: userType,
            pathName: pathName
        }

    }

    renderComponent = () => {
        let { activeSection, userType } = this.state;
        switch (activeSection) {
            case "lessons":
                return <HomePage props={this.props} userType={userType} />
                break;
            case "details":
                return <LessonDetails props={this.props} />
                break;
            case "my-page":
                return <MyPage props={this.props} />
                break;
            case "home":
                return <Home props={this.props} />
                break;
            case "adviser-details":
                return <AdviserDetails props={this.props} />
                break;

        }
    }

    click = (page) => {
        this.props.navigate(`/${page}`)
        localStorage.setItem('userType', this.state.userType)
        window.location.reload()

    }

    renderActions = () => {
        let { activeSection, userType } = this.state;
        let user = userType ? userType : localStorage.getItem('userType')
        return (
            <>
                {
                    user === "student" ?
                        <a className={`${activeSection !== "advisers" ? 'grey' : ''}`}
                            onClick={() => this.click('home')}>
                            <img src={`/images/page-images/home-${activeSection === "home" ? 'green' : 'grey'}.svg`} />
                            <span>ホーム</span>
                        </a>
                        : null
                }
                <a className={`${activeSection !== "lessons" ? 'grey' : ''}`}
                    onClick={() => this.click('lessons')}>
                    <img src={`/images/page-images/lifechat-${activeSection === "lessons" ? 'green' : 'grey'}.png`} />
                    <span>ライフチャット</span>
                </a>
                <a className={`${activeSection !== "message" ? 'grey' : ''}`}
                    onClick={() => this.click('message')}>
                    <img src={`/images/page-images/envelope-${activeSection === "message" ? 'green' : 'grey'}.png`} />
                    <span>メッセージ</span>
                </a>
            </>
        )
    }

    render() {
        return (
            <div className={'page-layout'}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column className='first' computer={4}>
                            <div className='links-section'>
                                <div className='first-section'>
                                    <img src="/images/profile_image.svg" />
                                    <p>キャリア講師たかし</p>
                                    <a onClick={() => this.click('my-page')}>プロフィールをチェック</a>
                                </div>
                                <div className='second-section'>
                                    {this.renderActions()}
                                </div>
                                <div className='third-section'>
                                    <a>
                                        はじめての方へ
                                    </a>
                                    <a>
                                        利用規約
                                    </a>
                                    <a>
                                        プライバシーポリシー
                                    </a>
                                    <a>
                                        特定商取引法の表示
                                    </a>
                                </div>
                                <div className='copyright-section'>
                                    <p>Copyright Tom Sawyer’s Adventure <br />
                                        LLC All Rights Reserved.</p>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={12} className={`active-component`}>
                            {this.renderComponent()}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div >
        );
    }


}