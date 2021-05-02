import React from "react";
import image from "../mountains.jpg";

export default function Home(){
    return(
        <main> 
            <img src={image} alt="Mounatins" className="absolute object-cover w-full h-full "/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className ="text-5x1 lg:text-lg text-white font-bold cursive leading-none  lg:leading-snug home-name"
                >Hello. I'm Nazeeya.</h1>
               
            </section> 
            <section className= "target=_blank">
                <h2 className="absolute bottom-0 left-0  text-xl text-white ">Photo by <a href="https://unsplash.com/@besserurlauben?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText " target="_blank" rel="noreferrer">Benjamin Bindewald</a> on <a href="https://unsplash.com/s/photos/green-mountains?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </h2>
            
            </section>         
        </main>
    )
}