
import Orders from "./Orders";
import Positions from "./Positions";
import Topbar from "./Topbar";
import Holdings from "./Holdings";
import { Route, Routes} from "react-router-dom";
import Funds from "./Funds";
import Dashboard from "./Dashboard";
function LeftSide() {
    return ( <>
    <Topbar></Topbar>
    <div className="content">
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path="funds" element={<Funds/>}></Route>
            <Route path="positions" element={<Positions/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="holdings" element={<Holdings/>}></Route>
        </Routes>
    </div>

    </> );
}

export default LeftSide;