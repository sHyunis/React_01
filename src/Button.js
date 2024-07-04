const Button = () =>{

    let count = 0;

    const clickHandle = () => {
        // console.log('no params click');
        console.log('click', ++count);
      }
    
    return (
        <button onClick={clickHandle}>click</button>
    )
}

export default Button;