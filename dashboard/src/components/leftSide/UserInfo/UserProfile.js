import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
function UserProfile() {
    return ( <div className="container">
        <div className='d-flex  gap-2 align-items-center'>

        <span>
            <AccountCircleIcon fontSize="large"></AccountCircleIcon>
        </span>
        <h1 className="font-300 d-inline">User Profile</h1>
        </div>

    
        <div className="p-2 my-5">
            <div class="card">
                <div class="card-header">
                    Username: <span>@johndoe</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Email : <span>johndoe@gmail.com</span></h5>
                    <h5 class="card-title">Name : <span>John Doe</span></h5>
                    <h5 class="card-title">funnds : <span>&#8377; 100000</span></h5>
                    
                </div>
                </div>
            </div>
            <Link to={"/editprofile"} class="btn btn-outline-primary mt-3">Edit Profile</Link>
    </div> );
}

export default UserProfile;