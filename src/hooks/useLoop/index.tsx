import { useEffect } from "react"

function useLoop(func: () => void, interval: number, dependencies: any[]) {

    useEffect(() => {
        const loop = setInterval(func, interval)

        return () => clearInterval(loop)
    }, [...dependencies])
}

export { useLoop }