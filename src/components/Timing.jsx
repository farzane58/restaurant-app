
import { timingData } from "../data/data"

 export default function Timing(){
    return(
        <section id="timing" className="px-auto mt-44">

           <div    className='relative w-full max-x-5xl h-162 rounded-3xl md:px-14 overflow-hidden mx-auto'>

                    <img src="/assets/restro-timing.png" alt="Restaurant Timing" className="absolute inset-0 w-full h-full object-cover z-0" />
                
           
            
                <div className="relative   z-10  bg-white/90  rounded-3xl p-8 w-full max-w-xs mt-16">
                        <div className="mb-8">
                            <h3 className="text-xl mb-8 font-medium">Opening time:</h3>


                        </div>
                        <div className="space-y-7">
                            {timingData.map((item)=>(
                                <div key={item.id} className="flex justify-between items-center">


                                    <span className="font-medium text-zinc-500 ">{item.day}</span>
                                    <span className={'font-medium ${item.hours === "closed"? "text-zinc-400" : "text-zinc-500"}'}>{item.hours}</span>

                                </div>

                            ))}

                        </div>
                        <div className="mt-12 flex justify-center">
           <a href="#bookingprocess" className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition">Book a table</a>
                        </div>
                    </div>

                     </div>

             </section>

    )
}