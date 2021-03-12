class DefaultSettings {
  constructor() {
    this.defaultAdapter = new DefaultAdapter()
    this.fetchDefaultSettings()
  }

  fetchDefaultSettings() {
    this.defaultAdapter.fetchDefaultSettingsData().then((data) => {
      for (let item in data) {
        for (let i = 0; i < data[item].length; i++) {
          // Footpedal
          if (data[item][i].footpedal) {
            data[item][i].footpedal.map((piece) => {
              if (piece.shaver) {
                // console.log(piece.shaver)
              } else {
                // console.log(piece.rf)
              }
            })
            // Handpiece
          } else if (data[item][i].handpiece) {
            let handpiece = data[item][i]
            console.log(handpiece)
            // for (let button in handpiece) {
            //   console.log(handpiece[button].default1)
            // }
          }
        }
      }
    })
  }
}
