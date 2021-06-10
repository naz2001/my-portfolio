import React from "react";
//import treecanopy from "../treecanopy1.jpg";
import teamEverest from "./teameverest.jpg";
import hackClub from "./hackclub.jpg";
import  Lifelab from "./lifelab.jpg";


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
                <h1 className="text-5xl ml-5 my-8  flex cursive">Experience</h1>
                <div className="grid grid-cols-5 gap-12 ">
                <div>
                    <img src={hackClub}
                     alt="Hack Club"
                     className="rounded ml-10 float-left w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                </div>
                <div className="col-span-4 text-justify mr-12  " > 
            
                        <h1 className="text-3xl  ml-7 font-bold mb-2">Hack Club Member</h1>
                        <h2 className="text-2xl ml-7 font-semibold mb-3">November 2020 - Present</h2>
                        <h3 className="text-2xl ml-7 font-semibold mb-8">As an active hack club member, I successfully completed a project to build a personal website using React.
                        </h3>
                </div>
                <div>
                    
                    <img src={teamEverest}
                     alt="TeamEverest"
                     className="rounded ml-10  mb-12  float-left w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                </div>
                <div  className="col-span-4 text-justify mr-12 ">    
                        <h1 className="text-3xl  ml-7 font-bold mb-2">Internship - Curriculum Developer</h1>
                        <h2 className="text-2xl ml-7 font-semibold mb-3">January 2021 - February 2021</h2>
                        <h3 className="text-2xl ml-7 font-semibold mb-8">Volunteered at Team Everest, one of the biggest youth-run NGOs in India with 25,000+ volunteers and working with 40,000 children a year.
                         I developed 20-days worth of curriculum  for children of grade 3 to 5.
                        </h3>
                      
                </div>
                <div>
                    
                    <img src={Lifelab}
                     alt="Life lab"
                     className="rounded ml-10  mb-12  float-left w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                </div>
                <div  className="col-span-4 text-justify mr-12 ">    
                        <h1 className="text-3xl  ml-7 font-bold mb-2">Internship - Content Writer</h1>
                        <h2 className="text-2xl ml-7 font-semibold mb-3">April 2021 - May 2021</h2>
                        <h3 className="text-2xl ml-7 font-semibold mb-8">Volunteered at WOSCA's Life-Lab Science Program. I created student-centric learning resources. 
                        This involved lesson planning activities and assessment building for grades 6-8.
                        </h3>
                      
                </div> 
             </div>
            </div>



         

    
    </main>
)
    
}       
