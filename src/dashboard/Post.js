import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";

class Post extends Component {
    state = {
        title: '',
        content: '',
        date: '',
        priority: {
            value: '',
            label: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleDatePick = (date) => {
        this.setState({
            date
        })
    }
    handlePriority = (priority) => {
        this.setState({
            priority: {
                'value': priority.value,
                'label': priority.label
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: '',
            content: '',
            date: '',
            priority: {
                value: '',
                label: ''
            }
        })
    }
    render() {
        const options = [
            { value: '1', label: '高い' },
            { value: '2', label: '普通' },
            { value: '3', label: '低い' }
        ]
        return (
            <div className="row">
                <div className="col s12 m12">
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-content">
                            <h3 className="center blue-text">リストの追加</h3>
                            <label>タスク名</label>
                            <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
                            <label>タスクの詳細</label>
                            <input type="text" id="content" onChange={this.handleChange} value={this.state.content} />
                            <label>タスクの期限</label>
                            <DatePicker dateFormat="yyyy/MM/dd" onChange={this.handleDatePick} selected={this.state.date} />
                            <label>タスクの優先度</label>
                            <div className="input-field">
                                <Select placeholder="優先度合を選択してください" options={options} onChange={this.handlePriority} />
                            </div>
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