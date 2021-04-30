import React from 'react'

class LogOn extends React.Component {
    getGreeting(){
        if (this.props.user)
          return <p>Hello, {this.formatName(this.props.user)}</p>
        else
          return <p>Hello, stranger.</p>
    }
    formatName(user){
        return user.UserName + ', ' + user.LastName + "!"
    }
    render(){
        return (
            <div>
                <b>Login:</b>
                { this.getGreeting(this.props.user)}
            </div>
        );
    }
}

export default LogOn