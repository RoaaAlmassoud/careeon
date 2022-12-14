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
                                <Label>??????</Label>
                                <Input
                                    placeholder={'????????????????????????'}
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
                                            '??????????????????????????????'
                                            : '?????????????????????'
                                    }
                                </Label>
                                <Input
                                    placeholder={'????????????????????????'}
                                    value={account.email ? account.email : ''}
                                    onChange={this.handleFieldChanged("email")}
                                />
                            </Form.Field>
                            {
                                userType === 'student' ?
                                    <Form.Field required
                                    // error={!!emailError}
                                    >
                                        <Label>????????????</Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.number ? account.number : ''}
                                            onChange={this.handleFieldChanged("number")}
                                        />
                                    </Form.Field>
                                    : null
                            }
                            <Form.Field required
                            // error={!!emailError}
                            >
                                <Label>???????????????</Label>
                                <div className='flex-section'>
                                    <Input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder={'????????????????????????'}
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
                                            <Label>??????</Label>
                                            <Input
                                                placeholder={'????????????????????????'}
                                                value={account.profession ? account.profession : ''}
                                                onChange={this.handleFieldChanged("profession")}
                                            />
                                        </Form.Field>
                                        <Form.Field required
                                        // error={!!nameError}
                                        >
                                            <Label>????????????????????????</Label>
                                            <Input
                                                placeholder={'????????????????????????'}
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
                                <Label>????????????????????????</Label>
                                <div className='profile-section'>
                                    <img id={'profile_picture'}
                                        src={account.profile_picture ? account.profile_picture : `/images/profile_image.svg`} />
                                    <div className={'wrapper-section'}>
                                        <div className="wrapper">
                                            <p>???????????????????????? ??? </p>
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
                                <Label>???????????????</Label>
                                <TextArea

                                    placeholder={'????????????????????????'}
                                    value={account.self_introduction ? account.self_introduction : ''}
                                    onChange={this.handleFieldChanged("self_introduction")}
                                />
                            </Form.Field>
                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>?????????????????????(#?????????????????????????????????)</Label>
                                <TextArea

                                    placeholder={'????????????????????????'}
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
                                        <Label>??????????????????????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question1 ? account.question1 : ''}
                                            onChange={this.handleFieldChanged("question1")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>?????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question2 ? account.question2 : ''}
                                            onChange={this.handleFieldChanged("question2")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>???????????????????????????????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question3 ? account.question3 : ''}
                                            onChange={this.handleFieldChanged("question3")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>??????????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question4 ? account.question4 : ''}
                                            onChange={this.handleFieldChanged("question4")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>?????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question5 ? account.question5 : ''}
                                            onChange={this.handleFieldChanged("question5")}
                                        />
                                    </Form.Field>
                                </Grid.Column>
                                <Grid.Column computer={8}>

                                    <Form.Field>
                                        <Label>????????????????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question6 ? account.question6 : ''}
                                            onChange={this.handleFieldChanged("question6")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>??????????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question7 ? account.question7 : ''}
                                            onChange={this.handleFieldChanged("question7")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>??????????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
                                            value={account.question8 ? account.question8 : ''}
                                            onChange={this.handleFieldChanged("question8")}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label>???????????????????????????????????????
                                            <span>30????????????</span>
                                        </Label>
                                        <Input
                                            placeholder={'????????????????????????'}
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
                    <Button className={`secondary`}>????????????</Button>

                    <Button className='underline'>?????????</Button>
                </div>
            </Form>
        );
    }


}