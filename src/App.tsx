import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";



const App:React.FC =()=> {
  const [state,setState] = useContext(ProductContext)
  return (
    <h1>
      {state.map((item:any,i:number)=>{
      return  <li key={i}>{item.title}</li>
      })}
    </h1>
  );
}

export default App;
