import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Homepage } from "../pages";

const CustomRouter = ()=>{

    return(
        <BrowserRouter>
      <Routes>
   

        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
    )

}

export default CustomRouter;