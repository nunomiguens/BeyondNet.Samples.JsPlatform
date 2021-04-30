const CommentList = ({ comments }: any) => {
  const renderedComments = comments.map((comment: any) => {
    const content =
      comment.status === "approved"
        ? comment.content
        : comment.status === "pending"
        ? "This comment is awaiting moderation"
        : "This comment has been rejected";

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
