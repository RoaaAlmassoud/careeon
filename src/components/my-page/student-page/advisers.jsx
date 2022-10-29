import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import '../page-css.css';
import Helper from '../../utils/helper';

export default class Advisers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            advisers:
                [
                    {
                        id:1,
                        picture: '/images/page-images/test.png',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職 #就活 #国際 #海外就職'
                    },

                    {
                        id:2,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:3,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:4,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:5,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:6,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:7,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:8,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id:9,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                    {
                        id: 10,
                        picture: '/images/profile_image.svg',
                        name: '山田 太郎',
                        profession: '元国連の英語コーチ',
                        discuss: '#就活 #国際 #海外就職'
                    },
                ]

        }

    }

    adviserClicked = (adviser) =>{
        this.props.props.props.navigate(`/advisers/${adviser.id}`)
        window.location.reload()
    }

    render() {
        let { advisers } = this.state;
        return (
            <>
                <div className={'advisers-list'}>
                    {
                        !Helper.empty(advisers) ?
                            advisers.map((adviser) => {
                                return (
                                    <div className='adviser' onClick={() => 
                                        this.adviserClicked(adviser)
                                    }>
                                        <img src={adviser.picture} />
                                        <p>{adviser.name}</p>
                                        <Button>{adviser.profession}</Button>
                                        <p className='colored'>{adviser.discuss}</p>
                                    </div>
                                )
                            })
                            :
                            <Header className="empty-header" as={'h3'}>入力いただいたキーワードに該当する<br /> キャリサポはいませんでした</Header>
                    }

                </div >
            </>
        );
    }


}