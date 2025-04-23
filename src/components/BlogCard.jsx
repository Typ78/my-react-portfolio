export default function BlogCard({date, month, title, description, imageUrl}){
    return(

        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-[6px_6px_10px_rgba(255,255,255,0.4)] hover:shadow-[10px_10px_10px_rgba(255,255,255,0.6)]">
             <img src={imageUrl} alt="Blog illustration" className="w-full" />
             <div className=" flex flex-col mb-4">
                        <div className="bg-white text-black rounded-full mt-4 ml-4 px-3 py-1 text-sm font-semibold mr-2 w-fit">
                            <span>{date}</span>
                            <span>{month}</span>
                        </div>
                        
                    <h2 className="text-xl text-white font-semibold mt-2 ml-4">{title}</h2>
                    <p className="text-gray-400 mt-4 font-semibold ml-4 pr-4">{description}</p>
                    <a href="#" className="text-red-500 font-semibold mt-4 ml-4 underline pb-3">READ MORE</a>
                </div>
                
            
        
           
    </div>
    
    )
}