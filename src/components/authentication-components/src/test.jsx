import React from 'react';
import { Menu, Icon, Breadcrumb, Accordion, Label, Checkbox, Button, Tab } from 'semantic-ui-react'
import './authentication-css.css';



export default class Test extends React.Component {

    constructor(props) {
        super(props);
        console.log('props in test: ', props)
        this.welcomeModalRef = React.createRef();
        let userType = localStorage.getItem('user_type') ? localStorage.getItem('user_type') : 'provider'
        this.state = {
            userType: userType,
            lastSection: '',
            innerWidth: window.innerWidth,
            activeIndex: null
        }

    }

    render() {
        let { userType, lastSection, innerWidth } = this.state;
        

        return (
            <div className={'page-container'}>
               Test
            </div >
        );
    }


}