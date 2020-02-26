import React from 'react'
import { useSelector } from 'react-redux';
import _ from 'lodash';
import Comment from './Comment';
const Container = ({id}) => {
  const comment = useSelector((state: any) => _.get(state, ['comments', 'entities', id]))
  return <Comment comment={comment}></Comment>
}

export default Container
