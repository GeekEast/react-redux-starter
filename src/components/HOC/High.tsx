import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom';

const High = () => {
  const [redirect, setRedirect] = useState(false);
  const history = useHistory();
  if (redirect) return <Redirect to='/container'/>
  return (
    <>
    <button onClick={() => {history.push('/container')}}>Push Container Patterns</button>
    <button onClick={() => setRedirect(true)}>Redirect Container Patterns</button>
    </>
  )
}

export default High
