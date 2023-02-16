import React, { useState } from 'react'
import './blockCards.scss'
import aeropress from '../../assets/q2/aeropress.svg'
import coffe from '../../assets/q2/coffe.svg'
import espresso from '../../assets/q2/espresso.svg'
import french from '../../assets/q2/french.svg'
import pods from '../../assets/q2/pods.svg'
import pour from '../../assets/q2/pour.svg'
import moka from '../../assets/q2/moka.svg'


function BlockCards({ setActive }) {
    const cards = [
        {
            image: coffe,
            title: 'Coffee Maker',
            bgColor: '#EEB426',
            rotation: 'rotate(-12deg)',
            translate: 'translate(-5px, 55px)'
        },
        {
            image: french,
            title: 'French Press',
            bgColor: '#9CAF96',
            rotation: 'rotate(-8deg)',
            translate: 'translate(0, 25px)'
        },
        {
            image: pour,
            title: 'Pour Over',
            bgColor: '#D4A1A6',
            rotation: 'rotate(-4deg)',
            translate: 'translate(0, 5px)'
        },
        {
            image: aeropress,
            title: 'AeroPress',
            bgColor: '#DA8464',
            rotation: 'rotate(0deg)'
        },
        {
            image: espresso,
            title: 'Espresso',
            bgColor: '#A9C9E1',
            rotation: 'rotate(4deg)',
            translate: 'translate(0, 5px)'
        },
        {
            image: pods,
            title: 'Pods',
            bgColor: '#C47D30',
            rotation: 'rotate(8deg)',
            translate: 'translate(0, 25px)'
        },
        {
            image: moka,
            title: 'Moka Pot',
            bgColor: '#D2C6C3',
            rotation: 'rotate(12deg)',
            translate: 'translate(5px, 55px)'
        }
    ]
    const [selectedCard, setSelectedCard] = useState(null);

    function handleSelectedCard(index) {
        if (selectedCard === index) {
            setActive(null)
            return setSelectedCard(null)
        }

        setSelectedCard(index)
        setActive(0)
    }

    return (
        <div className='blockContainer'>
            {cards.map((card, index) => {
                return (
                    <div className='cardContainer' id={`card-${index}`} style={{ backgroundColor: `${selectedCard ? (selectedCard === index ? card.bgColor : '#E9E4DB') : `${card.bgColor}`}`, transform: `${card.rotation} ${card.translate}` }}
                        onClick={() => { handleSelectedCard(index) }}>
                        <div className='cardImage'>
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className='cardTitle'>
                            {card.title}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default BlockCards