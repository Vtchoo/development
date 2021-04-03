import { Img } from '../../../components/Img'
import style from './style.module.css'

function PageImgWithHeaders() {
    
    return (
        <div className={style.page}>
            <h2>Image with http headers</h2>

            <p>When inserting an image into a page, whe usually provide a source link via the src property of the {'<img>'} component. That way, there's no way to specify headers that should be sent to the api, for example, authorization headers.</p>
            <p>The only way to send data with the default img html component is via url, like http://myapi.com/image.jpg?token=12345abc</p>
            <p>However, its is possible to make a dynamic GET request to the api with javascript including custom headers.</p>

            <h4>React solution</h4>
            <p>In this page, I present the component {'<Img />'}, which is basically the same as the {'<img>'} tag, but accepting the <code>headers</code> prop, like {'<Img headers />'}</p>
        
            <h4>The code:</h4>
            <p><code>work in progress</code></p>

            <h4>Example:</h4>
            <p>On the left, there is an image created using {'<img>'} tag, and on the right, with {'<Img headers />'}. The appearence of the images is the same, but the second one actually sends headers along with the request.</p>
            <p>To check this out, open the browser console (usually pressing F12), and go to network tab. You may need to refresh the page to see the requests. One of the images sends the headers to the remote address.</p>

            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    <img style={{ width: '100%' }} src='https://raw.githubusercontent.com/Vtchoo/development/master/public/images/cars/chevrolet-corvette.jpg'></img>
                </div>
                <div style={{ flex: 1 }}>
                    <Img style={{ width: '100%' }} src='https://raw.githubusercontent.com/Vtchoo/development/master/public/images/cars/chevrolet-corvette.jpg' headers={{ 'X-Custom-Header': 'value123' }} />
                </div>
            </div>
        </div>
    )
}

export default PageImgWithHeaders