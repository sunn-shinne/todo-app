import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h2>Страница Информации</h2>
            <p className='flow-text'>Это приложение сделано с помощью ReactJS, TypeScript и CSS3.</p>
            <button className='btn pink darken-4' onClick={() => history.push('/')}>Обратно к списку дел</button>
        </>
    )
}