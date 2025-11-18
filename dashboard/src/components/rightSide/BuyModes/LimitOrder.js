function LimitOrder() {
    return ( 
    <div class="row">
        <div class="col">
            <input type="number" class="form-control" placeholder="Qty." aria-label="First name"/>
        </div>
        <div class="col">
            <input type="number" class="form-control" placeholder="123.45" aria-label="1234.5"/>
        </div>
        <div class="col">
            <input type="number" class="form-control" placeholder="123.45" aria-label="Stop Loss"/>
        </div>
    </div> );
}

export default LimitOrder;