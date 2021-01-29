class UpdateHomePage {
  clearInnerText() {
    const featuresContainer = document.getElementById("features-container")
    if (featuresContainer) {
      featuresContainer.parentNode.removeChild(featuresContainer)
    }
  }
}
