
import {dishes} from '../data/data'
export default function Dishes(){

    return(

        <section id="dishes" className="px-auto mt-44">
            <div className="text-center mb-16">
                <p className="text-orange-500 font-medium uppercase mb-3.5">

                    Chef's Signature Selection


                </p>
                <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
                    Discover our  signature dishes
                </h2>


            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto">
                {dishes.map((item)=>(<div key={item.id} className='flex flex-col items-center text-center shrink-0 cursor-pointer'>
                    <img src={item.img} alt={item.title} className='size-30 md:size-35 object-cover'/>
                    <h3 className='mt-5'>{item.title}</h3>
                    <p className='mt-2 text-zinc-600'>{item.price}</p>


                </div>))}



            </div>




        </section>







    )







}