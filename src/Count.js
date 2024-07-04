const Count = () =>{

    let count = 0;

    return (
        <button onClick={()=>console.log('count : ', ++count)}>click</button>
    )
}

export default Count;