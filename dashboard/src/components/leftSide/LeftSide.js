

import Orders from "./Orders/Orders";
import Positions from "./Positions/Positions";
import Topbar from "./Topbar";
import Holdings from "./Holdings/Holdings";
import { Route, Routes} from "react-router-dom";
import Funds from "./Funds/Funds";
import Dashboard from "./Dashboard";
import UserProfile from "./UserInfo/UserProfile";
import EditProfile from "./UserInfo/EditProfile";
import Report from "./Reports/Report";
import UserState from "../../contexts/UserContext/UserState";
import Guide from "../guide/Guide";
function LeftSide() {
    return ( <>
    <Topbar></Topbar>
    <div className="content">
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard/>}></Route>
            <Route path="positions" element={<Positions/>}></Route>
            <Route path="orders" element={<Orders/>}></Route>
            <Route path="holdings" element={<Holdings/>}></Route>
            <Route path="funds" element={<Funds/>}></Route>
            <Route path="userprofile" element={<UserProfile/>}></Route>
            <Route path="editprofile" element={<EditProfile/>}></Route>
            <Route path="report" element={<Report/>}></Route>
            <Route path="guide" element={<Guide/>}></Route>


        </Routes>
    </div>

    </> );
}

export default LeftSide;