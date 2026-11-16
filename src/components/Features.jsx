import { featuresData } from "../data/data"
import { ChefHat,Leaf,Heart} from 'lucide-react'
const iconMap={
    ChefHat,
    Leaf,
    Heart



}

export default function Features(){

    return(
        <section id="features" className="px-auto mt-44">

            <div className="text-center mb-16">
                <p className="text-orange-500 font-medium uppercase mb-3.5">

                    What Sets Us Apart


                </p>
                <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
                    Crafting memorable dining experiences
                </h2>


            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto">
                
                    <div className="space-y-10 max-w-md">
                    
                                    {featuresData.map((item)=>{

                                        const IconComponent=iconMap[item.icon]
                                        return(
                                        
                                        <div key={item.id} className="flex flex-start gap-4 text-left">
                                        {IconComponent &&(<IconComponent   className='text-orange-500 size-5 shrink-0 mt-0.5 '/>)}
                                    <div>

                                          <h3 className="mb-2 text-xl">{item.title}</h3>
                                          <p className=" text-zinc-600 max-w-sm ">{item.description}</p>


                                    </div>
                                      
                    
                    
                    
                    
                    
                                    </div>
                                    )
                                
                                })}
                                    
                    
                    
                    
                    
                    
                    
                    
                    
                    </div>


                

                <div>

                    <img src="assets/chef.png" alt="chef" className="w-full max-w-sm h-111 object-cover rounded-3xl" />



                </div>



            </div>






        </section>








    )

}