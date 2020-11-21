import { Link } from "react-router-dom";
import logo from '../illustration/logoBRI.png';

export default function Header(){

return (
<nav class="navbar navbar-expand-lg navbar-dark" id="Navbar">
  <Link to ="/complaintpage" class="navbar-brand">
    <img src={logo} id="logoBRI" alt="Login"></img>
  </Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link to ="/complaintpage" class="nav-item nav-link active">Complaint <span class="sr-only">(current)</span></Link>
      <Link to ="/listcomplaint" class="nav-item nav-link">List Complaint</Link>
      <Link to ="/" class="nav-item nav-link">Logout</Link>
      
      
    </div>
  </div>
</nav>
)
}