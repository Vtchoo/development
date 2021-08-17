import { useEffect, useState } from 'react'

function useFetch(url: string, options: RequestInit = {}) {

    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, options)
            .then(async response => {
                const json = await response.json()
                setValue(json)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [url])

    return { isLoading, value, error }
}

export { useFetch }