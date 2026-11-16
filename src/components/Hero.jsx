import {Star} from 'lucide-react'
const avatars=[
    '/assets/user-1.jpeg',
    '/assets/user-2.jpeg',
    '/assets/user-3.jpeg',
    '/assets/user-4.jpeg'



]

export default function Hero(){


    return(

        <section className="flex flex-col items-center min-h-screen justify-center bg-[url('/assets/heroBanner.png')] bg-cover bg-no-repeat px- 4 pt-15">

            <div>
                <p className="text-orange-600 text-center">WHERE FLAVOR MEETS ELEGANCE</p>
                <h1 className="text-5xl md:text-6xl font-medium max-w-3xl text-center mt-5 font-urbanist text-balance">Crafted for unforgettable dining moments</h1>
                <p className="text-zinc-600 max-w-md text-center mt-3 mx-auto">Experience carefully curated menus,fresh local ingredients and impeccable service in a space made for every celebration.</p>
                <a className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 mt-8 rounded-full block transition w-fit mx-auto" href="#booking-process">Book a table</a>

            </div>
            <div className="flex items-center justify-center md:justify-start mt-9">

                <div className="flex -space-x-3.5 pr-3">
                    {avatars.map((pic,i)=>(<img key={i} src={pic} alt='guest' className="size-10 border-2 border-slate-50 rounded-full hover:-translate-y-px transition"/>))}


                </div>
                <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_,i)=>(<Star key={i} className='size-3.5 fill-orange-500 text-orange-500 '/>))}

                </div>
                <p className="text-zinc-800">4.8/5 Rating - 10,000 reviews</p>
            </div>










        </section>


        

 



    )








}