import crypto from 'crypto'
import { useEffect, useState } from 'react'
import style from './style.module.css'

interface BlockProps {
    genesis?: boolean
    previousHash?: string
    data: string | object
    difficulty: number
    onHashChange?(hash: string): void
}

function Block(props: BlockProps) {

    const { genesis, previousHash, data, difficulty, onHashChange } = props
    
    const [nonce, setNonce] = useState(0)
    const [blockHash, setBlockHash] = useState('')
    const [resolved, setResolved] = useState(false)

    useEffect(() => {

        if (resolved)
            return
            
        const prevHash = previousHash || ''
            
        if (!prevHash.startsWith('0'.repeat(difficulty)) && !genesis)
            return
            
        setResolved(false)

        const blockString = prevHash + JSON.stringify(data) + nonce

        const hash = crypto.createHash('sha256').update(blockString).digest('hex')

        setBlockHash(hash)
        onHashChange?.(hash)

        if (hash.startsWith('0'.repeat(difficulty))) {
            setResolved(true)
        } else {
            setNonce(nonce + 1)
        }

    }, [previousHash, nonce, difficulty, data])

    return (
        <div className={`${style.blockContainer} ${resolved ? style.resolved : ''}`}>
            <h4>Block</h4>
             
            {genesis ?
                <span>Genesis block (the first one)</span>
                :
                <span>Previous block hash: {previousHash}</span>
            }
        
            <div>
                <span>Data: {typeof data === 'string' ? data : JSON.stringify(data)}</span>
            </div>
                
            <div>
                <span>Nonce: {nonce}</span>
            </div>
                
            <div>
                <span>Block hash: {blockHash}</span>
            </div>
            
        </div>
    )
}

export { Block }