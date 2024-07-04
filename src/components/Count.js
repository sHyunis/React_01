import {useState} from 'react'

const Count = () => {
    
    const [ count, setCount] = useState(0); 
    // state를 어떻게 사용하는가 생각해보기


  return (
    <div>
        <h1> count : {count} </h1>
        <button onClick={ () => setCount(count + 1) }>
            1씩 증가
        </button>
        <button onClick={ ()=>setCount(count - 1) }>
            1씩 감소
        </button>
    </div>
  )
}

export default Count

// 가상돔 2개 => html
// current, preview => html
