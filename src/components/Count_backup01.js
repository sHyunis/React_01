import {useState} from 'react'

//rafce
const Count = () => {
    // let count = 0;
    // state : 화면에 출력해야 할 일이 발생하면 반드시 state를 사용
    // ui를 갱신하고 싶을 때
    
    // const [ count, setCount] = React.useState(); //직접 꺼내쓰거나
    const [ count, setCount] = useState(0); // import 하거나
    // 첫번째 것은 변수 (정확히는 변수가 아니다)
    // 두번째 것은 변수를 수정할 수 있는 함수
    // setCount(1) => 1로 바뀐다.
    // setCount((prevcount)=>{prevcount + 1}) //안에 콜백 함수가 들어있다.

    const increment = ()=>{
        // setCount( prev => prev + 1); // 원래는 이런 모양
        setCount( count + 1); 
        console.log(count);
    }
    const decrement = ()=>{
        // setCount( prev => prev - 1); // 원래는 이런 모양
        setCount( count - 1); 
        console.log(count);
    }

  return (
    <div>
        <h1> count : {count} </h1>
        <button onClick={increment}>
            1씩 증가
        </button>
        <button onClick={decrement}>
            1씩 감소
        </button>
    </div>
  )
}

export default Count

// 가상돔 2개 => html
// current, preview => html
