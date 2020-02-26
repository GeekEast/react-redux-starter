import React, { useEffect } from 'react'
import DataProvider from './DataProvider';
import Comment from './Comment';
import { useDispatch } from 'react-redux';
import { getComments } from 'reducers/comments';

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getComments()) }, [dispatch]);
  return <DataProvider id={"1"} render={(data) => <Comment comment={data}></Comment>}></DataProvider>
}

export default Main
