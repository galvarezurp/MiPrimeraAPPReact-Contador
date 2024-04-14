import { useState } from "react"

export const Counter = () => {

    const [count,setCount] =useState<number>(10);
    const increaseBy =(value:number)=>{
        setCount(count+value);
    };

  return (
    <>
        <div>
          <img src="../assets/typescript-cover.jpg" alt="" />
        </div>
        <h3>Contador: <small>{count}</small></h3>

        <div>
            <button style={{backgroundColor:'green'}} onClick={()=>increaseBy(+1)}>+1</button>

            &nbsp;
            <button style={{backgroundColor:'red'}} onClick={()=>increaseBy(-1)}>-1</button>
        </div>
    </>
  )
}

