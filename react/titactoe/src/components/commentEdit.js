import React from 'react'
import CommentTypeDropDown from './commentTypeDropDown'

class CommentEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Input here a new comment',
            created: Date,
            isKept: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault()
        this.setState({
            message: event.message,
            date: new Date()
        })
        //TODO: How can I insert a new record  
      
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>                
                <CommentTypeDropDown/>
                <br/>
                <input
                    name="isKept"
                    type="checkbox"
                    checked={this.state.isKept}
                    onChange={this.handleInputChange} />
                <label>
                    add a new comment:<br/>
                    <textarea value={this.state.message} onChange={this.handleChange}/>
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default CommentEdit