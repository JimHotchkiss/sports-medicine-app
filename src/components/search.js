class Search {
  static bindSearchEventListener() {
    const inputField = document.getElementById("input-field")
    inputField.addEventListener("input", (userInput) => {
      console.log(userInput.type)
      Search.filterInserts(userInput)
    })
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
    HomePage.renderInplants(filteredSearch)
  }

  static clearSearchField() {
    const searchField = document.getElementById("input-div")
    if (searchField) {
      searchField.parentNode.removeChild(searchField)
    }
  }
}
