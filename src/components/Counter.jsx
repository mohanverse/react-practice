import { useState } from "react"

const Counter = () => {
    const [Count, setCount] = useState(5)
  return (
    <>
    <h1 style={{color: "#FFF"}}> Counter value - {Count}</h1>
    <button onClick={() => setCount(0)}>reset Counter</button>
    <button onClick={() => setCount( Count + 1 )}>increase Counter</button>
    <button onClick={() => setCount( Count - 1 )}>decrease Counter</button>
    </>
  )
}

export default Counter
