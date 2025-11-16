import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./WatchListBottom.css";
function WatchListBottom() {
    return (<>
    <div className="row watchlistbottomrow m-0 p-2 border-bottom">
        <div className="col-4 p-0 color-red">infy</div>
        <div className="col-8 p-0 text-end pe-1">
            <span className="color-red">-1.5%</span>
            <span className="px-2 color-red"><ExpandMoreIcon></ExpandMoreIcon></span>
            <span>1555.45</span>
        </div>
    </div>
    <div className="row watchlistbottomrow m-0 p-2 border-bottom">
        <div className="col-4 p-0 color-green">infy</div>
        <div className="col-8 p-0 text-end pe-1">
            <span className="color-green">1.5%</span>
            <span className="px-2 color-green"><ExpandLessIcon></ExpandLessIcon></span>
            <span>1555.45</span>
        </div>
    </div>

    </>)
}

export default WatchListBottom;