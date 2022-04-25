import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import Collapsible from 'react-collapsible';
import "react-datepicker/dist/react-datepicker.css";

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            dead_line: '',
            priority: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleDatePick = (dead_line) => {
        var dateNow = new Date();
        var dateInput = new Date(dead_line);
        if(dateInput >= dateNow) {
            this.setState({
                dead_line
            })
        } else {
            console.log('過去日付は入力できません。');
        }
    }
    handlePriority = (priority) => {
        this.setState({
            priority: priority.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: '',
            dead_line: '',
            priority: ''
        })
    }
    render() {
        const options = [
            { value: '3', label: '高い' },
            { value: '2', label: '普通' },
            { value: '1', label: '低い' }
        ];
        return (
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                            <form onSubmit={this.handleSubmit}>
                                <div className="card-content">
                                    {/* <h3 className="center blue-text">リストの追加</h3> */}
                                    <label>タイトル</label>
                                    <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
                                    <Collapsible trigger="詳細を表示/非表示" overflowWhenOpen={'visible'}>
                                        <label>期限</label>
                                        <DatePicker dateFormat="yyyy/MM/dd" onChange={this.handleDatePick} selected={this.state.dead_line} />
                                        <label>優先度</label>
                                        <div className="input-field">
                                            <Select placeholder="優先度合を選択してください" options={options} onChange={this.handlePriority} minDate={new Date()}/>
                                        </div>
                                    </Collapsible>
                                </div>
                                <div className="card-action" id="card-action">
                                    <button className="btn blue waves-effect waves-light" type="submit" name="action">Submit
                                        <i className="material-icons right">send</i>
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post