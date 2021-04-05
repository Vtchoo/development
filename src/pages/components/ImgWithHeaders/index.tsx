import { Img } from '../../../components/Img'
import style from './style.module.css'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'
import { useEffect, useState } from 'react'
 
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

// const url = 'https://raw.githubusercontent.com/Vtchoo/development/master/public/images/cars/chevrolet-corvette.jpg'
const url = 'https://picsum.photos/id/352/3264/2176.jpg'

function PageImgWithHeaders() {
    
    const [imagesLoaded, setImagesLoaded] = useState(true)

    useEffect(() => {
        if(imagesLoaded) return

        const timeout = setTimeout(() => setImagesLoaded(true), 500)

        return () => clearTimeout(timeout)
    }, [imagesLoaded])

    return (
        <div className='page'>
            <h2>Image with http headers</h2>

            <p>When inserting an image into a page, whe usually provide a source link via the src property of the {'<img>'} component. That way, there's no way to specify headers that should be sent to the api, for example, authorization headers.</p>
            <p>The only way to send data with the default img html component is via url, like http://myapi.com/image.jpg?token=12345abc</p>
            <p>This makes it difficult to reach images that are protected by an api behind a route that requires authentication, or any other information that must be passed through the headers of a request.</p>
            <p>However, it is possible to make a dynamic GET request to the api with javascript including custom headers.</p>

            <h4>React solution</h4>
            <p>In this page, I present the component {'<Img />'}, which is basically the same as the {'<img>'} tag, but accepting the <code>headers</code> prop, like {'<Img headers />'}</p>
            <p>The component receives the same props as the default img tag plus the <code>headers</code> props.</p>
            <p>As soon as the component is loaded, the <code>fetchImage</code> function in the <code>useEffect</code> collects the <code>src</code> passed through the props and make a GET request with the headers included in<code>props.headers</code>.</p>
            <p>The body of the request is then read, parsed into a Blob and finally given a link via <code>URL.createObjectURL</code>. The obtained URL is then set to the state variable <code>url</code> and displayed by a default {'<img>'} tag.</p>
            
            <h4>The code:</h4>
            <SyntaxHighlighter language='jsx' style={dracula} wrapLongLines>
                {codeImgWithHeaders}
            </SyntaxHighlighter>
            <p>In this component, it was used the default fetch api, but it's possible to use another library to make the request, such as axios.</p>

            <h4>Example:</h4>
            <p>On the left, there is an image created using {'<img>'} tag, and on the right, with {'<Img headers />'}. The appearence of the images is the same, as expected, of course, but the second one actually sends headers along with the request.</p>
            <p>To check this out, open the browser console (usually pressing F12), and go to network tab. Click the button below to reload the images. You'll see one of the images sends the headers to the remote address.</p>

            <button onClick={() => setImagesLoaded(false)} style={{ justifySelf: 'center' }}>Reload images</button>

            <SyntaxHighlighter language='jsx' style={dracula} wrapLongLines>
                {`const url = '${url}'`}
            </SyntaxHighlighter>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, marginRight: '1rem' }}>
                    <img style={{ width: '100%' }} src={imagesLoaded ? url : ''}></img>
                    <SyntaxHighlighter language='jsx' style={dracula} wrapLongLines>
                        {`<img src={url}></img>`}
                    </SyntaxHighlighter>
                </div>
                <div style={{ flex: 1, }}>
                    <Img style={{ width: '100%' }} src={imagesLoaded ? url : ''} headers={{ 'X-Custom-Header': 'value123' }} />
                    <SyntaxHighlighter language='jsx' style={dracula} wrapLongLines>
                        {`<Img src={url} headers={{ 'X-Custom-Header': 'value123' }}></Img>`}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
    )
}

const codeImgWithHeaders =
`interface ImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    headers?: { [header: string]: string }
}

function Img(props: ImgProps) {
    
    const { src, headers, ...rest } = props
    const [url, setUrl] = useState('')

    // The component needs to watch for changes on src
    useEffect(() => { fetchImage() }, [src])    

    async function fetchImage() {
        try {
            const data = await fetch(src, { headers })
            const blob = await data.blob()
            const url = URL.createObjectURL(blob)
            setUrl(url)
        } catch (error) {
            console.log(error)
        }
    }
    return <img src={url} {...rest} />
}
`

export default PageImgWithHeaders