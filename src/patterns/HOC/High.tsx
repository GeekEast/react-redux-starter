import React, { useState ,useEffect} from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import Comment from './Comment';
import { useDispatch } from 'react-redux';
import { getComments } from 'reducers/comments';

const High = () => {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getComments()) }, [dispatch])
  if (redirect) return <Redirect to='/compositecontainer'/>
  return (
    <>
    <button onClick={() => {history.push('/compositecontainer')}}>Push Container Patterns</button>
    <button onClick={() => setRedirect(true)}>Redirect Container Patterns</button>
    <Comment id={1}></Comment>
    </>
  )
}

export default High
