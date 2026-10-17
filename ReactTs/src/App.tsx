import ChaiCard from "./components/ChaiCard.tsx"
import ChaiList from "./components/ChaiList.tsx"
import Counter from "./components/Counter.tsx"
import OrderForm from "./components/OrderForm.tsx"
import type { Chai } from "./types.ts"

const menu: Chai[] = [
  { id: 1, name: "Green Tea", price: 2.99 },
  { id: 2, name: "Black Tea", price: 3.49 },
  { id: 3, name: "Herbal Tea", price: 4.29 },
]


function App() {

  return (
    <>
     <h1>Hello, React!</h1>
     <ChaiCard name="Green Tea" price={2.99} />
     <ChaiCard name="Black Tea" price={3.49} isSpecial={true} />
     <Counter/>
     <ChaiList chaiList={menu}/>
     <OrderForm onSubmit={(order)=>{
      console.log("placed",order.name)
     }}/>
    </>
  )
}

export default App
