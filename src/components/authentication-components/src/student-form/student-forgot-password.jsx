import React from 'react';
import {
    Input, Label, Button, Form
} from 'semantic-ui-react'
import update from "immutability-helper";
import '../authentication-css.css';

export default class StudentForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: ''
            },
        }

    }

    handleFieldChanged = (field) => {
        return (e, data) => {
            let value = data.value
            this.setState({
                form: update(this.state.form, {
                    [field]: {
                        $set: value
                    }
                }),
            })
        }
    }

    render() {
        let { form } = this.state;
        return (
            <div className={'student-form password'}>
                <div className='left-side'>
                    <img src='/images/student_login_2x.png' />
                </div>
                <div className='right-side'>
                    <h1 className='header-text'>パスワードをお忘れの方</h1>
                    <p>ご登録されたメールアドレスに、<br /> パスワードを再設定するご案内を送ります。</p>
                    <Form>
                        <Form.Field required
                        // error={!!nameError}
                        >
                            <Label>メールアドレス</Label>
                            <Input
                                placeholder={'登録されているメールアドレスを入力してください'}
                                value={form.email ? form.email : ''}
                                onChange={this.handleFieldChanged("email")}
                            />
                        </Form.Field>
                        <div className='form-actions'>
                            <Button className={`secondary`}>ログインする</Button>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }


}