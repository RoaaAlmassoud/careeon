import React, { useState } from 'react';
import { Tab, Header, Grid, Button } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import Helper from '../../utils/helper';
import '../page-css.css';
import LessonCard from '../adviser-page/lesson-card';

function AdviserDetails(props) {
    let [adviserDetails] = useState(0);
    let [showMore, setShow] = useState(false);
    const params = useParams();
    adviserDetails = {
        name: "キャリア講師たかし",
        catchphrase: "渋谷の会社で社長してます",
        profession: "IT社長",
        discuss: "#IT #面接について",
        likes: "3,210",
        self_introduction: "起業家です。過去に二社IT起業して二社とも売却に成功しました。2019年に三社目となる株式会社tsamを立ち上げ、スタートアップへのサポートをしています。その一環で複数の有名アクセラレーションプログラムにてメンターを務めています。何かありましたらお気軽にご連絡ください。よろしくお願いします。",
        questions: [
            {
                question: "座右の銘は？大切にしている考え方は？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "将来の夢はなんですか？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "現在の仕事のやりがい、仕事に対する想いは？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "初めての仕事を選んだ理由は？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "今の社会に思うことは？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "どんな青春時代を過ごしましたか？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "仕事以外で普段何してますか？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "最期の瞬間に何を思っている？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            },
            {
                question: "どんな時に幸せを感じるか？",
                answer: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。"
            }
        ],
        lessonsList: [
            {
                id: 1,
                title: "キャリアについてあいう キャリアについてあいう",
                date: "5/2(月)",
                from: "10:00",
                to: "10:20",
                capacity: "8人/ 7人",
            },
            {
                id: 2,
                title: "キャリアについてあいう キャリアについてあいう",
                date: "5/2(月)",
                from: "10:00",
                to: "10:20",
                capacity: "8人/ 7人",
            },
            {
                id: 3,
                title: "キャリアについてあいう キャリアについてあいう",
                date: "5/2(月)",
                from: "10:00",
                to: "10:20",
                capacity: "8人/ 7人",
            },
        ],
        historyList: [
            {
                id: 10,
                profilePicture: '/images/profile_image.svg',
                title: "キャリアについてあいう キャリアについてあいう",
                date: "5/2(月)",
                from: "10:00",
                to: "10:20",
                capacity: "8人/ 7人",
                likes: 10
            },
            {
                id: 20,
                profilePicture: '/images/profile_image.svg',
                title: "キャリアについてあいう キャリアについてあいう",
                date: "5/2(月)",
                from: "10:00",
                to: "10:20",
                capacity: "8人/ 7人",
                likes: 10
            },
            {
                id: 30,
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

    function back() {
        props.props.navigate('/advisers')
    }

    const panes = [
        {
            menuItem: 'キャリサポ',
            render: () => <Tab.Pane attached={false}>
                <div className='lesson-cards list' key={'list'}>
                    {
                        Helper.empty(adviserDetails.lessonsList) ?
                            <Header as='h3'>予約されているライフチャットはありません</Header>
                            :
                            adviserDetails.lessonsList.map((lessonObject) => {
                                return <LessonCard lesson={lessonObject}  withRegisterButton={true}/>
                            })
                    }
                </div>
            </Tab.Pane>,
        },
        {
            menuItem: 'ライフチャット',
            render: () => <Tab.Pane attached={false}>
                <div className='lesson-cards' key={'history'}>
                    {
                        Helper.empty(adviserDetails.historyList) ?
                            <Header as='h3'>完了したライフチャットはありません</Header>
                            :
                            adviserDetails.historyList.map((lesson) => {
                                return <LessonCard lesson={lesson} />
                            })
                    }
                </div>
            </Tab.Pane>,
        },
    ]

    return (

        <div className='adviser-details'>
            <div className={'account-page'}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={4}>
                            <img src='/images/profile_image.svg' />
                        </Grid.Column>
                        <Grid.Column computer={6} >
                            <div className='info'>
                                <Header as={'h1'}>{adviserDetails.name}</Header>
                                <Header as={'h3'}>{adviserDetails.catchphrase}</Header>
                                <div className='items'>
                                    <div className='item'>
                                        <span className='key'>職業</span>
                                        <span className='value'>{adviserDetails.profession}</span>
                                    </div>
                                    <div className='item'>
                                        <span className='key'>相談できること</span>
                                        <span className='value'>{adviserDetails.discuss}</span>
                                    </div>
                                    <div className='item'>
                                        <span className='key'>今までもらったありがとう</span>
                                        <div className='likes'>
                                            <img src='/images/page-images/heart.png' />
                                            <span className='value'>{adviserDetails.likes}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={6} >

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer={4}>
                        </Grid.Column>
                        <Grid.Column computer={12}>
                            <span className='value'>{adviserDetails.self_introduction}</span>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className={`questions-row ${showMore ? '' : 'hide'}`}>
                        <Grid.Column computer={8}>
                            {
                                adviserDetails.questions.map((question, index) => {
                                    if (index <= 4) {
                                        return (
                                            <div className='question'>
                                                <p className='value'>{question.question}</p>
                                                <p className='value'>{question.answer}</p>
                                            </div>
                                        )
                                    }
                                })
                            }

                        </Grid.Column>
                        <Grid.Column computer={8}>
                            {
                                adviserDetails.questions.map((question, index) => {
                                    if (index > 4) {
                                        return (
                                            <div className='question'>
                                                <p className='value'>{question.question}</p>
                                                <p className='value'>{question.answer}</p>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </Grid.Column>
                    </Grid.Row>
                    <div className={`arrow-section ${showMore ? 'up' : 'down'}`}
                        onClick={() => setShow(!showMore)}>
                        <span>一部をみる</span>
                        <img src={`/images/page-images/arrow.svg`} />
                    </div>
                </Grid>
            </div>
            <Button className='primary send-btn'>メッセージを送る</Button>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
        </div >
    );
}

export default AdviserDetails;