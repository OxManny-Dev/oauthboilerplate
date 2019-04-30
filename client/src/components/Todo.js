import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTodos, handleTodoSubmit } from './../actions/index';

class Todo extends Component {
    state = {
        todo: ''
    };

    componentDidMount() {
        this.props.fetchTodos();
    }

    handleInputchange = event => {

        this.setState({todo: event.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleTodoSubmit(this.state.todo);
        this.setState({todo: ''});
    }

    renderTodos() {
        if(this.props.todos.length === 0) {
            return <h1>You have no todos</h1>
        } else {
            return this.props.todos.map(todo => {
                return <h1 key={todo._id}>{todo.todo}</h1>;
            })
        }
    }

    render() {
        console.log(this.state.todo);
        return (
            <div>
                {this.renderTodos()}
                <form>
                    <input value={this.state.todo} onChange={this.handleInputchange} />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>                
            </div>

        );
    }
}

function mapStateToProps({todos}){
    return {todos};
}

export default connect(mapStateToProps, {fetchTodos, handleTodoSubmit})(Todo);