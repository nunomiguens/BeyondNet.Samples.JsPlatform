import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://beyondnetblogs.com/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map(
    ({ id, title, comments }: any) => {
      return (
        <div
          className="card"
          style={{ width: "30%", marginBottom: "20px" }}
          key={id}
        >
          <div className="card-body">
            <h3>{title}</h3>
            <CommentList comments={comments} />
            <CommentCreate postId={id} />
          </div>
        </div>
      );
    }
  );

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
