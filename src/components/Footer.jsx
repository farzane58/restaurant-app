import { Mail, Phone } from "lucide-react";
import { quickLinks, sitemapLinks, socialLinks } from "../data/data";

export default function Footer(){
    return(
        <footer className="px-auto mt-44 overflow-hidden">
        
            <div className="max-w-7xl mx-auto">
            
                <div className="flex   flex-wrap  justify-between items-start gap-6">
                
                                       
                    {/*1*/}
                    <div className="flex flex-col  gap-4  text-left">

                     <a href="/">

                      <img src="/assets/logo.svg" alt="logo" />


                    </a>
                        
                          

                        
                        
                            <p className=" text-sm text-zinc-600 max-w-60 text-balance mt-1">

                             Serving freshly prepared dishes with authentic flavors, premium 
                             ingredients and exceptional hospitality every day.

                            </p>

                    

                                <div className="flex gap-1.5">
                            {socialLinks.map((item)=>(
                                <div key={item.id}>
                                    <a href={item.href} className="size-7 rounded-full border border-slate-300 grid
                                     place-content-center">{item.icon}</a>

                                </div>

                            ))}

                            </div>

                    </div>
                        

                    

                    


                    

 
                    {/*2*/}
                    <div>
                        <p className="font-medium mb-5">Quick Links</p>
                        <div className="flex flex-col gap-3">
                            {quickLinks.map((item)=>(
                                <div key={item.id}>
                                    <a href={item.href} className="text-zinc-600 hover:text-zinc-500">{item.name}</a>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/*3*/}

                    <div>
                         <p className="font-medium mb-5">Get in Touch</p>
                         <div className="space-y-2">
                            <div>

                                <a href="mailto:hello@example.com" className="flex item-center gap-1 text-zinc-600 hover:text-zinc-500">
                                <Mail size={16} className="shrink-0"/>
                                hello@example.com
                                </a>


                            </div>

                             <div>

                                <a href="tel:987-654-3210" className="flex item-center gap-1 text-zinc-600 hover:text-zinc-500">
                                <Phone size={16} className="shrink-0"/>
                                987-654-3210
                                </a>


                            </div>

                        
                        
                         </div>

                    
                    </div>

                    {/*4*/}

                    <div>

                        <p className="font-medium mb-5">Sitemap</p>
                        <div className="flex flex-col gap-2.5">
                            {sitemapLinks.map((item)=>(
                                <div key={item.id}>
                                    <a href={item.href} className="text-zinc-600 hover:text-zinc-500">
                                        {item.name}
                                    </a>

                                </div>

                            ))}

                        </div>


                    </div>


                </div>

                <div className="border-t text-zinc-500 border-slate-200 mt-5 p-2">

                    <p>2026 All Right Reserved.</p>
                    

                </div>

            </div>

        </footer>
    )
}