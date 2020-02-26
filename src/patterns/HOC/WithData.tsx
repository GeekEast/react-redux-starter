import React from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';

const WithData = (Comment) => {
  const CommentWithData = ({ id }: any) => {
    const comment = useSelector((state: any) => _.get(state, ['comments', 'entities', id]));
    return (<Comment comment={comment}></Comment>)
  }
  return CommentWithData
}

export default WithData;
