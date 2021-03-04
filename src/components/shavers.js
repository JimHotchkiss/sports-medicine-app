class Shavers {
  constructor() {
    this.shaverAdapter = new ShaverAdapter()
    this.fetchShaverSpecifications()
  }

  fetchShaverSpecifications() {
    this.shaverAdapter.fetchShaverData().then((data) => {
      Store.addShavers(data)
    })
  }

  static getShaversFromStore() {
    return Store.getShavers()
  }

  static bindingShaversEventListener() {
    const shaverDivs = document.getElementsByClassName("shaver-div")
    for (let item of shaverDivs) {
      item.addEventListener("click", () => {
        const selectedShaver = item
        HomePage.clearShaverText()
        Search.clearSearchField()
        HomePage.getShaverDetails(selectedShaver)
      })
    }
  }
}
