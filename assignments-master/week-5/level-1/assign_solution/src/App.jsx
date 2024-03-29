import Businesscard from "./Businesscard";
import './App.css';
const props = {
  name: "Rajan Mishra",
  description: "curently i am leaning web dev.",
  interestheader: "interests",
  interests: ["Reading", "Coding",'playing','sleeping'],
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
};

function App3() {
  return (
    <div>
    <Businesscard props={props} />
    </div>
    
  )
}

export default App3
