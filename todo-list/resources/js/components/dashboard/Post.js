import React, { Component } from 'react';

class Post extends Component {
    state = {
        title: '',
        content: ''
    }
    hamdleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title: '',
            content: ''
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col s12 m12">
                <div className="card">
                    <form onSubmit={this.handleSubmit}>
                        <div className="card-content">
                            <h3 className="center blue-text">リストの追加</h3>
                            <label>タスク名</label>
                            <input type="text" id="title" onChange={this.hamdleChange} value={this.state.title} />
                            <label>タスクの詳細</label>
                            <input type="text" id="content" onChange={this.hamdleChange} value={this.state.content} />
                        </div>
                        <div className="card-action">
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