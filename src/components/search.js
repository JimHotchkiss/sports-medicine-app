class Search {
  static bindSearchEventListener() {
    const inputField = document.getElementById("input-field")
    inputField.addEventListener("input", (userInput) => {
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
}
