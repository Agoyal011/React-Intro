import "./App.css";
import Navigation from "./Componen/Navigation";
import Mainsec1 from "./Componen/Mainsec1";
import Mainsec2 from "./Componen/Mainsec2";
import About from "./Componen/About";
import Objective from "./Componen/Objective";
import Mockup from "./Componen/Mockup";
import Tools from "./Componen/Tools";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <>
      <div>
        <Navigation></Navigation>
        <Mainsec1
          title="UI UX DESIGN"
          title2="WEB DEVELOPMENT"
          mainsec1_heading1="The First Fundraising Resource"
          mainsec1_heading2="Planning Software Platform "
          mainsec1_div="mainsec1"
        ></Mainsec1>
        {/* <Mainsec1 title2="WEB DEVELOPMENT"></Mainsec1> */}

        <Mainsec2></Mainsec2>
        <About></About>
        <Objective></Objective>
        <Mockup></Mockup>
        <Mainsec1
          title="UI UX DESIGN"
          title2="WEB DEVELOPMENT"
          mainsec1_heading1="Tools Used in this Project"
          mainsec1_div="mainsec1-com2-heading"
          mainsec1_classheading2="mainsec1_heading2"
        ></Mainsec1>
        <Tools Tools_maindiv= "Tools_maindiv" Tools_div= "Tools_div1" Tools_div2="Tools_div2" tool1= "MongoDB" tool2="React.js" tool3="Figma" tool4="Sanity CMS" tool5="CSS" tool6="NextJS"
        tool7= "MongoDB" tool8="React.js" tool9="Figma" tool10="Sanity CMS" tool11="CSS" tool12="NextJS"  
        ></Tools>
      </div>
    </>
  );
}

export default App;
