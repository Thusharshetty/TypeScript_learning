 

interface ChaiCardProps{
    name: string;
    price: number;
    isSpecial?: boolean;
}

function ChaiCard({name,price,isSpecial=false}: ChaiCardProps) {
  return (
    <div>
        <h2>{name} {isSpecial && <span>🌟</span>}</h2>
        <p>Price: ${price}</p>
      
    </div>
  )
}

export default ChaiCard
