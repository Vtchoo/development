import { useEffect, useState } from "react"
import { useDebounce, useDebouncedValue } from "../../../hooks/useDebounce"
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'
 
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('typescript', typescript)

function PageUseDebounce() {
    
    const [searchTerm1, setSearchTerm1] = useState('')
    const [searchTerm2, setSearchTerm2] = useState('')

    const [result1, setResult1] = useState('')
    const [result2, setResult2] = useState('')

    const debouncedValue = useDebouncedValue(searchTerm2, 2000)

    useDebounce(() => {
        console.log(searchTerm1)
        setResult1(searchTerm1)
    }, [searchTerm1], 2000)

    useEffect(() => {
        console.log(searchTerm2)
        setResult2(debouncedValue)
    }, [debouncedValue])

    return (
        <div className='page'>
            <h2>Use debounce</h2>

            <p>When an user is typing a search term, or an username to make a new profile with, it's common to make a request to the api to return the search result automatically, or check whether the user already exists or not.</p>
            <p>But this can eascily become a heavy load on the backend, as the request is made each time the user types a letter. If the search results has a lot of data, it can rapidly waste the user's data plan and traffic limits of your api host provider.</p>
            <p>Ideally, you want the request to be made after the user stops typing the desired search term. This can be made using debounce functions.</p>
            
            <h4>Debounce the api calls</h4>
            <p>In order to debounce the api calls, we can start a timer that resets when the user types another letter, and executes the function after the specified since the last reset.</p>

            <h4>In React</h4>
            <p>Debouncing a function is possible using a custom hook, that we'll call <code>useDebounce</code>. It takes a function to be debounced as first parameter, the values we want to watch to check if they have been changed (the search term or username, for example) and, as last parameter, the desired delay in milisseconds.</p>
            <p>As an alternative, we can change a state variable after a desired delay. This can be done with a very similiar hook we'll call <code>useDebouncedValue</code>. The debounced value can be watched on another <code>useEffect</code> hook and execute a function when it changes.</p>
        
            <h4>The code:</h4>
            <SyntaxHighlighter language='typescript' style={dracula} wrapLongLines>
                {codeComponentUseDebounce}
            </SyntaxHighlighter>
            
            <h4>Examples</h4>

            <div style={{ display: 'flex', maxWidth: '100%' }}>
                <div style={{ flex: 1, marginRight: '1rem' }}>
                    <h5>useDebounce</h5>

                    <SyntaxHighlighter language='typescript' style={dracula} wrapLongLines>
                        {codeUseDebounce}
                    </SyntaxHighlighter>

                    <input value={searchTerm1} onChange={e => setSearchTerm1(e.target.value)} />
                    <p>Value of <code>searchTerm</code>: {searchTerm1}</p>
                    <p>Result: {result1}</p>
                </div>
                <div style={{ flex: 1 }}>
                    <h5>useDebouncedValue</h5>

                    <SyntaxHighlighter language='typescript' style={dracula} wrapLongLines>
                        {codeUseDebouncedValue}
                    </SyntaxHighlighter>

                    <input value={searchTerm2} onChange={e => setSearchTerm2(e.target.value)}/>
                    <p>Value of <code>debouncedValue</code>: {debouncedValue}</p>
                    <p>Result: {result2}</p>
                </div>
            </div>
        </div>
    )
}

const codeComponentUseDebounce =
`function useDebounce(func: () => void, dependencies: any[], delay: number) {

    useEffect(() => {
        const timeout = setTimeout(func, delay)
        return () => clearTimeout(timeout)
    }, [delay, ...dependencies])
}

function useDebouncedValue<T>(value: T, delay: number) {

    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(handler);
    }, [value, delay])
    
    return debouncedValue
}`

const codeUseDebounce =
`const [searchTerm, setSearchTerm] = useState('')
const [result, setResult] = useState('')

useDebounce(() => {
    console.log(searchTerm)
    setResult(searchTerm)
}, [searchTerm], 2000)`

const codeUseDebouncedValue =
`const [searchTerm, setSearchTerm] = useState('')
const [result, setResult] = useState('')
const debouncedValue = useDebouncedValue(searchTerm, 2000)

useEffect(() => {
    console.log(searchTerm)
    setResult(debouncedValue)
}, [debouncedValue])`

export default PageUseDebounce