import React from "react";
//import treecanopy from "../treecanopy1.jpg";

export default function Resume(){
    return(
        <main className="bg-red-100 min-h-screen p-12 ">
             <div className="container mx-auto bg-red-800 shadow-2xl p-5">            
                <h1 className="text-6xl flex justify-center cursive">Resume</h1>
            </div>

            <div className="container mx-auto my-8 bg-red-700 p-5">            
                <h1 className="text-5xl flex ml-5 my-8 cursive">Education</h1>
                    <ul>
                        <li className="text-3xl ml-7 font-bold mb-2">Bachelor's Degree in Computer Science. KMEA Engineering College, Kerala, India.</li>
                        <li className="text-2xl ml-7 font-semibold mb-8">August 2019-Expected graduation 2023</li>
                        <li className="text-3xl ml-7 font-bold mb-2">High School Diploma. Naipunnya Public School, Kochi, Kerala, India.</li>
                        <li className="text-2xl ml-7 font-semibold mb-8">June 2017-March 2019</li>
                    </ul>
            </div>
            
            <div className="container mx-auto bg-red-700 shadow-2xl p-5">            
                <h1 className="text-5xl ml-5 my-8 flex cursive">Experience</h1>
                <ul>
                        <li className="text-3xl ml-7 font-bold mb-2">Internship - Curriculum Developer</li>
                        <li className="text-2xl ml-7 font-semibold mb-3">January 2021 - February 2021</li>
                        <li className="text-2xl ml-7 font-semibold mb-8">Volunteered at Team Everest, one of the biggest youth-run NGOs in India with 25,000+ volunteers and working with 40,000 children a year.
                         I developed 20-days worth of curriculum  for children of grade 3 to 5.
                        </li>
                    </ul>
            </div>
    </main>
)
    
}       