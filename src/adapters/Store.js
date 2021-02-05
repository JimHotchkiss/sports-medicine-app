class Store {
  static getInserts() {
    let inserts
    if (localStorage.getItem("inserts") === null) {
      inserts = []
    } else {
      inserts = JSON.parse(localStorage.getItem("inserts"))
    }
    return inserts
  }

  static addInserts(fetchedInserts) {
    localStorage.setItem("inserts", JSON.stringify(fetchedInserts))
  }
}
