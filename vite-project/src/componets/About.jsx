import React from "react";

function About() {
  return (
    <section id="about" className="md:h-screen h-auto w-full flex items-center justify-center ">
      <div className="flex flex-col items-center md:py-20 py-6 px-6 md:px-8 lg:px-24">
        <div className="text-center italic text-xl mb-8">
          <h3 className="text-2xl font-mono font-semibold ">--- About ---</h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center  md:py-20 md:px-14 px-2 py-2 justify-center mt-5">
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img
              className="h-40 w-40 md:h-60 md:w-60 rounded-full"
              src="https://imgs.search.brave.com/Ucj1y-2NA9SlbFc6EyUzLGawQIRXVCBwiOoDOsw9YXQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9nZXRp/bGx1c3RyYXRpb25z/LmItY2RuLm5ldC8v/cGhvdG9zL3BhY2sv/M2QtYXZhdGFyLW1h/bGVfbGcucG5n"
              alt="Profile"
            />
          </div>
          <div className="md:ml-14 md:px-4 mt-5  bg-slate-800 border border-gray-700 rounded-xl shadow-lg p-6">
            <div className="px-4">
              <p className="text-lg text-gray-300 mb-4">
              Hello! I'm Chakradhar, a Software Engineer and Investor based in Hyderabad.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                I have overall 3 years of industry experience in build modern responsive and scalable web appalciations using react and its ecosystem.
              </p>
              <p className="text-lg text-gray-300 mb-4">
              Apart from Frontend, I am passionate about the potential of blockchain and am actively involved in learning and implementing blockchain concepts, smart contracts, and decentralized applications.
              </p>
              <p className="text-lg text-gray-300">
              Apart from work, you will find me enjoying investing, reading books, and playing badminton.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
