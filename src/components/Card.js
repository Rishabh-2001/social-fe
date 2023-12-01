
const Card = ({data}) => {
    
    return ( 
        <div className="flex-col border-r-2 pr-8  ">
        <p className="md:text-4xl text-2xl text-[#006064] font-bold mb-1">+200M</p>
        <div className="flex">
            <img src={data?.url} alt={data?.alt} width="20px"></img>
            <span className="ml-1 font-medium text-lg">{data?.text}</span>
        </div>
    </div>
     );
}
 
export default Card;