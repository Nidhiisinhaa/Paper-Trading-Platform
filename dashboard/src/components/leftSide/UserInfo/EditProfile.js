import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function EditProfile() {
    return ( 
    <div className="container">
        <div className='d-flex  gap-2 align-items-center'>

        <span>
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
        </span>
        <h1 className="font-300 d-inline">Edit Profile</h1>
        </div>
        <form className='p-3'>

            <div class="my-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" value={"johndoe@gmail.com"}/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Username</label>
                <input class="form-control" id="exampleFormControlTextarea1" rows="3" value={"@johndoe"}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Name</label>
                <input class="form-control" id="exampleFormControlTextarea1" rows="3"value={"John Doe"}></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Funds (in &#8377; )</label>
                <input type="number" class="form-control" id="exampleFormControlTextarea1" rows="3"value={1000000}></input>
            </div>
            <button type='submit' className='btn btn-outline-success'>Submit</button>
        </form>
        <Link to={"/userprofile"} class="btn btn-outline-primary mt-3"><ArrowBackIosIcon></ArrowBackIosIcon> Profile</Link>
    </div> );
}

export default EditProfile;