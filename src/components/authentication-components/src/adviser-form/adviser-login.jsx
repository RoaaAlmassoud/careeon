import React from 'react';
import {
    Menu, Icon, Dropdown, Input, Label,
    TextArea, Button, Tab, Form, Checkbox
} from 'semantic-ui-react'
import update from "immutability-helper";
import '../authentication-css.css';

export default class AdviserLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginForm: {
                email: '',
                password: ''
            }
        }
    }

    handleFieldChanged = (field) => {
        return (e, data) => {
            let value = data.value
            this.setState({
                loginForm: update(this.state.loginForm, {
                    [field]: {
                        $set: value
                    }
                }),
            })
        }
    }


    show = () => {
        let showPassword = this.state.showPassword;
        this.setState({
            showPassword: !showPassword
        })
    };


    render() {
        let { loginForm, showPassword } = this.state;


        return (
            <div className={'adviser-form'}>
                <div className='left-side'>
                    <p className='header-text'>会員の方はこちら</p>
                    <Form>
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
                        <div className='form-actions'>
                            <Button className={`secondary`}>ログインする</Button>

                            <Button className='underline'>パスワードをお忘れの方はこちら</Button>
                        </div>
                    </Form>
                </div>
                <div className='right-side'>
                    <p className='header-text'>はじめての方はこちら</p>
                    <p>はじめて利用する方は、下にあるボタンより会員登録してください。</p>
                    <Button className={`primary`}>新規会員登録</Button>
                </div>
            </div >
        );
    }


}