import React from 'react';
import { Header, Form, Label, Input, Dropdown, Button } from 'semantic-ui-react';
import Helper from '../../utils/helper';
import update from "immutability-helper";
import DatePicker, { registerLocale } from "react-datepicker";
import moment from "moment";
import '../page-css.css';
import "react-datepicker/dist/react-datepicker.css";
import {hoursList, minutesList, membersList}  from '../../utils/static-data';
 import ja from "date-fns/locale/ja"; // the locale you want
 registerLocale("ja", ja);


export default class AddLesson extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lessonForm: {
                title: "",
                date: "",
                hour: "",
                minute: "",
                capacity: ""
            }
        }
    }


    handleFieldChanged = (field) => {
        return (e, data) => {
            let value = data.value
            this.setState({
                lessonForm: update(this.state.lessonForm, {
                    [field]: {
                        $set: value
                    }
                }),
            })
        }
    }

    handleDateChanged = (event, data, field) => {
        let newEvent = field === 'time' ? Helper.timeStampToDateTimeAsString(event, true, true)
            : Helper.timeStampToDateTimeAsString(event, false);

        this.setState({
            lessonForm: update(this.state.lessonForm, {
                [field]: {
                    $set: field === 'time' ? newEvent : event
                }
            })
        })
    };

    render() {
        let { lessonForm } = this.state;
        return (
            <div className='lesson-form'>
                <Header as='h3'>ライフチャット予定</Header>
                <Form>
                    <Form.Group>
                        <Form.Field>
                            <Header as='h3'>Step1</Header>
                            <p>ライフチャットのタイトル</p>
                            <Label>※キャリアについてなど</Label>
                            <Input
                                placeholder={'入力してください'}
                                value={lessonForm.title ? lessonForm.title : ''}
                                onChange={this.handleFieldChanged("title")}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Header as='h3'>Step2</Header>
                            <p>日付</p>
                            <Label>ライフチャットの日付</Label>
                            <div className={'date-section'}>
                                <DatePicker
                                    selectsStart
                                    showPreviousMonths={false}
                                    placeholder={'Select a date'}
                                    dateFormat="Pp"
                                    // timeFormat="HH:mm:ss"
                                    //showTimeSelect
                                    //timeIntervals={60}
                                    minDate={moment().toDate()}
                                    selected={lessonForm.date ? new Date(lessonForm.date) : ""}
                                    onChange={(event, data) => this.handleDateChanged(event, data, "date")}
                                    isClearable={false}
                                    useWeekdaysShort={true}

                                    locale={ja}
                                    //showTimeInput
                                    dropdownMode="select"
                                    //timeCaption={'time'}
                                    value={lessonForm.date ? Helper.timeStampToDateTimeAsString(lessonForm.date.toString(), false) : ''}
                                    className={'datepicker-text'}
                                />
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <Header as='h3'>Step3</Header>
                            <p>時間</p>
                            <Label>はじまる時間</Label>
                            <div className={'time-section'}>
                                <Dropdown
                                    search
                                    fluid
                                    selection
                                    selectOnBlur={false}
                                    value={lessonForm.hour}
                                    placeholder={'00時'}
                                    onChange={this.handleFieldChanged('hour')}
                                    clearable
                                    options={hoursList}
                                />
                                <Dropdown
                                    search
                                    fluid
                                    selection
                                    selectOnBlur={false}
                                    value={lessonForm.minute}
                                    placeholder={'00分'}
                                    onChange={this.handleFieldChanged('minute')}
                                    clearable
                                    options={minutesList}
                                />
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <Header as='h3'>Step4</Header>
                            <p>定員</p>
                            <Label>定員数</Label>
                            <Dropdown
                                    search
                                    fluid
                                    selection
                                    selectOnBlur={false}
                                    value={lessonForm.capacity}
                                    placeholder={'2人'}
                                    onChange={this.handleFieldChanged('capacity')}
                                    clearable
                                    options={membersList}
                                />
                        </Form.Field>
                    </Form.Group>
                    <div className='form-actions'>
                        <Button className={`secondary`}>ライフチャットを作成する</Button>
                    </div>
                </Form>
            </div >
        );
    }


}