import { useEffect, useState } from "react"
import { Block } from "../../../components/Blockchain"

interface IBlock {
    data: string | object
    blockHash: string
}

function PageBlockchain() {

    const generateInitialBlocks = () => {

        const initialBlocks: IBlock[] = [
            {
                data: {
                    transactions: [
                        { from: 'John', to: 'Lisa', amount: (1.1 + Math.random()).toFixed(3) },
                        { from: 'Leo', to: 'John', amount: (1.25 + Math.random()).toFixed(3)  }
                    ],
                    reward: { to: 'Me', amount: 0.5 }
                },
                blockHash: ''
            },
            {
                data: {
                    transactions: [
                        { from: 'Lisa', to: 'Kate', amount: (2 + Math.random()).toFixed(3)  },
                        { from: 'John', to: 'Bryan', amount: (3.2 * Math.random()).toFixed(3)  }
                    ],
                    reward: { to: 'Me', amount: 0.5 }
                },
                blockHash: ''
            },
            {
                data: {
                    transactions: [
                        { from: 'Matthew', to: 'Saul', amount: (1.5 * Math.random()).toFixed(3)  },
                        { from: 'Lisa', to: 'Bryan', amount: (3 * Math.random()).toFixed(3)  }
                    ],
                    reward: { to: 'Me', amount: 0.5 }
                },
                blockHash: ''
            },
        ]
    
        return initialBlocks
    }

    const [blocks, setBlocks] = useState<IBlock[]>([])

    const [difficulty, setDifficulty] = useState(3)

    useEffect(() => {
        setBlocks(generateInitialBlocks())
    }, [])

    function handleHashChange(index: number, hash: string) {

        const newBlocks = [...blocks]
        newBlocks[index].blockHash = hash
        setBlocks(newBlocks)
    }

    return (
        <div className='page'>
            <h2>Blockchain</h2>

            {blocks.map((block, i) =>
                <Block
                    genesis={i === 0}
                    previousHash={blocks[i - 1]?.blockHash}
                    data={block.data}
                    difficulty={difficulty}
                    onHashChange={hash => handleHashChange(i, hash)}
                />
            )}
        </div>
    )
}

export default PageBlockchain