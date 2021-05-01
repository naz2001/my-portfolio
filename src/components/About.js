import React, {  useEffect ,useState } from "react";
import sanityClient from "../client.js";
import treecanopy from "../treecanopy1.jpg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor]= useState(null);

    useEffect(()=>
    {
        sanityClient.fetch(`*[_type=="author"]{
         name,
         bio,
         "authorImage":image.asset->url
    }`).then((data)=>setAuthor(data[0]))
            .catch(console.error);
    }, []);
 
    if(!author) return <div>Loading...</div>;
    return(
        <main className="relative">
            <img src={treecanopy} alt="Treecanopy" className="absolute w-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-full shadow-2xl lg:flex p-20">
                    <img src={urlFor(author.authorImage).url()}
                     alt={author.name}
                     className="rounded-full w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-5xl text-green-300 mb-4">
                            Hey there. I'm {" "}
                        <span className="text-green-100"> Nazeeya Azeem Anchamparuthi.</span>
                        </h1>
                        <div className="text-justify text-2xl text-white">
                            <h1> I am a student pursuing B.Tech in Computer Science. I am from the spice coast of India. I have a huge family, and they are a big part of me. 
                               I learned so much about faith, honesty, dedication, and compassion from them, and these traits have lead me to where I am today.
                               I am passionate and dedicated to my subject. My skills include Microsoft Office, C, C++, and English(advanced). </h1>
                        </div>
                    </div>
                </section>
            </div>
        </main>
        );
}
