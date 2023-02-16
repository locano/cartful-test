import React, { useEffect } from 'react'
import CountNumber from '../countNumbers/countNumber'
import BlockCards from '../blockCards/blockCards'
import './q2.scss'
import { Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";



function Q2() {
  const navigate = useNavigate();

  const nvalues = [
    {
      value: 1,
      active: true
    },
    {
      value: 2,
      active: false
    },
    {
      value: 3,
      active: false
    },
    {
      value: 4,
      active: false
    },
    {
      value: 5,
      active: false
    },
    {
      value: 6,
      active: false
    }]
  const [active, setActive] = React.useState(null)

  const [numbers, setNumbers] = React.useState(nvalues)

  useEffect(() => {
    if (active != null) {
      numbers[0].active = false;
      numbers[1].active = true;
      setNumbers([...numbers])
    } else {
      numbers[0].active = true;
      numbers[1].active = false;
      setNumbers([...numbers])

    }
  }, [active])

  return (
    <div className='containerQ2'>
      <div className='pt-5'>
        <CountNumber numbers={numbers} active={active} />
      </div>
      <div className='pt-5'>
        <h1 className='textTitle'>
          HOW DO YOU BREW AT HOME?
        </h1>
      </div>
      <div className='pt-5'>
        <BlockCards setActive={setActive} />
      </div>
      <div className=' bottomContainer'>
        <div className='float-left' onClick={() => {
          navigate("/");
        }}>
          <p className='back'> {'<'} Back</p>
        </div>
        <div >
          {active != null ? <>
            <Button variant="dark" onClick={() => {
              navigate("/results");
            }}>Continue</Button>
          </> : null}
        </div>
        <div className='float-right'>
          <p className='why'>Why it matters   +</p>
        </div>

      </div>
    </div>
  )
}

export default Q2