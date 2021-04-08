class XflowErrors {
  constructor() {
    this.xflowErrorsAdapter = new XflowErrorsAdapter()
    this.fetchXflowErrorsSpecifications()
  }

  fetchXflowErrorsSpecifications() {
    this.xflowErrorsAdapter.fetchXflowErrorsData().then((data) => {
      console.log(data)
    })
  }

  static getXflowErrorsFromStore() {
    //   return Store.getXf2Errors()
  }

  static bindingXflowErrorsEventListener() {
    const errorDivs = document.getElementsByClassName("shaver-div")
    for (let item of errorDivs) {
      item.addEventListener("click", () => {
        const selectedError = item
        //   HomePage.clearXf2ErrorText()
        //   Search.clearSearchField()
        //   HomePage.getErrorDetails(selectedError)
      })
    }
  }
}
