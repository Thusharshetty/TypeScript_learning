import type { Chai } from "../types"
import ChaiCard from "./ChaiCard"


interface ChaiListProps{
    chaiList: Chai[];
}

const ChaiList = ({ chaiList }: ChaiListProps) => {
  return (
    <div>
      {chaiList.map(chai=>(
        <ChaiCard key={chai.id} name={chai.name} price={chai.price} isSpecial={chai.price > 3.5} />
      ))}
    </div>
  )
}

export default ChaiList
