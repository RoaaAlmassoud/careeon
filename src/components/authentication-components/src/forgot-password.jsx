import React from 'react';
import './authentication-css.css';

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }

    }

    render() {
        return (
            <div className={'forgot-password'}>
                <h1>入力いただいたメールアドレスに<br/> パスワード再設定案内メールが送信されました。</h1>
                <p>もどる</p>
            </div >
        );
    }


}