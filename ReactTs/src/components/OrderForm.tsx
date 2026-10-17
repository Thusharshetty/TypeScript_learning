import React, { useState } from "react";


interface OrderFormProps {
    onSubmit(order:{name:string,cups:number}):void;
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
    const [name,setName]=useState<string>("Masala");
    const [cups,setCups]=useState<number>(1);
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,cups});

    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Chai Name</label>
      <input
      value={name}
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
      >
      </input>
       <label>Chai cups</label>
      <input
      value={cups}
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCups(Number(e.target.value))}
      >
      </input>
      <button type="submit">place chai</button>
    </form>
  )
}

export default OrderForm
