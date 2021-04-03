import { useEffect, useState } from "react"

function useDebouncedValue<T>(value: T, delay: number) {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)
  
        return () => {
            clearTimeout(handler);
        }

    }, [value, delay])
    
    return debouncedValue
}

function useDebounce(func: () => void, dependencies: any[], delay: number) {

    useEffect(() => {

        const timeout = setTimeout(func, delay)

        return () => clearTimeout(timeout)

    }, [delay, ...dependencies])
}

export { useDebounce, useDebouncedValue }