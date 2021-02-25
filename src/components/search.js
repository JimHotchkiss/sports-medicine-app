class Search {
  static bindInsertSearchEventListener() {
    const inputField = document.getElementById("input-field")
    inputField.addEventListener("input", (userInput) => {
      Search.filterInserts(userInput)
    })
  }

  static bindProbeSearchEventListener() {
    const inputField = document.getElementById("input-field")
    inputField.addEventListener("input", (userInput) => {
      Search.filterProbes(userInput)
    })
  }

  static filterProbes(userInput) {
    const searchedProbes = userInput.target.value.toLowerCase()
    const probes = Store.getProbes()
    let filteredSearch = probes.filter((probe) => {
      return (
        probe.probe.name.toLowerCase().includes(searchedProbes) ||
        probe.probe.pn.toLowerCase().includes(searchedProbes)
      )
    })
    HomePage.clearProbeText()
    HomePage.renderProbes(filteredSearch)
  }

  static bindShaverSearchEventListener() {
    const inputField = document.getElementById("input-field")
    inputField.addEventListener("input", (userInput) => {
      Search.filterShavers(userInput)
    })
  }

  static filterShavers(userInput) {
    const searchedShavers = userInput.target.value.toLowerCase()
    const shavers = Store.getShavers()
    let filteredSearch = shavers.filter((shaver) => {
      return (
        shaver.Name.toLowerCase().includes(searchedShavers) ||
        shaver.PartNumber.toString().includes(searchedShavers)
      )
    })
    HomePage.clearShaverText()
    HomePage.renderShavers(filteredSearch)
  }

  static filterInserts(userInput) {
    const searchedInsert = userInput.target.value.toLowerCase()
    const inserts = Store.getInserts()
    let filteredSearch = inserts.filter((insert) => {
      return (
        insert.implant.name.toLowerCase().includes(searchedInsert) ||
        insert.implant.pn.toLowerCase().includes(searchedInsert)
      )
    })
    HomePage.clearImplantText()
    HomePage.renderImplants(filteredSearch)
  }

  static clearSearchField() {
    const searchField = document.getElementById("input-div")
    if (searchField) {
      searchField.parentNode.removeChild(searchField)
    }
  }
}
