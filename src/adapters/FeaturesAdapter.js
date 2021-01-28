class FeaturesAdapter {
  constructor() {
    this.featureUrl = "../../data/featuresData.json"
  }

  fetchFeaturesData() {
    return fetch(this.featureUrl).then((response) => response.json())
  }
}
