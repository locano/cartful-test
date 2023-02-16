import React from 'react'
import './barista.scss'
import pretty from '../../assets/barista-transition/pretty.svg'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

function Barista() {
  const navigate = useNavigate();
  return (
    <div className='containerBarista'>
      <img src={pretty} alt="icon"></img>
      <h1 className='text1 pt-4 pb-4'>We’ll find coffee that’s on your level.</h1>
      <Button variant="secondary" onClick={() => {
        navigate("/q2");
      }}>Next Page</Button>
    </div>
  )
}

export default Barista