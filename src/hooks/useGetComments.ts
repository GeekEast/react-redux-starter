import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getComments } from '../reducers/comments';

export const useGetComments = () => {
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getComments()) }, [dispatch]);
  return null;
}

