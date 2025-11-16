function Topbar() {
    return (<nav class="navbar navbar-expand bg-body-tertiary border-end">
  <div class="container-fluid">

{/* work: adjust padding according to the screensize: in the div below, just before collapse padding:2-8% */}
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">NIFTY 50</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">0.00</a>
        </li>
        <li class="nav-item pe-5">
          <a class="nav-link" href="#">0</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SENSEX</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">0.00</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">0</a>
        </li>

      </ul>
    </div>
  </div>
</nav>);
}

export default Topbar;