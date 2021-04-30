import React from 'react'

class CommentTypeDropDown extends React.Component {
    constructor(props){
        super(props)
        this.state = {value:'warning'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    
    handleSubmit(event) {
        event.preventDefault()
    }
    
    render(){
        return (
        <label>
          Pick your comment type:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="info">Information</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </label>)
    }
}

export default CommentTypeDropDown