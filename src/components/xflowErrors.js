class XflowErrors {
  constructor() {
    this.xflowErrorsAdapter = new XflowErrorsAdapter()
    this.fetchXflowErrorsSpecifications()
  }

  fetchXflowErrorsSpecifications() {
    this.xflowErrorsAdapter.fetchXflowErrorsData().then((data) => {
      Store.addXflowErrors(data)
    })
  }

  static getXflowErrorsFromStore() {
    return Store.getXflowErrors()
  }

  static bindingXflowErrorsEventListener() {
    const errorDivs = document.getElementsByClassName("shaver-div")
    for (let item of errorDivs) {
      item.addEventListener("click", () => {
        const selectedError = item
        HomePage.clearErrorText()
        Search.clearSearchField()
        HomePage.getXflowErrorDetails(selectedError)
      })
    }
  }
}
