import React, { useState } from 'react';
import { useCreateComment } from 'react-lens';

function CommentForm({ publicationId, userId }) {
  const [commentText, setCommentText] = useState('');
  const createComment = useCreateComment();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (commentText.trim() === '') return;
    try {
      await createComment({
        parentId: publicationId,
        content: commentText,
        authorId: userId,
      });
      setCommentText('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Add a comment</label>
      <input
        id="comment"
        type="text"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;