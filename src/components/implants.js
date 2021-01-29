class Implants {
  constructor() {
    this.implantAdapter = new ImplantAdapter()
  }

  fetchImplantsSpecifications() {
    this.implantAdapter.fetchImplantData().then((data) => {
      data.map((implant) => {
        // console.log(
        //   `implant name: ${implant.IMPLANT}`,
        //   `implant length: ${implant.IMPLANT_LENGTH}`
        // )
      })
    })
  }
}
