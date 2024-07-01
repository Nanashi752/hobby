import React from 'react'
import Card from './Card'
import cardicon1 from '../assets/cardicon1.png'

function CardHolder() {

    const data = [
        {
            icons: cardicon1,
            name: 'people',
            content: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
            button: 'connect'
        },
        {
            icons: cardicon1,
            name: 'people',
            content: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
            button: 'connect'
        },
        {
            icons: cardicon1,
            name: 'people',
            content: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
            button: 'connect'
        },
        {
            icons: cardicon1,
            name: 'people',
            content: 'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
            button: 'connect'
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:py-20 py-10 md:px-40 px-20'>
            {data.map((item, index) => (
                <Card
                    key={index}
                    icon={item.icons}
                    name={item.name}
                    content={item.content}
                    btName={item.button}
                />
            ))}
        </div>
    )
}

export default CardHolder
