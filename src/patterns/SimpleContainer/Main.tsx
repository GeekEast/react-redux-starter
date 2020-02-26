import React from 'react'
import Container from './Container';
import { useGetComments } from 'hooks/useGetComments';

const Main = () => {
  const x = useGetComments();
  console.log(x);
  return (
    <Container id={"1"}></Container>
  )
}

export default Main
