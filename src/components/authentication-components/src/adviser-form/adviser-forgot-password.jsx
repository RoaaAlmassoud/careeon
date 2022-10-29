import React from 'react';
import {
    Menu, Icon, Dropdown, Input, Label,
    TextArea, Button, Tab, Form, Checkbox
} from 'semantic-ui-react'
import update from "immutability-helper";
import '../authentication-css.css';

export default class AdviserForgotPassword extends React.Component {

    constructor(props) {
        super(props);
       
        this.state = {
            form: {
                email: ''
            }
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
            <div className={'adviser-form'}>
                <div className='left-side'>
                    <p className='header-text'>パスワードをお忘れの方</p>
                    <p>ご登録されたメールアドレスに、 <br/>パスワードを再設定するご案内を送ります。</p>
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
                            <Button className={`secondary`}>送信する</Button>
                        </div>
                    </Form>
                </div>
                
            </div >
        );
    }


}