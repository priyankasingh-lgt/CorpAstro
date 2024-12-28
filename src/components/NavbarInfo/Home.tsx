import AstroBusinessTitle from "../HomePages/AstroBusinessTitle";
import AstroPremium from "../HomePages/AstroPremium";
import AstroTitle from "../HomePages/AstroTitle";
import Header from "../HomePages/Header";
import AstroBusinessTrust from "../HomePages/AstroBusinessTrust";
import AstroBusinessCards from "../HomePages/AstroBusniessCards";
import AstroResource from "../HomePages/AstroResource";
import AstroResourceCards from "../HomePages/AstroResourceCards";
import AstroTransform from "../HomePages/AstroTransform";
import ClientSuccessCards from "../HomePages/ClientSuccesCards";
import ClienSuccessTitle from "../HomePages/ClientSuccesTitle";
import InfoAstro from "../HomePages/InfoAstro";

function Home() {
    return (
        <div className="flex flex-col space-y-16">
        <Header/>
        <InfoAstro />
        <AstroTitle />
        <AstroPremium />
        <AstroBusinessTitle />
        <AstroBusinessCards />
        <AstroBusinessTrust />
        <ClienSuccessTitle />
        <ClientSuccessCards />
        <AstroResource />
        <AstroResourceCards />
        <AstroTransform />
        {/* <Footer /> */}
      </div>
    );
  }
  
  export default Home;
  