import React, { useState } from 'react';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);

  const submitComment = () => {
    if (!comment.trim()) return;
    setData((prev) => [
      ...prev,
      {
        id: Date.now(), // Unique ID for each comment
        comment: comment,
        like: 0,
        replies: [...prev,[{comment}]]
      }
    ]);
    setComment('');
  };

//   const addReply = (id, replyText) => {
//     setData((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? { ...item, replies: [...item.replies, replyText] }
//           : item
//       )
//     );
//   };

  const likeComment = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, like: item.like + 1 } : item
      )
    );
  };

  const dislikeComment = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id && item.like > 0
          ? { ...item, like: item.like - 1 }
          : item
      )
    );
  };
console.log(data);
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>

      {data.map((item) => (
        <div key={item.id} style={{ marginBottom: '20px' }}>
          <p>{item.comment}</p>
          <p>Likes: {item.like}</p>
          <button onClick={() => likeComment(item.id)}>Like</button>
          <button onClick={() => dislikeComment(item.id)}>Dislike</button>

          <div style={{ marginLeft: '20px' }}>
            {item.replies.map((reply, index) => (
              <p key={index}>Reply: {reply}</p>
            ))}
            <input
              type="text"
              placeholder="Write a reply..."
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value.trim()) {
                //   addReply(item.id, e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentSection;
