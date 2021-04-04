// https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/prism.html

import { ReactNode, useEffect, useState } from 'react'

interface ExpireProps {
    children: ReactNode
    time?: number
    seconds?: number
}

function Expire(props: ExpireProps) {

    const { time, seconds, children, ...rest } = props

    const [component, setComponent] = useState(props.children)

    useEffect(() => {

        if(!(time || seconds)) return

        const expireTimeout = setTimeout(() => {
            setComponent(null)
        }, time || (seconds || 0) * 1000)

        return () => clearTimeout(expireTimeout)
    }, [])

    return <>{component}</>
}

export default Expire