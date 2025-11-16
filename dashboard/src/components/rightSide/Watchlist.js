import WatchListBottom from "./WatchListBottom";
import WatchListTop from "./WatchListTop";

function WatchList() {
    return (
    <><WatchListTop/>
    <div className="mb-3">
        <WatchListBottom/>
    </div>
    </>);
}

export default WatchList;