class Xf2Errors {
  constructor() {
    this.xf2ErrorsAdapter = new Xf2ErrorsAdapter()
    this.fetchXf2ErrorsSpecifications()
  }

  fetchXf2ErrorsSpecifications() {
    this.xf2ErrorsAdapter.fetchXf2ErrorsData().then((data) => {
      console.log(data)
    })
  }
}
