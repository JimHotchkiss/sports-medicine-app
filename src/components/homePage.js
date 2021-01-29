class HomePage {
  constructor() {
    this.navbar = new Navbar()
    this.features = new Features()
    this.implants = new Implants()
    this.callRenderNavbar()
  }

  callRenderNavbar() {
    this.navbar.renderNavbar()
  }
}
