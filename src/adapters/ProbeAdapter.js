class ProbeAdapter {
  constructor() {
    this.dataUrl = "../../data/probesData.json"
  }

  fetchProbeData() {
    return fetch(this.dataUrl).then((resp) => resp.json())
  }
}
