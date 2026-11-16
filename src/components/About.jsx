


export default function About(){

    return(

        <section id="about" className="px-auto mt-44">
            <div className="flex flex-col md:flex-row gap-14 md-gap-18 max-w-7xl mx-auto">

                {/* left side:Main image*/}
                <div>
                    <img src="/assets/about.png" alt="Dish" className="max-w-7xl w-full h-full object-cover rounded-3xl "/>
                </div>





                {/*right side: contents details */}

                <div>
                    <div className="flex item-center  gap-2">
                        <img src="/assets/iconL.png" alt="iconleft" />
                        <span className="font-mediun uppercase">Crafted With Passion</span>
                        <img src="/assets/iconR.png" alt="iconright" />


                    </div>

                      <div >
                            <h2 className="mt-5 text-4xl md:text-5xl text-balance">Experience dining beyond expectations </h2>
                             <p className="mt-4.5 text-zinc-600 max-w-sm">We combine fresh local ingredients, creative recipes and elegant presentation to deliver a memorable experience with every visit.</p>
                      </div>



                     <div className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex item-center gap-3 w-fit">

                           <img src="/assets/about.png" alt="Location" className="size-15 rounded-lg object-cover shrink-0" />

                           <div className="flex flex-col gap-2">
                               <p className="font-medium">Bistro Royale Location, NY</p>
                               <a href="#">View on Map</a>
                           </div>



                     </div>

                </div>

  
              



            </div>
        
        </section>

    )

}