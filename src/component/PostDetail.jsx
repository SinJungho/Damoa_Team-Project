import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/PostDetail.module.css';

const PostDetail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const noticeId = searchParams.get('notice_id');
    const navigate = useNavigate();
    const [userNames, setUserNames] = useState({});
    const user_id = localStorage.getItem('user_id');
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [replyTo, setReplyTo] = useState(null);
    const [newReply, setNewReply] = useState('');
    const [commentReplies, setCommentReplies] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        scrollToTop();
        const fetchData = async () => {
            try {
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }

                // Fetching the main post
                const responsePost = await axios.get(`${baseURL}/api/notice_select`, {
                    params: { notice_id: noticeId },
                });
                if (responsePost.data.valid) {
                    if (responsePost.data.data[0].notice_auth === 1) {
                        setPost(responsePost.data.data[0]);
                    } else {
                        setErrorMessage('커뮤니티 글이 아닙니다.');
                    }
                } else {
                    setErrorMessage('Invalid notice ID.');
                }

                // Fetching comments
                const responseComments = await axios.get(`${baseURL}/api/comment_select`, {
                    params: { notice_id: noticeId },
                });
                if (responseComments.data.valid) {
                    const commentsData = responseComments.data.data || [];
                    setComments(commentsData);
                    const userNames = {};

                    // Fetching user names for comments
                    const nameRequests = commentsData.map(async (comment) => {
                        try {
                            const nameResponse = await axios.post(`${baseURL}/api/select_name`, {
                                user_name: comment.user_id,
                            });
                            userNames[comment.user_id] = nameResponse.data.data[0].user_id; // Corrected from user_id to user_name
                        } catch (error) {
                            console.error('Failed to fetch user name:', error);
                        }
                    });
                    await Promise.all(nameRequests);
                    setUserNames(userNames);

                    // Fetching replies for each comment
                    const commentReplies = {};
                    const replyRequests = commentsData.map(async (comment) => {
                        try {
                            const replyResponse = await axios.get(`${baseURL}/api/comment_select_reply`, {
                                params: { cid: comment.cid },
                            });
                            const replies = replyResponse.data.data || [];
                            commentReplies[comment.cid] = replies;

                            // Fetching user names for replies
                            const replyNameRequests = replies.map(async (reply) => {
                                try {
                                    const replyNameResponse = await axios.post(`${baseURL}/api/select_name`, {
                                        user_name: reply.user_id,
                                    });
                                    userNames[reply.user_id] = replyNameResponse.data.data[0].user_id; // Corrected from user_id to user_name
                                } catch (error) {
                                    console.error('Failed to fetch user name for reply:', error);
                                }
                            });
                            await Promise.all(replyNameRequests);
                        } catch (error) {
                            console.error('Failed to fetch comment replies:', error);
                        }
                    });
                    await Promise.all(replyRequests);
                    setUserNames(userNames);
                    setCommentReplies(commentReplies);
                } else {
                    setComments([]);
                }
            } catch (error) {
                setErrorMessage('Failed to fetch data from the server.');
            }
        };

        fetchData();
    }, [noticeId]);

    const handleDelete = async () => {
        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }
            const response = await axios.post(`${baseURL}/api/notice_delete`, {
                review_id: noticeId,
            });
            if (response.status === 200) {
                alert('게시물이 삭제되었습니다.');
                navigate('/community'); // 게시물 삭제 후 메인 페이지로 이동
                scrollToTop();
            } else {
                setErrorMessage('게시물 삭제에 실패했습니다.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스 연결에 실패했습니다.');
        }
    };

    const handleAddComment = async () => {
        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }
            const currentDate = new Date(); // Get the current date and time
            const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
                2,
                '0'
            )}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(
                2,
                '0'
            )}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(
                2,
                '0'
            )}`;

            if (!user_id) {
                // User is not logged in, show warning and navigate away
                alert('로그인 후 사용해주세요.');
                navigate('/');
                return; // Stop further execution
            }
            if (!newComment) {
                // User is not logged in, show warning and navigate away
                alert('내용을 입력해주세요.');
                return; // Stop further execution
            }

            const response = await axios.post(`${baseURL}/api/comment_insert`, {
                notice_id: noticeId,
                comment_detail: newComment,
                user_id: user_id,
                comment_date: formattedDate,
            });

            if (response.data.valid) {
                const newCommentData = {
                    notice_id: noticeId,
                    comment_detail: newComment,
                    user_id: user_id,
                    comment_date: formattedDate,
                };

                setComments([...comments, newCommentData]);
                setNewComment('');
                window.location.reload();
            } else {
                setErrorMessage('Failed to add comment.');
            }
        } catch (error) {
            setErrorMessage('Failed to connect to the server.');
        }
    };

    const handleAddReply = async (parentId) => {
        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }

            const currentDate = new Date();
            const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(
                2,
                '0'
            )}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(
                2,
                '0'
            )}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(
                2,
                '0'
            )}`;

            if (!user_id) {
                // User is not logged in, show warning and navigate away
                alert('로그인 후 사용해주세요.');
                navigate('/');
                return; // Stop further execution
            }
            if (!newReply) {
                // User is not logged in, show warning and navigate away
                alert('내용을 입력해주세요.');
                return; // Stop further execution
            }

            const response = await axios.post(`${baseURL}/api/comment_insert_reply`, {
                cid: parentId,
                comment_detail: newReply,
                user_id: user_id,
                comment_date: formattedDate,
            });

            if (response.data.valid) {
                const newReplyData = {
                    ccid: new Date().getTime(), // or another unique identifier if available
                    cid: parentId,
                    comment_date: formattedDate,
                    user_id: user_id,
                    comment_detail: newReply,
                    valid: true,
                };

                setCommentReplies({
                    ...commentReplies,
                    [parentId]: [...(commentReplies[parentId] || []), newReplyData],
                });

                setNewReply('');
                setReplyTo(null);
                // window.location.reload();
            } else {
                setErrorMessage('Failed to add reply.');
            }
        } catch (error) {
            setErrorMessage('Failed to connect to the server.');
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
                    <div className={styles.postHeader}>
                        <h1 className={styles.postTitle}>{post.notice_name}</h1>
                        {user_id === post.user_name && (
                            <button className={styles.deleteButton} onClick={handleDelete}>
                                삭제하기
                            </button>
                        )}
                    </div>
                    <p className={styles.postMeta}>
                        조회수: {post.notice_views} | 작성일: {new Date(post.notice_date).toLocaleDateString()}
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
                        {comments.map((comment) => (
                            <div key={comment.comment_id} className={styles.comment}>
                                <div className={styles.comment__top}>
                                    <p>
                                        {userNames[comment.user_id]} : {comment.comment_detail}
                                    </p>
                                    <button className={styles.replyButton} onClick={() => handleReply(comment.cid)}>
                                        답글 쓰기
                                    </button>
                                </div>
                                {replyTo === comment.cid && (
                                    <div className={styles.replyInput}>
                                        <input
                                            type="text"
                                            value={newReply}
                                            onChange={(e) => setNewReply(e.target.value)}
                                            placeholder="답글을 입력하세요"
                                        />
                                        <button className={styles.button} onClick={() => handleAddReply(comment.cid)}>
                                            답글 달기
                                        </button>
                                    </div>
                                )}
                                {commentReplies[comment.cid]?.map((reply) => (
                                    <div key={reply.user_id} className={styles.reply}>
                                        <p>
                                            {userNames[reply.user_id]} : {reply.comment_detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PostDetail;
