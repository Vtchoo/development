import { ImgHTMLAttributes, useEffect, useState } from "react"

// https://stackoverflow.com/questions/52915486/load-image-from-server-that-requires-sending-headers

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement>{
    onDownloadProgress?: (e: ProgressEvent) => void
    background?: boolean
    headers?: { [header: string]: string }
}

function Img(props: ImgProps) {
    
    const { src, headers, background, children, ...rest } = props

    const [url, setUrl] = useState('')

    useEffect(() => { fetchImage() }, [src])    

    async function fetchImage() {

        try {
            if (!src) return

            // const headers = new Headers()
            // if(props.headers)    
            //     Object.entries(props.headers).map(([name, value]) => headers.append(name, value))

            const data = await fetch(src, { headers })
            const blob = await data.blob()
            const url = URL.createObjectURL(blob)

            setUrl(url)
            
        } catch (error) {
            console.log(error)
        }
    }

    if (background) return (
        <div style={{ backgroundImage: url }} {...rest}>
            {children}
        </div>
    )

    return (
        <img src={url} {...rest} />
    )
}

export { Img }