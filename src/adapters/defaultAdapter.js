class DefaultAdapter {
  constructor() {
    this.featureUrl = "../../data/default-settings.json"
  }

  fetchDefaultSettingsData() {
    return fetch(this.featureUrl).then((response) => response.json())
  }
}
