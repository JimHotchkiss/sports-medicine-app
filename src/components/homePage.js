class HomePage {
  constructor() {
    this.featuresAdapter = new FeaturesAdapter()
    this.navbar = new Navbar()
    this.features = new Features()
    this.callRenderNavbar()
  }

  callRenderNavbar() {
    this.navbar.renderNavbar()
  }
}
