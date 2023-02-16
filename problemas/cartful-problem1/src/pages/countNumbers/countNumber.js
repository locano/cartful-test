import React from 'react'
import './countNumber.scss'
function CountNumber({ numbers, active }) {
    return (
        <div className='containerNumbers'>
            {numbers.map((number, index) => {

                return (
                    <div className={number.active ? 'number numberActive' : 'number numberInactive'} style={ index === active ? {backgroundColor: "black", color:"white"} : {}}>
                        {number.value}
                    </div>
                )
            })}
        </div>
    )
}

export default CountNumber