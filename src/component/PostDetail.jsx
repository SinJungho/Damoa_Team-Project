import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/PostDetail.module.css';

const PostDetail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const noticeId = searchParams.get('notice_id');
    
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [newReply, setNewReply] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }
                const response = await axios.get(`${baseURL}/api/notice_select`, {
                    params: { notice_id: noticeId },
                });
                if (response.data.valid) {
                    if (response.data.data[0].notice_auth === 1) {
                        setPost(response.data.data[0]);
                    } else {
                        setErrorMessage('커뮤니티 글이 아닙니다.');
                    }
                } else {
                    setErrorMessage('Invalid notice ID.');
                }
            } catch (error) {
                setErrorMessage('Failed to connect to the database.');
            }
        };

        fetchData();
    }, [noticeId]);

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
            {errorMessage ? (
                <p className={styles.errorMessage}>{errorMessage}</p>
            ) : (
                <>
                    <h1 className={styles.postTitle}>{post.notice_name}</h1>
                    <p className={styles.postMeta}>
                        조회수: {post.notice_views/2} | 작성일: {new Date(post.notice_date).toLocaleDateString()}
                    </p>
                    <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.notice_detail }} />
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
                </>
            )}
        </div>
    );
};

export default PostDetail;
