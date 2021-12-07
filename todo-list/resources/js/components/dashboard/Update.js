import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";

class Update extends Component {
    state = {
        id: this.props.targetData.id,
        title: this.props.targetData.title,
        dead_line: new Date(this.props.targetData.dead_line),
        priority: this.props.targetData.priority
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
            console.log("hello world");
        }
    }
    handlePriority = (priority) => {
        this.setState({
            priority: priority.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updateTodo(this.state);
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
                                <h3 className="center blue-text">リストの編集</h3>
                                <label>タスク名</label>
                                <input type="text" id="title" onChange={this.handleChange} value={this.state.title} />
                                <label>期限</label>
                                <DatePicker dateFormat="yyyy/MM/dd" onChange={this.handleDatePick} selected={this.state.dead_line} />
                                <label>優先度</label>
                                <div className="input-field">
                                    <Select placeholder="優先度合を選択してください" options={options} onChange={this.handlePriority} minDate={new Date()}/>
                                </div>
                            </div>
                            <div className="card-action" style={{zIndex: 0}}>
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

export default Update