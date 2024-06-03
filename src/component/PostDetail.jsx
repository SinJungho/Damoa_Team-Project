import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import communityData from '../utils/communityData';
import styles from '../css/PostDetail.module.css';

const PostDetail = () => {
    const { postId } = useParams();
    const post = communityData.find((item) => item.id === Number(postId)) || {};
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [newReply, setNewReply] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const newComments = [...comments, { text: newComment, id: Date.now(), replies: [], parentId: null }];
            setComments(newComments);
            setNewComment('');
        }
    };

    const handleAddReply = (parentId) => {
        if (newReply.trim() !== '') {
            const newComments = [...comments, { text: newReply, id: Date.now(), replies: [], parentId: parentId }];
            setComments(newComments);
            setNewReply('');
            setReplyTo(null);
        }
    };

    const handleReply = (commentId) => {
        setReplyTo(commentId);
    };

    return (
        <div className={styles.postDetailContainer}>
            <h1 className={styles.postTitle}>{post.title}</h1>
            <p className={styles.postMeta}>
                조회수: {post.views} | 작성일: {post.date}
            </p>
            <div className={styles.postContent}>{post.content}</div>
            <div className={styles.commentSection}>
                <h2>댓글</h2>
                <div className={styles.commentInput}>
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="댓글을 입력하세요"
                    />
                    <button className={styles.button} onClick={handleAddComment}>
                        댓글 달기
                    </button>
                </div>
                <div className={styles.comments}>
                    {comments
                        .filter((comment) => comment.parentId === null)
                        .map((comment) => (
                            <div key={comment.id} className={styles.comment}>
                                <p>{comment.text}</p>
                                <button className={styles.replyButton} onClick={() => handleReply(comment.id)}>
                                    답글 쓰기
                                </button>
                                {replyTo === comment.id && (
                                    <div className={styles.replyInput}>
                                        <input
                                            type="text"
                                            value={newReply}
                                            onChange={(e) => setNewReply(e.target.value)}
                                            placeholder="답글을 입력하세요"
                                        />
                                        <button className={styles.button} onClick={() => handleAddReply(comment.id)}>
                                            답글 달기
                                        </button>
                                    </div>
                                )}
                                {comments
                                    .filter((reply) => reply.parentId === comment.id)
                                    .map((reply) => (
                                        <div key={reply.id} className={styles.reply}>
                                            <p>{reply.text}</p>
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PostDetail;
