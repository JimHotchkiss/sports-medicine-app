class DefaultSettings {
  constructor() {
    this.defaultAdapter = new DefaultAdapter()
    this.fetchDefaultSettings()
  }

  fetchDefaultSettings() {
    this.defaultAdapter.fetchDefaultSettingsData().then((data) => {
      for (let item in data) {
        for (let i = 0; i < data[item].length; i++) {
          // console.log(data[item][i])
          // Footpedal
          if (data[item][i].footpedal) {
            data[item][i].footpedal.map((piece) => {
              if (piece.shaver) {
                // Shaver
                const shaver = piece.shaver
                Store.addShaverFootpedalDefaults(shaver)
              } else {
                // RF
                const rf = piece.rf
                Store.addRfFootpedalDefaults(rf)
              }
            })
            // Handpiece
          } else if (data[item][i].shaver) {
            let shaverDefaults = data[item][i].shaver
            // console.log(shaverDefaults)
            Store.addShaverDefaults(shaverDefaults)
          } else if (data[item][i].rfWand) {
            // RF Wand
            let rfDefaults = data[item][i].rfWand
            Store.addRfDefaults(rfDefaults)
          }
        }
      }
    })
  }
}
