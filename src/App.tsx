// import './App.css'


// import Navbar from "./components/Navbar";
// import React from "react";
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
// import Services from "./components/NavbarInfo/Services";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//       <div className="flex flex-col space-y-16">
//         <Header/>
//         <InfoAstro />
//         <AstroTitle />
//         <AstroPremium />
//         <AstroBusinessTitle />
//         <AstroBusinessCards />
//         <AstroBusinessTrust />
//         <ClienSuccessTitle />
//         <ClientSuccessCards />
//         <AstroResource />
//         <AstroResourceCards />
//         <AstroTransform />
        
//       </div>
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         <Route path="/services" element={<Services/>} />
//         {/* <Route path="/consultation" element={<Consultation />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/more" element={<More />} /> */}
//         {/* <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} /> */}
//       </Routes>
//       </div>
    
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/NavbarInfo/Services";
import Blog_1 from "./components/NavbarInfo/Blog_1";
import About from "./components/NavbarInfo/About";
import Contact from "./components/NavbarInfo/Contact";
import Home from "./components/NavbarInfo/Home";
import More from "./components/NavbarInfo/More";
import AstroBranding from "./components/servicesInfo/AstroBranding";
import AstroRegForm from "./components/servicesInfo/AstroRegForm";
import Blog from "./components/NavbarInfo/Blog";


const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar will always be visible */}
      <div>
      <Navbar />
      </div>
      
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/consultation" element={<Consultation />} /> */}
        // <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/more" element={<More />} />
         <Route path="/astro-branding" element={<AstroBranding />} />
         <Route path="/book" element={<AstroRegForm />} />
         <Route path="/blog/one" element={<Blog_1 />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
      </div>
      
      
    </Router>
    
  );
};

export default App;




// const App: React.FC = () => {
//   return (
//     <>
//       <Navbar />
      
      // <div className="flex flex-col space-y-16">
      //   <Header/>
      //   <InfoAstro />
      //   <AstroTitle />
      //   <AstroPremium />
      //   <AstroBusinessTitle />
      //   <AstroBusinessCards />
      //   <AstroBusinessTrust />
      //   <ClienSuccessTitle />
      //   <ClientSuccessCards />
      //   <AstroResource />
      //   <AstroResourceCards />
      //   <AstroTransform />
        
      // </div>
      

       
//     </>
//   );
// };

// export default App;
