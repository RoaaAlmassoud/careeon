import React, { useState } from 'react';
import { Tab, Header } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import Helper from '../../utils/helper';
import '../page-css.css';
import { relativeTimeRounding } from 'moment';

function LessonDetails(props) {
    let [lessonDetails] = useState(0);
    const params = useParams();
    lessonDetails = {
        id: params.id,
        title: "お悩み相談",
        date: "2020/4/20",
        startDate: "12:30",
        likes: 100,
        students: [
            {
                studentImage: '/images/profile_image.svg',
                studentName: "山田太郎"
            },
            {
                studentImage: '/images/profile_image.svg',
                studentName: "山田花子"
            },
            {
                studentImage: '/images/profile_image.svg',
                studentName: "田中太郎"
            }
        ],

    }

    function back() {
        props.props.navigate('/lessons')
    }

    return (
        <div className='lesson-details'>
            <div className='previous-page'
                onClick={() => {
                    back();
                }}
            >
                <img src="/images/arrow-back.svg" />
                <span>ライフチャット詳細</span>
            </div>
            <div className='lesson'>
                <div className='item'>
                    <p className='key'>ライフチャットのタイトル</p>
                    <p className='value'>{lessonDetails.title}</p>
                </div>
                <div className='item'>
                    <p className='key'>ライフチャットの開始時間</p>
                    <p className='value'>{`開始時間 ${lessonDetails.date} ${lessonDetails.startDate}`}</p>
                </div>

                <div className='item'>
                    <p className='key'>生徒の情報</p>
                    <div className='students'>
                        {
                            lessonDetails.students.map((student) => {
                                return <div className='student'>
                                    <img src={student.studentImage} />
                                    <span className='value'>{student.studentName}</span>
                                </div>
                            })
                        }
                    </div>
                </div>
                {
                    lessonDetails.likes ?
                        <div className='item'>
                            <p className='key'>もらったありがとうポイント</p>
                            <div className='likes'>
                                <img src="/images/page-images/heart.png" />
                                <span className='value'>{lessonDetails.likes}</span>
                            </div>
                        </div>
                        : null
                }

            </div>
            {
                localStorage.getItem('userType') ?
                    localStorage.getItem('userType') === 'student' ?
                        <p className='info'>※予約済みのライフチャットをキャンセルされたい場合は、運営のinfo@careeon.jpまでご連絡ください</p>
                        : null
                    : null
            }
        </div >
    );
}

export default LessonDetails;