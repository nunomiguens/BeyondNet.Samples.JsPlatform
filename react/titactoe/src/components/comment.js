import React from 'react'
import CommentEdit from './commentEdit'

function Avatar(props){
    return (
            <img
                src={props.user.AvatarUrl}
                alt={props.user.UserName}/>
        );
}

function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <div>{props.user.UserName}</div>
    </div>
  );
}

class Comment extends React.Component{ 
  renderTable = ((comments) => {
    const children = comments.map((element) =>
    <tr key={element.Text}>
      <td>
        {element.Created}
      </td>
      <td>
        {element.Text}
      </td>
    </tr>
  );
  return children
})

 render(){
        return (
            <div>
              <UserInfo user={this.props.user} />
              <table>
                <tbody>
                  { this.renderTable(this.props.comments) }
                </tbody>
              </table>             
              <br/>
              <CommentEdit comments={this.props.comments}/>
            </div>
        )
    };
}

export default Comment