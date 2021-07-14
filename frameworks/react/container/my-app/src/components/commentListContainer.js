import React from 'react'
import CommentList from './commentList'

class CommentListContainer extends React.Component {
    state = { data: [] };
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            this.setState({data: data})
        }).catch(err => console.log(err.message))
    }
    render() {
      return <CommentList data={this.state.data} />;
    }
  }
export default CommentListContainer