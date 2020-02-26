import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments, refreshComments, updateComment } from 'reducers/comments'
import { smartStrictEqual } from 'utils/compare';
import { Redirect } from 'react-router-dom';
import { createSelector } from 'utils/reselect';
import _ from 'lodash';
import Comment from './Comment';
import sort from 'fast-sort';
import { creatSmartEqualSelector } from 'selectors';

const memoSwitch = true;
const commentsByIdSelector = createSelector(
  (state: any) => state.comments,
  (comments: any) => comments.entities
)

const commentsSelector = createSelector(
  commentsByIdSelector,
  (commentsById: any) => _.values(commentsById),
)

const commentsForPostOneSelector = memoSwitch ? creatSmartEqualSelector(
  commentsSelector,
  (comments: any) => _.filter(comments, comment => comment.postId === 1)
) : createSelector(
  commentsSelector,
  (comments: any) => _.filter(comments, comment => comment.postId === 1)
)

const commentsSortedForPostOneSelector = memoSwitch ? creatSmartEqualSelector(
  commentsForPostOneSelector,
  (comments: any) => sort(comments).by([
    { asc: (comment: any) => comment.name },
    { desc: (comment: any) => comment.email }
  ])
) : createSelector(
  commentsForPostOneSelector,
  (comments: any) => sort(comments).by([
    { asc: (comment: any) => comment.name },
    { desc: (comment: any) => comment.email }
  ])
)

const commentsSortedIdsForPostOneSelector = memoSwitch ? creatSmartEqualSelector(
  commentsSortedForPostOneSelector,
  (commentsForPostOne: any) => _.map(commentsForPostOne, _.property('id'))
) : createSelector(
  commentsSortedForPostOneSelector,
  (commentsForPostOne: any) => _.map(commentsForPostOne, _.property('id'))
)

const Container = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const post1CommentsIds = useSelector(commentsSortedIdsForPostOneSelector, smartStrictEqual);
  console.log('commentsByIdSelector: ', commentsByIdSelector.recomputations())
  console.log('commentsSelector ', commentsSelector.recomputations())
  console.log('commentsForPostOneSelector: ', commentsForPostOneSelector.recomputations())
  console.log('commentsSortedForPostOneSelector: ', commentsSortedForPostOneSelector.recomputations())
  console.log('commentsSortedIdsForPostOneSelector: ', commentsSortedIdsForPostOneSelector.recomputations())
  console.log('-----------------------------')

  useEffect(() => { dispatch(getComments()) }, [dispatch])

  if (redirect) return <Redirect to='/hoc' />
  return <div>
    <button onClick={() => setRedirect(true)}>Hoc Patterns</button>
    <button onClick={() => dispatch(refreshComments())}>Refresh Store</button>
    <button onClick={() => dispatch(updateComment({ id: 1, name: 'James Updated' }))}>Test Update 1 Item</button>
    {post1CommentsIds && _.map(post1CommentsIds, (id) => <Comment key={id} id={id} />)}
  </div>
}

export default Container
