import React from 'react';
import {
    Menu, Icon, Dropdown, Input, Label,
    TextArea, Button, Tab, Form, Checkbox
} from 'semantic-ui-react'
import update from "immutability-helper";
import './authentication-css.css';

export default class RegistrationTabs extends React.Component {

    constructor(props) {
        super(props);
        console.log('prrops in regg: ', props)
        let userType = props.userType;
        this.state = {
            userType: userType,
            termsChecked: false,
            showPassword: false,
            firstForm:
                userType === 'student' ?
                    {
                        university_name: '',
                        faculty: '',
                        grade: ''
                    } :
                    {
                        name: '',
                        email: '',
                        password: ''
                    },

            secondForm:
                userType === 'student' ?
                    {
                        name: '',
                        email: '',
                        number: '',
                        password: ''
                    } :
                    {
                        profile_picture: '',
                        profession: '',
                        catchphrase: '',
                        self_introduction: '',
                        discuss: ''
                    },

            thirdForm:
                userType === 'student' ?
                    {
                        profile_picture: '',
                        catchphrase: '',
                        self_introduction: '',
                        discuss: ''
                    } :
                    {
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
            innerWidth: window.innerWidth,
            activeIndex: null
        }
    }

    handleFieldChanged = (form, field) => {
        return (e, data) => {
            if (form) {
                let value = data.value
                this.setState({
                    [form]: update(this.state[form], {
                        [field]: {
                            $set: value
                        }
                    }),
                })
            } else {
                console.log('data: ', data)
                this.setState({
                    termsChecked: data.checked
                })
            }
        }
    }

    changeLastSection = (section) => {
        this.setState({
            lastSection: section
        })
    }

    componentDidMount() {

        if (this.state.userType === 'user') {
            // this.welcomeModalRef.current.show();
        }
    }

    changeInnerWidth = () => {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    componentWillMount() {
        window.addEventListener('resize', this.changeInnerWidth);
    }

    handleImageChanged = (event, data, form) => {
        let file = event.target.files[0];
        this.setState({
            [form]: update(this.state[form], {
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

    clicked = () => {
        window.location = window.location.origin
    };

    changePage = (page) => {
        this.props.history.push(`/${page ? page : ''}`)
    }

    renderCommonStep = (formName, form) => {
        let { userType } = this.state;
        console.log('form in common : ', form)
        return (
            <div className='common-step'>
                <div className='left-section'>
                    <Form.Field required
                    // error={!!nameError}
                    >
                        <Label>プロフィール写真</Label>
                        <div className='profile-section'>
                            <img id={'profile_picture'}
                                src={form.profile_picture ? form.profile_picture : `/images/profile_image.svg`} />
                            <div className={'wrapper-section'}>
                                <div className="wrapper">
                                    <p>
                                        {
                                            userType === 'student' ?
                                                '画像をアツプロ一 ド'
                                                :
                                                '画像をアツプロ一 ドする'
                                        }
                                    </p>
                                    <input type="file"
                                        accept="image/x-png,image/gif,image/jpeg"
                                        onChange={(event, data) => this.handleImageChanged(event, data, formName)} />
                                </div>
                            </div>
                        </div>
                    </Form.Field>
                    {
                        userType === 'adviser' ?

                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>職業</Label>
                                <Input
                                    placeholder={'入力してください'}
                                    value={form.profession ? form.profession : ''}
                                    onChange={this.handleFieldChanged(formName, "profession")}
                                />
                            </Form.Field>
                            : null
                    }

                    <Form.Field required
                    // error={!!nameError}
                    >
                        <Label>キャッチフレーズ</Label>
                        <Input
                            placeholder={'入力してください'}
                            value={form.catchphrase ? form.catchphrase : ''}
                            onChange={this.handleFieldChanged(formName, "catchphrase")}
                        />
                    </Form.Field>
                </div>
                <div className='right-section'>
                    <Form.Field required
                    // error={!!nameError}
                    >
                        <Label>自己紹介文</Label>
                        <TextArea

                            placeholder={'入力してください'}
                            value={form.self_introduction ? form.self_introduction : ''}
                            onChange={this.handleFieldChanged(formName, "self_introduction")}
                        />
                    </Form.Field>
                    <Form.Field required
                    // error={!!nameError}
                    >
                        <Label>相談したいこと(#を先に入力してください)</Label>
                        <TextArea

                            placeholder={'入力してください'}
                            value={form.discuss ? form.discuss : ''}
                            onChange={this.handleFieldChanged(formName, "discuss")}
                        />
                    </Form.Field>
                </div>
            </div>
        )
    }

    show = () => {
        let showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword
        })
    };

    renderStep = (stepNumber) => {
        let { userType, firstForm, secondForm, thirdForm, termsChecked, showPassword } = this.state;
        let fields = null;
        let btnText = '次へ'
        if (userType === 'student') {
            switch (stepNumber) {
                case 1:
                    fields =
                        <>
                            <Form.Field required
                            // error={!!categoryIdsError}
                            >
                                <Label>大学名を選択してください</Label>
                                <Dropdown
                                    search
                                    fluid
                                    selection
                                    selectOnBlur={false}
                                    value={firstForm.university_name}
                                    placeholder={'クリックして選択してください'}
                                    onChange={this.handleFieldChanged('firstForm', 'university_name')}
                                    clearable
                                    options={[]}
                                />
                            </Form.Field>
                            <Form.Field required
                            // error={!!categoryIdsError}
                            >
                                <Label>学部を選択してください</Label>
                                <Dropdown
                                    search
                                    fluid
                                    selection
                                    selectOnBlur={false}
                                    value={firstForm.faculty}
                                    placeholder={'クリックして選択してください'}
                                    onChange={this.handleFieldChanged('firstForm', 'faculty')}
                                    clearable
                                    options={[]}
                                />
                            </Form.Field>
                            <Form.Field required
                            // error={!!categoryIdsError}
                            >
                                <Label>学年を選択してください</Label>
                                <Dropdown
                                    search
                                    fluid
                                    selection
                                    selectOnBlur={false}
                                    value={firstForm.grade}
                                    placeholder={'クリックして選択してください'}
                                    onChange={this.handleFieldChanged('firstForm', 'grade')}
                                    clearable
                                    options={[]}
                                />
                            </Form.Field>
                        </>

                    break;
                case 2:
                    console.log('showPassword: ', showPassword)
                    fields = <>
                        <Form.Field required
                        // error={!!nameError}
                        >
                            <Label>名前</Label>
                            <Input
                                placeholder={'入力してください'}
                                value={secondForm.name ? secondForm.name : ''}
                                onChange={this.handleFieldChanged('secondForm', "name")}
                            />
                        </Form.Field>
                        <Form.Field required
                        // error={!!emailError}
                        >
                            <Label>大学のメールアドレス</Label>
                            <Input
                                placeholder={'入力してください'}
                                value={secondForm.email ? secondForm.email : ''}
                                onChange={this.handleFieldChanged('secondForm', "email")}
                            />
                        </Form.Field>
                        <Form.Field required
                        // error={!!emailError}
                        >
                            <Label>学籍番号</Label>
                            <Input
                                placeholder={'入力してください'}
                                value={secondForm.number ? secondForm.number : ''}
                                onChange={this.handleFieldChanged('secondForm', "number")}
                            />
                        </Form.Field>
                        <Form.Field required
                        // error={!!emailError}
                        >
                            <Label>パスワード</Label>
                            <div className='flex-section'>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={'入力してください'}
                                    value={secondForm.password ? secondForm.password : ''}
                                    onChange={this.handleFieldChanged('secondForm', "password")}
                                />
                                <Icon name={showPassword ? 'eye' : 'eye slash outline'}
                                    onClick={() => this.show()} />
                            </div>
                        </Form.Field>
                    </>
                    break;
                case 3:
                    btnText = 'アカウントを作成する'
                    fields = this.renderCommonStep('thirdForm', thirdForm)
                    break;
            }
        } else {
            switch (stepNumber) {
                case 1:
                    fields = <>
                        <Form.Field required
                        // error={!!nameError}
                        >
                            <Label>名前</Label>
                            <Input
                                placeholder={'入力してください'}
                                value={secondForm.name ? secondForm.name : ''}
                                onChange={this.handleFieldChanged('secondForm', "name")}
                            />
                        </Form.Field>
                        <Form.Field required
                        // error={!!emailError}
                        >
                            <Label>メールアドレス</Label>
                            <Input
                                placeholder={'入力してください'}
                                value={secondForm.email ? secondForm.email : ''}
                                onChange={this.handleFieldChanged('secondForm', "email")}
                            />
                        </Form.Field>
                        <Form.Field required
                        // error={!!emailError}
                        >
                            <Label>パスワード</Label>
                            <div className='flex-section'>
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder={'入力してください'}
                                    value={secondForm.password ? secondForm.password : ''}
                                    onChange={this.handleFieldChanged('secondForm', "password")}
                                />
                                 <Icon name={showPassword ? 'eye' : 'eye slash outline'}
                                    onClick={() => this.show()} />
                            </div>
                        </Form.Field>
                    </>
                    break;
                case 2:
                    fields = this.renderCommonStep('secondForm', secondForm)
                    break;
                case 3:
                    fields =
                        <div className='questios-section'>
                            <Form.Group>
                                <Form.Field>
                                    <Label>座右の銘は？大切にしている考え方は？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question1 ? thirdForm.question1 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question1")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>将来の夢はなんですか？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question2 ? thirdForm.question2 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question2")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>現在の仕事のやりがい、仕事に対する想いは？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question3 ? thirdForm.question3 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question3")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>初めての仕事を選んだ理由は？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question4 ? thirdForm.question4 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question4")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>今の社会に思うことは？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question5 ? thirdForm.question5 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question5")}
                                    />
                                </Form.Field>
                            </Form.Group>
                            <Form.Group>
                                <Form.Field>
                                    <Label>どんな青春時代を過ごしましたか？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question6 ? thirdForm.question6 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question6")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>仕事以外で普段何してますか？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question7 ? thirdForm.question7 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question7")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>最期の瞬間に何を思っている？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question8 ? thirdForm.question8 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question8")}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Label>どんな時に幸せを感じるか？
                                        <span>30文字以内</span>
                                    </Label>
                                    <Input
                                        placeholder={'入力してください'}
                                        value={thirdForm.question9 ? thirdForm.question9 : ''}
                                        onChange={this.handleFieldChanged('thirdForm', "question9")}
                                    />
                                </Form.Field>
                            </Form.Group>
                        </div>
                    break;
                case 4:
                    btnText = 'サービスを開始する'
                    let value =
                        fields =
                        <>
                            <Form.Field>
                                <div className='terms-section'>
                                    <p className='header-text'>利用規約</p>
                                    <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。 このエリアのなかでスクロールさせます。</p>
                                    <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。 このエリアのなかでスクロールさせます。</p>
                                    <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。 このエリアのなかでスクロールさせます。</p>
                                    <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。 このエリアのなかでスクロールさせます。</p>
                                    <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。 このエリアのなかでスクロールさせます。</p>
                                    <p>利用規約が入ります。利用規約が入ります。利用規約が入ります。利用規約が入ります。 このエリアのなかでスクロールさせます。</p>
                                </div>
                            </Form.Field>

                            <Form.Field>
                                <Checkbox checked={termsChecked}
                                    onChange={this.handleFieldChanged('', "termsChecked")} />
                                <label><span>利用規約</span>に同意する</label>
                            </Form.Field>
                        </>
                    break;
            }
        }

        return (
            <Form className={`${userType} form_${stepNumber}`}>
                {fields}
                <div className='form-actions'>
                    <Button className={`secondary`}>{btnText}</Button>

                    <Button className='underline'>もどる</Button>
                </div>
            </Form>
        )
    }

    render() {
        let { userType, lastSection, innerWidth, activeIndex } = this.state;
        let width = innerWidth <= 1230 ? '25%' : '240px'
        let style = {
            width: width,
            textAlign: "center",
            borderBottom: 'none',
            padding: '0'
        }

        let panes = [];
        if (userType === 'adviser') {
            panes = [{
                menuItem: (
                    <Menu.Item key='ad-step-1' style={style}>
                        <h4 className={'tab-header'}>Step1</h4>
                        <Icon name='caret right' size='large' />
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>アカウント情報を入力してください</p>
                    {this.renderStep(1)}
                </Tab.Pane>,
            },
            {
                menuItem: (
                    <Menu.Item key='ad-step-2' style={style}>
                        <h4 className={'tab-header'}>Step2</h4>
                        <Icon name='caret right' size='large' />
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>アカウント情報を入力してください</p>
                    <p>※全て入力する必要はありません。</p>
                    {this.renderStep(2)}
                </Tab.Pane>,
            },
            {
                menuItem: (
                    <Menu.Item key='ad-step-3' style={style}>
                        <h4 className={'tab-header'}>Step3</h4>
                        <Icon name='caret right' size='large' />
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>9ボックス作成のための質問にお答えください</p>
                    <p>※全て入力する必要はありません。</p>
                    {this.renderStep(3)}
                </Tab.Pane>,
            },
            {
                menuItem: (
                    <Menu.Item key='ad-step-4' style={style}>
                        <h4 className={'tab-header'}>Step4</h4>
                        <Icon />
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>利用規約</p>
                    {this.renderStep(4)}
                </Tab.Pane>,
            }
            ];
        } else {
            panes = [{
                menuItem: (
                    <Menu.Item key='st-step-1' style={style}>
                        <h4 className={'tab-header'}>Step1
                        </h4>
                        <Icon name='caret right' size='large' />
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>学生情報を入力してください</p>
                    {this.renderStep(1)}
                </Tab.Pane>,
            },
            {
                menuItem: (
                    <Menu.Item key='st-step-2' style={style}>
                        <h4 className={'tab-header'}>Step2
                        </h4>
                        <Icon name='caret right' size='large' />
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>アカウント情報を入力してください</p>
                    {this.renderStep(2)}
                </Tab.Pane>,
            },
            {
                menuItem: (
                    <Menu.Item key='st-step-3' style={style}>
                        <h4 className={'tab-header'}>Step3
                        </h4>
                    </Menu.Item>
                ),
                render: () => <Tab.Pane>
                    <p>ユーザー情報を入力してください</p>
                    <p>※全て入力する必要はありません。</p>
                    {this.renderStep(3)}
                </Tab.Pane>,
            }
            ];
        }

        return (
            <div className={'registration-tabs'}>
                <div className='tabs-section'>
                    <Tab
                        className={'tabs'}
                        menu={{ secondary: true, pointing: true }}
                        panes={panes} />
                </div>
            </div >
        );
    }


}