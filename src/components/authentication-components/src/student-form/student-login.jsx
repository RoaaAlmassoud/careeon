import React from 'react';
import {
    Menu, Icon, Dropdown, Input, Label,
    TextArea, Button, Tab, Form, Checkbox
} from 'semantic-ui-react'
import update from "immutability-helper";
import '../authentication-css.css';

export default class StudentLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                email: '',
                password: ''
            },
            termsChecked: false,
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
                this.setState({
                    termsChecked: data.checked
                })
            }
        }
    }

    show = () => {
        let showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword
        })
    };


    render() {
        let { loginForm, showPassword, termsChecked } = this.state;
        return (
            <div className={'student-form'}>
                <div className='left-side'>
                    <img src='/images/student_login_2x.png' />
                </div>
                <div className='right-side'>
                    <h1 className='header-text'>ようこそ！Caree Onへ！</h1>
                    <Form>
                        <Form.Field className='check'>
                            <Checkbox checked={termsChecked}
                                onChange={this.handleFieldChanged('', "termsChecked")} />
                            <label><span>利用規約</span>に同意する</label>
                        </Form.Field>
                        <Form.Field>
                            <Button className={`${termsChecked ? 'primary' : 'secondary'}`}>ログインする</Button>
                        </Form.Field>
                        <div className='fields-section'>
                            <Form.Field required
                            // error={!!nameError}
                            >
                                <Label>メールアドレス</Label>
                                <Input
                                    placeholder={'入力してください'}
                                    value={loginForm.email ? loginForm.email : ''}
                                    onChange={this.handleFieldChanged("email")}
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
                                        value={loginForm.password ? loginForm.password : ''}
                                        onChange={this.handleFieldChanged("password")}
                                    />
                                    <Icon name={showPassword ? 'eye' : 'eye slash outline'}
                                        onClick={() => this.show()} />
                                </div>
                            </Form.Field>
                        </div>
                        <div className='form-actions'>
                            <Button className={`secondary`}>ログインする</Button>

                            <Button className='underline'>パスワードをお忘れの方はこちら</Button>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }


}