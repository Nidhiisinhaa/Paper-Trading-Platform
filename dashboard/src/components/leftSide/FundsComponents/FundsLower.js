
import { transactionHistory } from "../../../data/data";
import FundsTransactionHistory from "./FundsTransactionHistory";
function FundsLower() {
    return (<div className="container mt-5">
        <p className="row">
            <span className="col-6 text-start font-300">Recent Transactions</span>
            <span className="col-6 text-end" style={{color: "#6262b3"}}>View Transaction History</span>
        </p>
        <FundsTransactionHistory></FundsTransactionHistory>

       
    </div>);
}

export default FundsLower;