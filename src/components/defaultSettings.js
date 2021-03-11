class DefaultSettings {
  constructor() {
    this.defaultAdapter = new DefaultAdapter()
    this.fetchDefaultSettings()
  }

  fetchDefaultSettings() {
    this.defaultAdapter.fetchDefaultSettingsData().then((data) => {
      data.default_settings.map((item) => {
        console.log(item.handpiece)
      })
      //   Store.addProbes(data)
    })
  }

  // static getSuctionProbesFromStore() {
  //   return Store.getSuctionProbes()
  // }

  // static getProbesFromStore() {
  //   return Store.getProbes()
  // }

  // static bindingProbesEventListener() {
  //   const probeDivs = document.getElementsByClassName("probe-div")
  //   for (let item of probeDivs) {
  //     item.addEventListener("click", () => {
  //       const selectedProbe = item
  //       HomePage.clearProbeText()
  //       Search.clearSearchField()
  //       HomePage.getProbeDetails(selectedProbe)
  //     })
  //   }
  // }
}
