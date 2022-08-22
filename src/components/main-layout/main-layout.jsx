// import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom';
// import Helper from '../../utils/helper'
// import { Menu, Dropdown, Icon, Search, Button, Loader } from "semantic-ui-react"


// class MainLayout extends Component {
//     constructor(props) {
//         super(props);
//         this.mainApi = new MainApi(this)
//         this.pathName = props ? props.props.pathName.substring(1) : 'home';
//         let showFooter = (this.pathName !== 'register' && !Helper.emptyString(this.pathName));
//         this.state = {
//             activeItem: this.pathName !== 'home' ? this.pathName : 'home',
//             showFooter: showFooter,
//             loading: true,
//             categories: [],
//             showCategoriesList: false,
//             filteredCategories: [],
//             innerWidth: window.innerWidth,
//             fullFilteredCats: [],
//             showMobileSearch: false,
//             showUserItems: false
//         }
//     }

//     changeInnerWidth = () => {
//         this.setState({
//             innerWidth: window.innerWidth
//         })
//     }

//     componentWillMount() {
//         window.addEventListener('resize', this.changeInnerWidth);
//     }

//     render() {
//         let { innerWidth } = this.state;
//         let user = localStorage.getItem('api_token');
//         return (
//             <>
//                 <div className={`${innerWidth <= 1024 ? 'mobile' : ''} main-container`}>
//                     <div className={`header-section`}>
//                         <img src='/images/PC_logo.svg' />
//                     </div>
//                     <div className={'children'} key={childrenRefreshKey}>
//                         {this.props.children}
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default withRouter(MainLayout);

import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

let pathName = window.location.pathname
function pageName() {
    let pageTitle = "";
    switch (pathName) {
        case '/student-registration':
        case '/adviser-registration':
            pageTitle = "新規会員登録"
            break;
        case '/student-login':
        case '/adviser-login':
            pageTitle = 'ログイン'
            break;
    }
    return pageTitle;
}

function MainLayout(Component) {
    console.log('Component:  ', Component)
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    // let { innerWidth } = this.state;
    return (
        <div className={`main-container`}>
            <div className={`header-section`}>
                <img src='/images/PC_logo.svg' />
                <p>{pageName()}</p>
            </div>
            <div className={'children'}>
                {/* <Component
                        {...props}
                        router={{ location, navigate, params }}
                    /> */}
                {Component.children}
            </div>
        </div>

    );
}

export default MainLayout;