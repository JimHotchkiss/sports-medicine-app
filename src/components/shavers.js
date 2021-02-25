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

  static bindingShaversEventListener() {
    const shaverDivs = document.getElementsByClassName("shaver-div")
    for (let item of shaverDivs) {
      item.addEventListener("click", () => {
        const selectedProbe = item
        // HomePage.clearProbeText()
        // Search.clearSearchField()
        // HomePage.getProbeDetails(selectedProbe)
      })
    }
  }
}
