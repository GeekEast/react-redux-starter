import React from 'react'
import { useGetComments } from '../../hooks/useGetComments';
import Comment from './Comment';
const Main = () => {
  useGetComments();

  return (
    <Comment id={"1"}></Comment>
  )
}

export default Main
