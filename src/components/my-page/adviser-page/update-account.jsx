import React from 'react';
import { Form, Grid, Label, Button, Input, Icon, TextArea } from 'semantic-ui-react';
import update from "immutability-helper";
import '../page-css.css';

export default class UpdateAccount extends React.Component {

    constructor(props) {
        super(props);
        let userType = localStorage.getItem('userType')
        this.state = {
            showPassword: false,
            account: userType === 'student' ?
                {
                    name: "",
                    email: "",
                    number: "",
                    password: "",
                    profile_picture: "",
                    self_introduction: '',
                    discuss: ''
                }
                : {
                    name: "",
                    email: "",
                    password: "",
                    profession: "",
                    catchphrase: "",
                    profile_picture: "",
                    self_introduction: "",
                    discuss: "",
                    question1: '',
                    question2: '',
                    question3: '',
                    question4: '',
                    question5: '',
                    question6: '',
                    question7: '',
                    question8: '',
                    question9: '',
                },
            userType: userType ? userType : 'adviser'
        }
    }

    handleFieldChanged = (field) => {
        return (e, data) => {
            let value = data.value
            this.setState({
                account: update(this.state.account, {
                    [field]: {
                        $set: value
                    }
                }),
            })
        }
    }

    handleImageChanged = (event, data) => {
        let file = event.target.files[0];
        this.setState({
            account: update(this.state.account, {
                profile_picture: {
                    $set: file
                }
            }),
        }, () => {
            let reader = new FileReader();
            // it's onload event and you forgot (parameters)
            reader.onload = function (e) {
                let image = document.getElementById('profile_picture');
                // the result image data
                image.src = e.target.result;

            };
            reader.readAsDataURL(file);
            // this.validateState();
        });
    };

    show = () => {
        let showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword
        })
    };

    render() {
        let { account, showPassword, userType } = this.state;
        console.log('userType: ', userType)
        return (
            <Form className={`update-account ${userType}`}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={8}>
                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>名前</Label>
                                <Input
                                    placeholder={'入力してください'}
                                    value={account.name ? account.name : ''}
                                    onChange={this.handleFieldChanged("name")}
                                />
                            </Form.Field>
                            <Form.Field required
                            // error={!!emailError}
                            >
                                <Label>
                                    {
                                        userType === 'student' ?
                                            '大学のメールアドレス'
                                            : 'メールアドレス'
                                    }
                                </Label>
                                <Input
                                    placeholder={'入力してください'}
                                    value={account.email ? account.email : ''}
                                    onChange={this.handleFieldChanged("email")}
                                />
                            </Form.Field>
                            {
                                userType === 'student' ?
                                    <Form.Field required
                                    // error={!!emailError}
                                    >
                                        <Label>学籍番号</Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.number ? account.number : ''}
                                            onChange={this.handleFieldChanged("number")}
                                        />
                                    </Form.Field>
                                    : null
                            }
                            <Form.Field required
                            // error={!!emailError}
                            >
                                <Label>パスワード</Label>
                                <div className='flex-section'>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder={'入力してください'}
                                        value={account.password ? account.password : ''}
                                        onChange={this.handleFieldChanged("password")}
                                    />
                                    <Icon name={showPassword ? 'eye' : 'eye slash outline'}
                                        onClick={() => this.show()} />
                                </div>
                            </Form.Field>
                            {
                                userType === 'adviser' ?
                                    <>
                                        <Form.Field required
                                        // error={!!nameError}
                                        >
                                            <Label>職業</Label>
                                            <Input
                                                placeholder={'入力してください'}
                                                value={account.profession ? account.profession : ''}
                                                onChange={this.handleFieldChanged("profession")}
                                            />
                                        </Form.Field>
                                        <Form.Field required
                                        // error={!!nameError}
                                        >
                                            <Label>キャッチフレーズ</Label>
                                            <Input
                                                placeholder={'入力してください'}
                                                value={account.catchphrase ? account.catchphrase : ''}
                                                onChange={this.handleFieldChanged("catchphrase")}
                                            />
                                        </Form.Field>
                                    </>
                                    : null
                            }

                        </Grid.Column>
                        <Grid.Column computer={8}>
                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>プロフィール写真</Label>
                                <div className='profile-section'>
                                    <img id={'profile_picture'}
                                        src={account.profile_picture ? account.profile_picture : `/images/profile_image.svg`} />
                                    <div className={'wrapper-section'}>
                                        <div className="wrapper">
                                            <p>画像をアツプロ一 ド </p>
                                            <input type="file"
                                                accept="image/x-png,image/gif,image/jpeg"
                                                onChange={(event, data) => this.handleImageChanged(event, data)} />
                                        </div>
                                    </div>
                                </div>
                            </Form.Field>
                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>自己紹介文</Label>
                                <TextArea

                                    placeholder={'入力してください'}
                                    value={account.self_introduction ? account.self_introduction : ''}
                                    onChange={this.handleFieldChanged("self_introduction")}
                                />
                            </Form.Field>
                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>相談したいこと(#を先に入力してください)</Label>
                                <TextArea

                                    placeholder={'入力してください'}
                                    value={account.discuss ? account.discuss : ''}
                                    onChange={this.handleFieldChanged("discuss")}
                                />
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    {
                        userType === 'adviser' ?
                            <Grid.Row className='questions-row'>
                                <Grid.Column computer={8}>
                                    <Form.Field>
                                        <Label>座右の銘は？大切にしている考え方は？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question1 ? account.question1 : ''}
                                            onChange={this.handleFieldChanged("question1")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>将来の夢はなんですか？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question2 ? account.question2 : ''}
                                            onChange={this.handleFieldChanged("question2")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>現在の仕事のやりがい、仕事に対する想いは？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question3 ? account.question3 : ''}
                                            onChange={this.handleFieldChanged("question3")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>初めての仕事を選んだ理由は？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question4 ? account.question4 : ''}
                                            onChange={this.handleFieldChanged("question4")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>今の社会に思うことは？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question5 ? account.question5 : ''}
                                            onChange={this.handleFieldChanged("question5")}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column computer={8}>

                                    <Form.Field>
                                        <Label>どんな青春時代を過ごしましたか？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question6 ? account.question6 : ''}
                                            onChange={this.handleFieldChanged("question6")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>仕事以外で普段何してますか？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question7 ? account.question7 : ''}
                                            onChange={this.handleFieldChanged("question7")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>最期の瞬間に何を思っている？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question8 ? account.question8 : ''}
                                            onChange={this.handleFieldChanged("question8")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>どんな時に幸せを感じるか？
                                            <span>30文字以内</span>
                                        </Label>
                                        <Input
                                            placeholder={'入力してください'}
                                            value={account.question9 ? account.question9 : ''}
                                            onChange={this.handleFieldChanged("question9")}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                            </Grid.Row>
                            : null
                    }

                </Grid>
                <div className='form-actions'>
                    <Button className={`secondary`}>更新する</Button>

                    <Button className='underline'>もどる</Button>
                </div>
            </Form>
        );
    }


}