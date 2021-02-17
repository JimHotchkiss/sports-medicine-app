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
      console.log(probe.probe.suction)
      return (
        probe.probe.name.toLowerCase().includes(searchedProbes) ||
        probe.probe.pn.toLowerCase().includes(searchedProbes)
      )
    })
    HomePage.clearProbeText()
    HomePage.renderProbes(filteredSearch)
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
