class Xf2Errors {
  constructor() {
    this.xf2ErrorsAdapter = new Xf2ErrorsAdapter()
    this.fetchXf2ErrorsSpecifications()
  }

  fetchXf2ErrorsSpecifications() {
    this.xf2ErrorsAdapter.fetchXf2ErrorsData().then((data) => {
      Store.addXf2Errors(data)
    })
  }

  static getXf2ErrorsFromStore() {
    return Store.getXf2Errors()
  }

  static bindingErrorsEventListener() {
    const errorDivs = document.getElementsByClassName("shaver-div")
    for (let item of errorDivs) {
      item.addEventListener("click", () => {
        const selectedError = item
        HomePage.clearXf2ErrorText()
        Search.clearSearchField()
        HomePage.getErrorDetails(selectedError)
      })
    }
  }
}
