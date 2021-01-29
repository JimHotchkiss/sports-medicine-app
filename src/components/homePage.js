class HomePage {
  constructor() {
    this.navbar = new Navbar()
    this.features = new Features()
    this.callRenderNavbar()
  }

  callRenderNavbar() {
    this.navbar.renderNavbar()
  }
}
