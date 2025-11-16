import LeftSide from "./leftSide/LeftSide";
import RightSide from "./rightSide/RightSide";
import "../util.css";
function Home() {
    return ( <div className="row m-0">
        <div className="col-lg-7 p-0">
            <LeftSide></LeftSide>
        </div>
        <div className="col-lg-5 p-0">
            <RightSide></RightSide>
        </div>
    </div> );
}

export default Home;
