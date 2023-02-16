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
    <div className='containerQ2 spaceGap'>
      <CountNumber numbers={numbers} active={active} />
      <div className='spaceGap'>
        <h1>
          How do you brew at home?
        </h1>
      </div>
      <div className='spaceGap'>
        <BlockCards setActive={setActive} />
      </div>
      <div className='spaceGap bottomContainer row'>
        <div className='col-1 float-left' onClick={() => {
          navigate("/");
        }}>
          <p className='back'> {'<'} Back</p>
        </div>
        <div className='col-10 '>
          {active != null ? <>
            <Button variant="dark" onClick={() => {
              navigate("/results");
            }}>Continue</Button>
          </> : null}
        </div>
        <div className='col-1 float-right'>
          <p className='why'>Why it matters   +</p>
        </div>

      </div>
    </div>
  )
}

export default Q2