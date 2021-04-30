import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from '../components/TodoTextInput'
import {  Checkbox, Container, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

export default class TodoItem extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired
    }

    state = {
        editing: false
    }

    handleDoubleClick = () => {
        this.setState({editing: true})
    }

    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.deleteTodo(id)
        }else{
            this.props.editTodo(id, text)
        }
        this.setState({editing: false})
    }

    render() {
        const { todo, completeTodo, deleteTodo } = this.props

        let element
        if (this.state.editing){
            element = (
                <TodoTextInput text={todo.text}
                               editing={this.state.editing}
                               onSave={(text)=>this.handleSave(todo.id,text)} />
            )
        }else{
            element = (
                <Container maxWidth="sm">
                    <Checkbox 
                            checked={todo.completed}
                            onChange={() => completeTodo(todo.id)}/>
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text} 
                    </label>
                    <IconButton size="medium">
                        <DeleteIcon fontSize="medium" onClick={() => deleteTodo(todo.id)}/>
                    </IconButton>
                </Container>
            )
        }

        return (
            <li>
                {element}
            </li>
        )
    }
}
