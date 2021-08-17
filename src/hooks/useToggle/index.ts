import { useCallback, useState } from 'react'

function useToggle(value1 = true, value2 = false) {

    const [state, setState] = useState(value1)

    const toggle = useCallback(() => {
        setState(prevState => {
            return prevState === value1 ? value2 : value1
        })
    }, [value1, value2])

    return [state, toggle]
}

export { useToggle }
