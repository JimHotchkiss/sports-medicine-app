class Shavers {
  constructor() {
    this.shaverAdapter = new ShaverAdapter()
    this.fetchShaverSpecifications()
  }

  fetchShaverSpecifications() {
    this.shaverAdapter.fetchShaverData().then((data) => {
      data.map((shaver) => {
        console.log(shaver)
      })
      Store.addShavers(data)
    })
  }
}
