import { ImgHTMLAttributes, useEffect, useState } from "react"

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement>{
    onDownloadProgress?: (e: ProgressEvent) => void
    background?: boolean
}

// https://stackoverflow.com/questions/52915486/load-image-from-server-that-requires-sending-headers

interface Img2Props extends ImgProps{
    headers: { [header: string]: string }
}

function ImgWithHeaders(props: Img2Props) {
    
    const { src, headers, background, children, ...rest } = props

    const [url, setUrl] = useState('')

    useEffect(() => { fetchImage() }, [])    

    async function fetchImage() {

        try {
            if (!src) return

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

export { ImgWithHeaders }