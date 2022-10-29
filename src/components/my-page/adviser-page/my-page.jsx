import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import '../page-css.css';

export default class MyPage extends React.Component {

    constructor(props) {
        super(props);
        console.log('loca in mypage: ', localStorage.getItem('userType'))
        let userType = localStorage.getItem('userType')
        this.state = {
            showAccount: false,
            account: userType === 'student' ?
                {
                    name: "山田花子",
                    catchphrase: "東京で広告の会社で働きたいのです！",
                    discuss: "#広告 #プランナー",
                    self_introduction: `○○大学○○学部4年の××です。 
                    大学では観光社会学を専攻しており、卒業論文では、国内の観光地の変遷について研究しています。
                    趣味は旅行で、年に３～4回家族や友人と国内旅行を計画しています。一緒に行くメンバーの好みを踏まえて、ガイドブックやネットで観光スポットやレストランを調べてスケジュールを作るのが得意です。

                    本日は、このような貴重な時間を頂きありがとうございます。どうぞよろしくお願いいたします。`
                }
                : {
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
                    ]
                },
            userType: userType ? userType : 'adviser'
        }

    }

    showUpdateAccount = () => {
        this.props.props.navigate(`/update-account`)
    }

    click = (page) => {
        this.props.navigate(`/${page}`)
        window.location.reload()

    }

    render() {
        let { account, userType } = this.state;
        return (
            <>
                <div className={`account-page ${userType}`}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column computer={4}>
                                <img src='/images/profile_image.svg' />
                            </Grid.Column>
                            <Grid.Column computer={6} >
                                <div className='info'>
                                    <Header as={'h1'}>{account.name}</Header>
                                    <Header as={'h3'}>{account.catchphrase}</Header>
                                    {
                                        userType === 'adviser' ?
                                            <div className='items'>
                                                <div className='item'>
                                                    <span className='key'>職業</span>
                                                    <span className='value'>{account.profession}</span>
                                                </div>
                                                <div className='item'>
                                                    <span className='key'>相談できること</span>
                                                    <span className='value'>{account.discuss}</span>
                                                </div>
                                                <div className='item'>
                                                    <span className='key'>今までもらったありがとう</span>
                                                    <div className='likes'>
                                                        <img src='/images/page-images/heart.png' />
                                                        <span className='value'>{account.likes}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className='items'>
                                                <div className='item'>
                                                    <span className='key'>相談できること</span>
                                                    <span className='value'>{account.discuss}</span>
                                                </div>
                                            </div>
                                    }

                                </div>
                            </Grid.Column>
                            <Grid.Column computer={6} >
                                <Button className={`primary`}
                                 onClick={() => this.showUpdateAccount()}
                                >{userType === 'adviser'? 'プロフィールを編集する': 'プロフィールの編集'}</Button>
                            </Grid.Column>
                        </Grid.Row>
                        {
                            userType === 'student' ?
                                <Grid.Row className='self-row'>
                                    <Grid.Column computer={4} ></Grid.Column>
                                    <Grid.Column computer={12} >
                                        <span className='value'>{account.self_introduction}</span>
                                    </Grid.Column>
                                </Grid.Row>
                                : null
                        }
                        {
                            userType === 'adviser' ?
                                <>
                                    <Grid.Row>
                                        <Grid.Column computer={4}>
                                        </Grid.Column>
                                        <Grid.Column computer={12}>
                                            <span className='value'>{account.self_introduction}</span>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row className='questions-row'>
                                        <Grid.Column computer={8}>
                                            {
                                                account.questions ?
                                                    account.questions.map((question, index) => {
                                                        if (index <= 4) {
                                                            return (
                                                                <div className='question'>
                                                                    <p className='value'>{question.question}</p>
                                                                    <p className='value'>{question.answer}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                    : null
                                            }

                                        </Grid.Column>
                                        <Grid.Column computer={8}>
                                            {
                                                account.questions ?
                                                    account.questions.map((question, index) => {
                                                        if (index > 4) {
                                                            return (
                                                                <div className='question'>
                                                                    <p className='value'>{question.question}</p>
                                                                    <p className='value'>{question.answer}</p>
                                                                </div>
                                                            )
                                                        }
                                                    })
                                                    : null
                                            }
                                        </Grid.Column>
                                    </Grid.Row>
                                    <div className='arrow-section'>
                                        <span>一部をみる</span>
                                        <img src="/images/page-images/arrow.svg" />
                                    </div>
                                </>
                                : null
                        }

                    </Grid>
                </div >
                <div className='logout-section'>
                    <p>ログアウト</p>
                </div>
            </>
        );
    }


}