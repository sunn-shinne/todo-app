import React, {useRef, useState} from 'react'

type PropsType = {
    onAdd: (str: string) => void
}

export const ToDoForm: React.FC<PropsType> = (props) => {
    const placeholders: string[] = [
        'Купить чего-нибудь сладенького',
        'Посмотреть на звёзды',
        'Погладить кота',
        'Вздремнуть',
        'Заняться йогой',
        'Выйти на пробежку',
        'Пересмотреть все серии Игры престолов',
        'Сделать перестановку в комнате',
        'Начать вести свой блог',
        'Принять ванну с пеной',
        'Позвонить маме',
        'Научиться медитации',
        'Приготовить лазанью',
        'Заказать суши',
    ]

    const getRandomPlaceholder = (items: string[]): string => {
        return items[Math.floor(Math.random()*items.length)]
    }

    const [title, setTitle] = useState<string>('')
    // const ref = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
            // ref.current!.value = ''
        }
    }

    return (
        <div className={'input-field mt2'}>
            <input
                onChange={changeHandler}
                value={title}
                // ref={ref}
                type={'text'}
                id={'title'}
                placeholder={getRandomPlaceholder(placeholders)}
                onKeyPress={keyPressHandler}/>
            <label htmlFor={'title'} className={'active'}>Введите название задачи</label>
        </div>
    )
}