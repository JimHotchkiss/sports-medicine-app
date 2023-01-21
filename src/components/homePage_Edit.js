class HomePage {
  constructor() {
    Navbar.renderNavbar()
    this.features = new Features()
  }

  static scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
  }

  static root() {
    return document.getElementById("root")
  }

  static clearFeaturesText() {
    const featuresContainer = document.getElementById("features-container")
    if (featuresContainer) {
      featuresContainer.parentNode.removeChild(featuresContainer)
    }
  }

  static clearImplantFamliesText() {
    const implantFamiliesContainer = document.getElementById("implant-families-container")
    if (implantFamiliesContainer) {
      implantFamiliesContainer.parentNode.removeChild(implantFamiliesContainer)
    }

  }

  static clearCapitalProductsText() {
    const capitalProductsContainer = document.getElementById("capital-products-container")
    if (capitalProductsContainer) {
      capitalProductsContainer.parentNode.removeChild(capitalProductsContainer)
    }

  }

  static clearImplantText() {
    const implantContainer = document.getElementById("implant-container")
    if (implantContainer) {
      implantContainer.parentNode.removeChild(implantContainer)
    }
  }

  static clearErrorText() {
    const errorsContainer = document.getElementById("shavers-container")
    if (errorsContainer) {
      errorsContainer.parentNode.removeChild(errorsContainer)
    }
  }

  static clearProbeText() {
    const probeContainer = document.getElementById("probes-container")
    if (probeContainer) {
      probeContainer.parentNode.removeChild(probeContainer)
    }
  }

  static clearShaverText() {
    const shaverContainer = document.getElementById("shavers-container")
    if (shaverContainer) {
      shaverContainer.parentNode.removeChild(shaverContainer)
    }
  }

  static clearShaverDetails() {
    const root = HomePage.root().children
    Array.from(root).forEach(function (element) {
      if (element.id !== "navbar") {
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    })
  }

  static clearFeatureData() {
    const featureData = HomePage.root()
    featureData.innerHTML = ""
  }

  static clearImplantDetails() {
    const root = HomePage.root().children
    Array.from(root).forEach(function (element) {
      if (element.id !== "navbar") {
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    })
  }

  static clearErrorDetails() {
    const root = HomePage.root().children
    Array.from(root).forEach(function (element) {
      if (element.id !== "navbar") {
        if (element) {
          element.parentNode.removeChild(element)
        }
      }
    })
  }

  static getCapitalProductsDetails(selectedCapitalProduct) {
    const capitalProducts = Store.getCapitalProducts()
    const selectedCapitalProducts = []
    capitalProducts.capital_products.map(capital_product => {
      if (capital_product.title === selectedCapitalProduct.dataset.capital) {
        return selectedCapitalProducts.push(capital_product)
      }
    })

    if (selectedCapitalProducts[0].title === "Pivot Guardian Direct") {
      HomePage.renderDartsDetails(selectedCapitalProducts)
    } else if (selectedCapitalProducts[0].title === "Guardian") {
      HomePage.renderGuardianDetails(selectedCapitalProducts)
    } else {
      HomePage.renderAdaptableBeachChairDetails(selectedCapitalProducts)
    }
    Navbar.showBackBtn(selectedCapitalProducts)
  }

  // Guardian
  static renderGuardianDetails(guardian_products) {
    console.log(guardian_products)
    const contentWrapper = document.createElement('div')
    contentWrapper.setAttribute('class', 'content-wrapper')
    const selectedProductName = guardian_products[0].title
    const selectedProductDisposables = guardian_products[0].disposables
    const selectedClinicalIndications = guardian_products[0].clinical_indications

    const selectedProductWeight = guardian_products[0].patient_size

    HomePage.scrollToTop()
    HomePage.ProductName(selectedProductName, contentWrapper)

    
    // HomePage.RenderDartsImages(darts_products[0].dart_images, contentWrapper)
    HomePage.GuardianCompatabilityTable(guardian_products, contentWrapper)

    HomePage.GuardianPatientSize(selectedProductWeight, contentWrapper)
    // HomePage.DartsDisposablesTitle(selectedProductDisposables, contentWrapper)
    // HomePage.DartClinicalIndications(selectedClinicalIndications, contentWrapper)
  }

  // Guardian Patient Size 
  static GuardianPatientSize(selectedProductWeight, contentWrapper){
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Patient Size"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedProductWeight
    
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Guardian Compatability Table 
  static GuardianCompatabilityTable(guardian_products, contentWrapper) {
    const benefitArray = guardian_products[0].compatability_table

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "replacement-parts-details-title")
    insertNameTitle.innerText = "Compatability Table:"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    // Compatablity Table Image 
    const replacementPartsImageDiv = document.createElement('div')
    replacementPartsImageDiv.setAttribute('class', 'compatability-img-div')
    replacementPartsImageDiv.setAttribute('id', 'darts-compatability-image')
    insertNameDiv.appendChild(replacementPartsImageDiv)
   
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }



  // DARTS
  static renderDartsDetails(darts_products) {
    const contentWrapper = document.createElement('div')
    contentWrapper.setAttribute('class', 'content-wrapper')
    const selectedProductName = darts_products[0].title
    const selectedProductDisposables = darts_products[0].disposables
    const selectedClinicalIndications = darts_products[0].clinical_indications

    const selectedProductWeight = darts_products[0].patient_size

    HomePage.scrollToTop()
    HomePage.ProductName(selectedProductName, contentWrapper)

    // Add DARTS supporting images - Jake's email
    const darts_images = darts_products[0].dart_images
    HomePage.RenderDartsImages(darts_products[0].dart_images, contentWrapper)
    HomePage.DartsCompatbilityTable(darts_products, contentWrapper)

    HomePage.DartsPatientSize(selectedProductWeight, contentWrapper)
    HomePage.DartsDisposablesTitle(selectedProductDisposables, contentWrapper)
    HomePage.DartClinicalIndications(selectedClinicalIndications, contentWrapper)
  }

  // Dart Images 
  static RenderDartsImages(darts_images, contentWrapper) {
    
    
    darts_images.map((image, index) => {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "replacement-parts-details-title")
    if (index === 0) {
      insertNameTitle.innerText = "Pivot Guardian Direct:"
    } else {
      insertNameTitle.innerText = "Part Numbers:"
    }
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)
    // Images
    const replacementPartsImageDiv = document.createElement('div')
    replacementPartsImageDiv.setAttribute('class', 'darts-img-div')
    replacementPartsImageDiv.setAttribute('id', `darts-compatability-image-${index}`)
    insertNameDiv.appendChild(replacementPartsImageDiv)
   
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
    })
  }

  // Dart Clinical Indications 
  static DartClinicalIndications(selectedClinicalIndications, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Clinical Indications"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)
    contentWrapper.appendChild(insertNameDiv)


    const insertIndicationTextDiv = document.createElement("div")
    insertIndicationTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedClinicalIndications

    insertIndicationTextDiv.appendChild(insertNameText)
    contentWrapper.appendChild(insertIndicationTextDiv)
 
    HomePage.root().appendChild(contentWrapper)

  }

  // DARTS Patient Disposables 
  static DartsDisposablesTitle(selectedProductDisposables, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Disposables"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)
    contentWrapper.appendChild(insertNameDiv)

    selectedProductDisposables.forEach(disposable => {
      //  PN
      const insertPnTextDiv = document.createElement("div")
      insertPnTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = disposable.item

      insertPnTextDiv.appendChild(insertNameText)
      contentWrapper.appendChild(insertPnTextDiv)
   
    })
    HomePage.root().appendChild(contentWrapper)
  }


  // DARTS Patient Size 
  static DartsPatientSize(selectedProductWeight, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Patient Size"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedProductWeight
    
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // DARTS Compatability Table 
  static DartsCompatbilityTable(darts_products, contentWrapper) {
    const benefitArray = darts_products[0].compatability_table

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "replacement-parts-details-title")
    insertNameTitle.innerText = "Compatability Table:"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    // Compatablity Table Image 
    const replacementPartsImageDiv = document.createElement('div')
    replacementPartsImageDiv.setAttribute('class', 'compatability-img-div')
    replacementPartsImageDiv.setAttribute('id', 'darts-compatability-image')
    insertNameDiv.appendChild(replacementPartsImageDiv)
   
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)

  }



  // Alphavent 
  static renderAlphaventProducts(alphavent_products) {
    const alphavent_products_container = document.createElement('div')
    alphavent_products_container.setAttribute("class", "content-wrapper")
    alphavent_products_container.setAttribute("id", "capital-products-container")
    const root = HomePage.root()
    alphavent_products.map(product => {
      // Alphavent Product Div
      const alphavent_product_div = document.createElement("div")
      alphavent_product_div.setAttribute("class", "content-div")
      alphavent_product_div.setAttribute("id", product.name)
      alphavent_product_div.setAttribute("data", product.name)
       // Image and Title div
       const alphaventImgTitleDiv = document.createElement("div")
       alphaventImgTitleDiv.setAttribute("class", "feature-img-title-div")
       // Image div
       const imgDiv = document.createElement("div")
       imgDiv.setAttribute("class", "alphavent-feature-img-div")
       imgDiv.setAttribute("id", `${product.id}-img-url`)
       alphaventImgTitleDiv.appendChild(imgDiv)
       //Title div
       const titleDiv = document.createElement("div")
       titleDiv.setAttribute("class", "content-title-div")
       titleDiv.setAttribute("id", `${product.id}-title`)

       titleDiv.innerText = product.name
       alphaventImgTitleDiv.appendChild(titleDiv)
 
       alphavent_product_div.appendChild(alphaventImgTitleDiv)
      //  alphavent_product_div.appendChild(descriptionDiv)
       alphavent_products_container.appendChild(alphavent_product_div)
       root.appendChild(alphavent_products_container)
    })
    Navbar.showAlphaventBackBtn(alphavent_products)
    CapitalProducts.bindingAlphaventProductsEventListener(alphavent_products)
  }

  static renderAlphaventProductDetails(selected_alphavent, alphavent_products) {
    const contentWrapper = document.createElement('div')
    contentWrapper.setAttribute('class', 'content-wrapper')
    const productName = selected_alphavent.name
    const alphaventPnsConfigurations = selected_alphavent.suture_anchors
    const productLength = selected_alphavent.length
    const productWidth = selected_alphavent.diameter
    const productPilotHoleDepth = selected_alphavent.pilot_hole_depth
    const productPilotHoleWidth = selected_alphavent.pilot_hole_width
    const productInstrumentCompatibility = selected_alphavent.instrument_compatibility
    const productEyelet = selected_alphavent.eyelet
    const productAdditionalFeatures = selected_alphavent.additional_features
    // const productCategory = selected_alphavent.category
    Search.clearSearchField()
    HomePage.ProductName(productName, contentWrapper)
    HomePage.AlphaventPNsConfiguration(alphaventPnsConfigurations, contentWrapper)
    HomePage.AlphaventLength(productLength, contentWrapper)
    HomePage.AlphaventWidth(productWidth, contentWrapper)
    HomePage.AlphaventPilotHoleDepth(productPilotHoleDepth, contentWrapper)
    HomePage.AlphaventPilotHoleWidth(productPilotHoleWidth, contentWrapper)
    HomePage.AlphaventInstrumentCompatibility(productInstrumentCompatibility, contentWrapper)
    HomePage.AlphaventProductEyelet(productEyelet, contentWrapper)
    HomePage.AlphaventAdditionalFeatures(productAdditionalFeatures, contentWrapper)
    Navbar.showAlphaventBackBtn(selected_alphavent)
  }

  // Alphavent Product Additional Features
  static AlphaventAdditionalFeatures(productAdditionalFeatures, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Additional Features"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = productAdditionalFeatures
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)

  }

  // Alphavent Product Eyelet
  static AlphaventProductEyelet(productEyelet, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Eyelet"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = productEyelet
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Alphavent Product Compatability
  static AlphaventInstrumentCompatibility(productInstrumentCompatibility, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Instrument Compatibility"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)
    contentWrapper.appendChild(insertNameDiv)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "alphavent-name-div")
    
    productInstrumentCompatibility.map(item => {
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "alphavent-name-text")
    insertNameText.innerText = item
    insertNameTextDiv.appendChild(insertNameText)
    insertNameDiv.appendChild(insertNameTextDiv)       
    })
    contentWrapper.appendChild(insertNameDiv) 
    HomePage.root().appendChild(contentWrapper)
  }

  // Alphavent Pilot Hole Width
  static AlphaventPilotHoleWidth(productPilotHoleWidth, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Pilot Hole Width"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)
    contentWrapper.appendChild(insertNameDiv)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "alphavent-name-div")
    
    productPilotHoleWidth.map(item => {
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "alphavent-name-text")
    insertNameText.innerText = item
    insertNameTextDiv.appendChild(insertNameText)
    // insertNameDiv.appendChild(insertNameTextDiv)  
    })
    contentWrapper.appendChild(insertNameTextDiv)      
    HomePage.root().appendChild(contentWrapper)
  }

  // Alphavent Pilot Hole Depth
  static AlphaventPilotHoleDepth(productPilotHoleDepth, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Pilot Hole Depth"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = productPilotHoleDepth
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Alphavent Width
  static AlphaventWidth(productWidth, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Diameter"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = productWidth
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Alphavent Length
  static AlphaventLength(productLength, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Length"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = productLength
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Alphavent PNs Configuration
  static AlphaventPNsConfiguration(alphaventPnsConfigurations, contentWrapper){
    const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Part Number Configuration"
      insertNameTitleDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTitleDiv)
      

    // PN Configuration Image 
    const pnConfigImgDiv = document.createElement('div')
    pnConfigImgDiv.setAttribute('class', 'details-img-div')
    if (alphaventPnsConfigurations.length == 10) {
      pnConfigImgDiv.setAttribute('id', 'config-div-475')
    } else if (alphaventPnsConfigurations.length == 8) {
      pnConfigImgDiv.setAttribute('id', 'config-div-55')
    } else {
      pnConfigImgDiv.setAttribute('id', 'config-div-65')
    }
    insertNameDiv.appendChild(pnConfigImgDiv)

    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Adaptable Beach Chair Details 
  static renderAdaptableBeachChairDetails(selectedCapitalProducts) {
    const contentWrapper = document.createElement('div')
    contentWrapper.setAttribute('class', 'content-wrapper')
    const selectedProductName = selectedCapitalProducts[0].title
    const selectedProductPn = selectedCapitalProducts[0].pn
    const selectedProductDescription = selectedCapitalProducts[0].description
    const selectedProductWeight = selectedCapitalProducts[0].chair_weight
    const selectedProductWeightLimit = selectedCapitalProducts[0].patient_weight_limit
    const selectProductHeightRange = selectedCapitalProducts[0].patient_height_range
    HomePage.scrollToTop()
    HomePage.ProductName(selectedProductName, contentWrapper)
    HomePage.ProductPn(selectedProductPn, contentWrapper)
    HomePage.ProductDescription(selectedProductDescription, contentWrapper)
    HomePage.ABCChairWeight(selectedProductWeight, contentWrapper)
    HomePage.ABCPatientWeightLimit(selectedProductWeightLimit, contentWrapper)
    HomePage.ABCPatientHeightRange(selectProductHeightRange, contentWrapper)
    HomePage.ABCBenefitsForAnesthesia(selectedCapitalProducts, contentWrapper)
    HomePage.ABCBenefitsForSurgeons(selectedCapitalProducts, contentWrapper)
    HomePage.ABCBenefitsForStaff(selectedCapitalProducts, contentWrapper)
    HomePage.ABCBenefitsForPatients(selectedCapitalProducts, contentWrapper)
    HomePage.ABCDisposables(selectedCapitalProducts, contentWrapper)
    HomePage.ABCBReplacementParts(selectedCapitalProducts, contentWrapper)
  }

  // Product Name
  static ProductName(selectedProductName, contentWrapper) {
    const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      // insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Name"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = selectedProductName
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
  }

  // Product PN
  static ProductPn(selectedProductPn, contentWrapper) {
    const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Part Number"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = selectedProductPn
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
  }

  // Product Description 
  static ProductDescription(selectedProductDescription, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Description"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedProductDescription
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // ABC Chair Weight
  static ABCChairWeight(selectedCapitalProduct, contentWrapper){
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Chair Weight"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedCapitalProduct
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // ABC Patient Weight Limit
  static ABCPatientWeightLimit(selectedCapitalProduct, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Patient Weight Limit"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedCapitalProduct
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // ABC Height Range 
  static ABCPatientHeightRange(selectedCapitalProduct, contentWrapper) {
    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Patient Height Range"
    insertNameTitleDiv.appendChild(insertNameTitle)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "name-div")
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "product-name-div")
    insertNameText.innerText = selectedCapitalProduct
    insertNameTextDiv.appendChild(insertNameText)

    insertNameDiv.appendChild(insertNameTitleDiv)
    insertNameDiv.appendChild(insertNameTextDiv)
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // ABC Benefits for Anethesia 
  static ABCBenefitsForAnesthesia(selectedCapitalProduct, contentWrapper) {
    const benefitArray = selectedCapitalProduct[0].benefits_for_anesthesia

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Benefits for Anesthesia"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "benefits-div")

    benefitArray.map((item, index) => {
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "benefits-info")
    insertNameText.innerText = `${index + 1}. ${item}`
    insertNameTextDiv.appendChild(insertNameText)
   
    }) 
    
    insertNameDiv.appendChild(insertNameTextDiv)

    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Benefits for Surgeons 
  static ABCBenefitsForSurgeons(selectedCapitalProduct, contentWrapper) {
    const benefitArray = selectedCapitalProduct[0].benefits_for_surgeon

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Benefits for Surgeon"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "benefits-div")

    benefitArray.map((item, index) => {
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "benefits-info")
    insertNameText.innerText = `${index + 1}. ${item}`
    insertNameTextDiv.appendChild(insertNameText)
    insertNameDiv.appendChild(insertNameTextDiv)
    })      
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)

  }

  // Benefits for Staff 
  static ABCBenefitsForStaff(selectedCapitalProduct, contentWrapper) {
    const benefitArray = selectedCapitalProduct[0].benefits_for_staff

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Benefits for Staff"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "benefits-div")

    benefitArray.map((item, index) => {
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "benefits-info")
    insertNameText.innerText = `${index + 1}. ${item}`
    insertNameTextDiv.appendChild(insertNameText)
    insertNameDiv.appendChild(insertNameTextDiv)
    })      
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // Benefits for Patients
  static ABCBenefitsForPatients(selectedCapitalProduct, contentWrapper) {
    const benefitArray = selectedCapitalProduct[0].benefits_for_patient

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "insert-details-title")
    insertNameTitle.innerText = "Benefits for Patient"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    const insertNameTextDiv = document.createElement("div")
    insertNameTextDiv.setAttribute("class", "benefits-div")

    benefitArray.map((item, index) => {
    const insertNameText = document.createElement("p")
    insertNameText.setAttribute("class", "benefits-info")
    insertNameText.innerText = `${index + 1}. ${item}`
    insertNameTextDiv.appendChild(insertNameText)
    insertNameDiv.appendChild(insertNameTextDiv)
    })      
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }


  // ABC Disposables 
  static ABCDisposables(selectedCapitalProduct, contentWrapper) {
    const benefitArray = selectedCapitalProduct[0].disposables

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "replacement-parts-details-title")
    insertNameTitle.innerText = "Disposables:"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    // Disposable Parts Image 
    const replacementPartsImageDiv = document.createElement('div')
    replacementPartsImageDiv.setAttribute('class', 'dispoables-img-div')
    replacementPartsImageDiv.setAttribute('id', 'dispoables-image')
    insertNameDiv.appendChild(replacementPartsImageDiv)
   
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  // ABC Replacement Parts 
  static ABCBReplacementParts(selectedCapitalProduct, contentWrapper) {
    const benefitArray = selectedCapitalProduct[0].replacement_parts

    const insertNameDiv = document.createElement("div")
    insertNameDiv.setAttribute("class", "content-details-div")
    insertNameDiv.setAttribute("id", "insert-name-div")

    const insertNameTitleDiv = document.createElement('div')
    insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
    const insertNameTitle = document.createElement("h3")
    insertNameTitle.setAttribute("class", "replacement-parts-details-title")
    insertNameTitle.innerText = "Replacement Parts:"
    insertNameTitleDiv.appendChild(insertNameTitle)
    insertNameDiv.appendChild(insertNameTitleDiv)

    // Replacement Parts Image 
    const replacementPartsImageDiv = document.createElement('div')
    replacementPartsImageDiv.setAttribute('class', 'details-img-div')
    replacementPartsImageDiv.setAttribute('id', `replacement-img-${selectedCapitalProduct[0].pn}`)
    insertNameDiv.appendChild(replacementPartsImageDiv)
   
    contentWrapper.appendChild(insertNameDiv)
    HomePage.root().appendChild(contentWrapper)

  }
  

  static getImplantDetails(selectedInsert) {
    const inserts = Store.getInserts()
    const selectedInserts = []
    inserts.map((insert) => {
      if (insert.implant.pn === selectedInsert.id) {
        return selectedInserts.push(insert)
      }
    })
    HomePage.renderInsertDetails(selectedInserts, selectedInsert)
    Navbar.showBackBtn(selectedInserts)
  }

  static getErrorDetails(selectedError) {
    const errors = Store.getXf2Errors()
    const selectedErrors = []
    errors.map((error) => {
      if (error.id === selectedError.id) {
        return selectedErrors.push(error)
      }
    })
    HomePage.renderErrorDetails(selectedErrors, selectedError)
    Navbar.showBackBtn(selectedErrors)
  }

  static getXflowErrorDetails(selectedError) {
    const errors = Store.getXflowErrors()
    const selectedErrors = []
    errors.map((error) => {
      if (error.id === selectedError.id) {
        return selectedErrors.push(error)
      }
    })
    HomePage.renderErrorDetails(selectedErrors, selectedError)
    Navbar.showBackBtn(selectedErrors)
  }

  static renderErrorDetails(selectedErrors, selectedError) {
    if (selectedErrors[0].type) {
      HomePage.scrollToTop()
      HomePage.errorId(selectedErrors)
      HomePage.errorDescription(selectedErrors)
      HomePage.errorTroubleshooting(selectedErrors)
      HomePage.errorType(selectedErrors)
      HomePage.errorCause(selectedErrors)
    } else {
      HomePage.scrollToTop()
      HomePage.errorId(selectedErrors)
      HomePage.errorCategory(selectedErrors)
      HomePage.errorSolution(selectedErrors)
      HomePage.errorDescription(selectedErrors)
    }
  }

  static errorTroubleshooting(selectedErrors) {
    selectedErrors.map((error) => {
      const errorTroubleshootingDiv = document.createElement("div")
      errorTroubleshootingDiv.setAttribute("class", "insert-details-div")
      const errorTroubleshootingTitle = document.createElement("h3")
      errorTroubleshootingTitle.setAttribute("class", "insert-details-title")
      const errorTroubleshootingTextDiv = document.createElement("div")
      errorTroubleshootingTextDiv.setAttribute(
        "class",
        "insert-details-text-div"
      )
      const errorTroubleshootingText = document.createElement("p")
      errorTroubleshootingText.setAttribute("class", "insert-details-text")
      errorTroubleshootingTitle.innerText = "Troubleshooting"
      errorTroubleshootingText.innerText = error.troubleshooting
      errorTroubleshootingTextDiv.appendChild(errorTroubleshootingText)
      errorTroubleshootingDiv.appendChild(errorTroubleshootingTitle)
      errorTroubleshootingDiv.appendChild(errorTroubleshootingTextDiv)
      HomePage.root().appendChild(errorTroubleshootingDiv)
    })
  }

  static errorType(selectedErrors) {
    selectedErrors.map((error) => {
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "insert-details-div")
      const errorTypeTitle = document.createElement("h3")
      errorTypeTitle.setAttribute("class", "insert-details-title")
      const errorTypeTextDiv = document.createElement("div")
      errorTypeTextDiv.setAttribute("class", "insert-details-text-div")
      const errorTypeText = document.createElement("p")
      errorTypeText.setAttribute("class", "insert-details-text")
      errorTypeTitle.innerText = "Type"
      errorTypeText.innerText = error.type
      errorTypeTextDiv.appendChild(errorTypeText)
      errorTypeDiv.appendChild(errorTypeTitle)
      errorTypeDiv.appendChild(errorTypeTextDiv)
      HomePage.root().appendChild(errorTypeDiv)
    })
  }

  static errorCause(selectedErrors) {
    selectedErrors.map((error) => {
      const errorCauseDiv = document.createElement("div")
      errorCauseDiv.setAttribute("class", "insert-details-div")
      const errorCauseTitle = document.createElement("h3")
      errorCauseTitle.setAttribute("class", "insert-details-title")
      const errorCauseTextDiv = document.createElement("div")
      errorCauseTextDiv.setAttribute("class", "insert-details-text-div")
      const errorCauseText = document.createElement("p")
      errorCauseText.setAttribute("class", "insert-details-text")
      errorCauseTitle.innerText = "Cause"
      errorCauseText.innerText = error.cause
      errorCauseTextDiv.appendChild(errorCauseText)
      errorCauseDiv.appendChild(errorCauseTitle)
      errorCauseDiv.appendChild(errorCauseTextDiv)
      HomePage.root().appendChild(errorCauseDiv)
    })
  }

  static errorSolution(selectedErrors) {
    selectedErrors.map((error) => {
      const errorSolutionDiv = document.createElement("div")
      errorSolutionDiv.setAttribute("class", "insert-details-div")
      const errorSolutionTitle = document.createElement("h3")
      errorSolutionTitle.setAttribute("class", "insert-details-title")
      const errorSolutionTextDiv = document.createElement("div")
      errorSolutionTextDiv.setAttribute("class", "insert-details-text-div")
      const errorSolutionText = document.createElement("p")
      errorSolutionText.setAttribute("class", "insert-details-text")
      errorSolutionTitle.innerText = "Solution"
      errorSolutionText.innerText = error.Solution
      errorSolutionTextDiv.appendChild(errorSolutionText)
      errorSolutionDiv.appendChild(errorSolutionTitle)
      errorSolutionDiv.appendChild(errorSolutionTextDiv)
      HomePage.root().appendChild(errorSolutionDiv)
    })
  }

  static getShaverDetails(selectedShaver) {
    const shavers = Store.getShavers()
    const selectedShavers = []
    shavers.map((shaver) => {
      if (shaver.PartNumber === selectedShaver.id) {
        return selectedShavers.push(shaver)
      }
    })
    HomePage.renderShaverDetails(selectedShavers, selectedShaver)
    Navbar.showBackBtn(selectedShavers)
  }

  static renderShaverDetails(selectedShavers, selectedShaver) {
    HomePage.scrollToTop()
    HomePage.shaverName(selectedShavers)
    HomePage.shaverPn(selectedShavers)
    HomePage.shaverOscDefault(selectedShavers)
    HomePage.shaverOscMax(selectedShavers)
    HomePage.shaverHighSpeedDefault(selectedShavers)
    HomePage.shaverHighSpeedMax(selectedShavers)
    HomePage.shaverLowSpeedDefault(selectedShavers)
    HomePage.shaverLowSpeedMax(selectedShavers)
    HomePage.shaverSpeedStepIncr(selectedShavers)
  }

  static errorId(selectedErrors) {
    selectedErrors.map((error) => {
      const errorIdDiv = document.createElement("div")
      errorIdDiv.setAttribute("class", "insert-details-div")
      errorIdDiv.setAttribute("id", "insert-name-div")
      if (error.type) {
        errorIdDiv.setAttribute("data-name", `${error.id}-xflow`)
      }
      errorIdDiv.setAttribute("data-name", `${error.id}-xf2`)
      const errorIdTitle = document.createElement("h3")
      errorIdTitle.setAttribute("class", "insert-details-title")
      const errorIdTextDiv = document.createElement("div")
      errorIdTextDiv.setAttribute("class", "insert-details-text-div")
      const errorIdText = document.createElement("p")
      errorIdText.setAttribute("class", "insert-details-text")
      errorIdTitle.innerText = "Error Code"
      errorIdText.innerText = error.id
      errorIdTextDiv.appendChild(errorIdText)
      errorIdDiv.appendChild(errorIdTitle)
      errorIdDiv.appendChild(errorIdTextDiv)
      HomePage.root().appendChild(errorIdDiv)
    })
  }

  static errorDescription(selectedErrors) {
    selectedErrors.map((error) => {
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "insert-details-div")
      const errorTypeTitle = document.createElement("h3")
      errorTypeTitle.setAttribute("class", "insert-details-title")
      const errorTypeTextDiv = document.createElement("div")
      errorTypeTextDiv.setAttribute("class", "insert-details-text-div")
      const errorTypeText = document.createElement("p")
      errorTypeText.setAttribute("class", "insert-details-text")
      errorTypeTitle.innerText = "Description"
      errorTypeText.innerText = error.Description
      errorTypeTextDiv.appendChild(errorTypeText)
      errorTypeDiv.appendChild(errorTypeTitle)
      errorTypeDiv.appendChild(errorTypeTextDiv)
      HomePage.root().appendChild(errorTypeDiv)
    })
  }

  static errorCategory(selectedErrors) {
    selectedErrors.map((error) => {
      const errorCategoryDiv = document.createElement("div")
      errorCategoryDiv.setAttribute("class", "insert-details-div")
      const errorCategoryTitle = document.createElement("h3")
      errorCategoryTitle.setAttribute("class", "insert-details-title")
      const errorCategoryTextDiv = document.createElement("div")
      errorCategoryTextDiv.setAttribute("class", "insert-details-text-div")
      const errorCategoryText = document.createElement("p")
      errorCategoryText.setAttribute("class", "insert-details-text")
      errorCategoryTitle.innerText = "Category"
      errorCategoryText.innerText = error.Category
      errorCategoryTextDiv.appendChild(errorCategoryText)
      errorCategoryDiv.appendChild(errorCategoryTitle)
      errorCategoryDiv.appendChild(errorCategoryTextDiv)
      HomePage.root().appendChild(errorCategoryDiv)
    })
  }

  static shaverSpeedStepIncr(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Speed Step Incrument"
      insertNameText.innerText = shaver.SpeedStepIncr
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverLowSpeedMax(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Low Speed Maximum"
      insertNameText.innerText = `${shaver.LowSpeedMax} rpms`
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverLowSpeedDefault(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Low Speed Default"
      insertNameText.innerText = shaver.LowSpeedDefault
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverHighSpeedMax(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "High Speed Maximum"
      insertNameText.innerText = `${shaver.HighSpeedMax} rpms`
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverHighSpeedDefault(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "High Speed Default"
      insertNameText.innerText = shaver.HighSpeedDefault
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverOscDefault(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Oscillation Default"
      insertNameText.innerText = shaver.OscillateDefault
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverOscMax(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Oscillation Maximum"
      insertNameText.innerText = `${shaver.OscillateMax} rpms`
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverName(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      insertNameDiv.setAttribute("id", "insert-name-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Name"
      insertNameText.innerText = shaver.Name
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static shaverPn(selectedShavers) {
    selectedShavers.map((shaver) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "insert-details-div")
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "insert-details-text-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "insert-details-text")
      insertNameTitle.innerText = "Part Number"
      insertNameText.innerText = shaver.PartNumber
      insertNameTextDiv.appendChild(insertNameText)
      insertNameDiv.appendChild(insertNameTitle)
      insertNameDiv.appendChild(insertNameTextDiv)
      HomePage.root().appendChild(insertNameDiv)
    })
  }

  static getProbeDetails(selectedProbe) {
    const probes = Store.getProbes()
    const selectedProbes = []
    probes.map((probe) => {
      if (probe.probe.pn === selectedProbe.id) {
        return selectedProbes.push(probe)
      }
    })
    HomePage.renderProbeDetails(selectedProbes)
    Navbar.showBackBtn(selectedProbes)
  }

  static probeName(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Name"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.name
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static probePn(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Part Number"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.pn
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static probeLength(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Length"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.length
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static probeOuterDiamter(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Outer Diameter"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.outer_diameter
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static probeCoag(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Coag"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.coag
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static probeCutDefault(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Cut Default"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.cut_default
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static probeCutMax(selectedProbes, contentWrapper) {
    selectedProbes.map((probe) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", probe.probe.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Cut Max"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = probe.probe.cut_max
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static renderProbeDetails(selectedProbes) {
    const contentWrapper = document.createElement('div')
    contentWrapper.setAttribute('class', 'content-wrapper')
    HomePage.scrollToTop()
    HomePage.probeName(selectedProbes, contentWrapper)
    HomePage.probePn(selectedProbes, contentWrapper)
    HomePage.probeLength(selectedProbes, contentWrapper)
    HomePage.probeOuterDiamter(selectedProbes, contentWrapper)
    HomePage.probeCoag(selectedProbes, contentWrapper)
    HomePage.probeCutDefault(selectedProbes, contentWrapper)
    HomePage.probeCutMax(selectedProbes, contentWrapper)
  }

  static implantName(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Name"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.name
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantPn(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Part Number"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.pn
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantMaterial(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Material"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.MATERIAL
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantDrillDepth(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Drill Depth"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.IMPLANT_DRILL_DEPTH
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }
  static implantDrillWidth(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Drill Width"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.IMPLANT_DRILL_WIDTH
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantLength(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Length"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.IMPLANT_LENGTH
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantWidth(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Diameter"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.IMPLANT_WIDTH
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantNotes(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Notes"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.NOTES
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantPositiveStop(selectedInserts, contentWrapper) {
    selectedInserts.map((insert) => {
      const insertNameDiv = document.createElement("div")
      insertNameDiv.setAttribute("class", "content-details-div")
      insertNameDiv.setAttribute("data-index", insert.implant.id)
      insertNameDiv.setAttribute("id", "insert-name-div")

      const insertNameTitleDiv = document.createElement('div')
      insertNameTitleDiv.setAttribute('class', 'product-name-title-div')
      const insertNameTitle = document.createElement("h3")
      insertNameTitle.setAttribute("class", "insert-details-title")
      insertNameTitle.innerText = "Positive Stop"
      insertNameTitleDiv.appendChild(insertNameTitle)

      const insertNameTextDiv = document.createElement("div")
      insertNameTextDiv.setAttribute("class", "name-div")
      const insertNameText = document.createElement("p")
      insertNameText.setAttribute("class", "product-name-div")
      insertNameText.innerText = insert.implant.POSITIVE_STOP
      insertNameTextDiv.appendChild(insertNameText)

      insertNameDiv.appendChild(insertNameTitleDiv)
      insertNameDiv.appendChild(insertNameTextDiv)
      contentWrapper.appendChild(insertNameDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantIconixOneImage(filteredInsertSelection, contentWrapper) {
    filteredInsertSelection.map(() => {
      const insertUrlTextDiv = document.createElement("div")
      insertUrlTextDiv.setAttribute("class", "content-details-div")
      const insertUrlDiv = document.createElement("div")
      insertUrlDiv.setAttribute("class", "insert-img-div")
      insertUrlDiv.setAttribute("id", "iconix1-img-div")
      const insertUrlTitle = document.createElement("h3")
      insertUrlTitle.setAttribute("class", "insert-details-title")
      insertUrlTitle.innerText = "ICONIX 1 - Drill Image"
      insertUrlTextDiv.appendChild(insertUrlTitle)
      insertUrlTextDiv.appendChild(insertUrlDiv)
      contentWrapper.appendChild(insertUrlTextDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static implantIconixTwoImage(filteredInsertSelection, contentWrapper) {
    filteredInsertSelection.map(() => {
      const insertUrlTextDiv = document.createElement("div")
      insertUrlTextDiv.setAttribute("class", "content-details-div")
      const insertUrlDiv = document.createElement("div")
      insertUrlDiv.setAttribute("class", "insert-img-div")
      insertUrlDiv.setAttribute("id", "iconix2-img-div")
      const insertUrlTitle = document.createElement("h3")
      insertUrlTitle.setAttribute("class", "insert-details-title")
      insertUrlTitle.innerText = "ICONIX 2 - Drill Image"
      insertUrlTextDiv.appendChild(insertUrlTitle)
      insertUrlTextDiv.appendChild(insertUrlDiv)
      contentWrapper.appendChild(insertUrlTextDiv)
      HomePage.root().appendChild(contentWrapper)
    })
  }

  static filterNeedleData(selectedInsert, contentWrapper) {
    if (
      selectedInsert.id === "3910-500-412" ||
      selectedInsert.id === "3910-500-212" ||
      selectedInsert.id === "3910-500-422"
    ) {
      const needles = Store.getNeedles().needles[1]
      HomePage.renderNeedleData(needles, contentWrapper)
    } else if (selectedInsert.id === "3910-500-222") {
      const needles = Store.getNeedles().needles[0]
      HomePage.renderNeedleData(needles, contentWrapper)
    }
  }
  static renderNeedleData(needles, contentWrapper) {
    const needlesDetailsContainer = document.createElement("div")
    needlesDetailsContainer.setAttribute("class", "content-details-div")
    const needleTitle = document.createElement("h3")
    needleTitle.setAttribute("class", "insert-details-title")
    needleTitle.innerText = "Needle Specifications"
    const needleDetailsDiv = document.createElement("div")
    needleDetailsDiv.setAttribute("class", "needle-details-div")
    // Point Style
    const needlePointStyle = document.createElement("div")
    needlePointStyle.setAttribute("class", "needle-details")
    needlePointStyle.innerText = `Point Style: `
    // Point style
    const pointStyle = document.createElement("span")
    pointStyle.setAttribute("class", "wire-diameter")
    pointStyle.innerText = needles.point_style
    needlePointStyle.appendChild(pointStyle)
    needleDetailsDiv.appendChild(needlePointStyle)
    // Circle
    const needleCircle = document.createElement("div")
    needleCircle.setAttribute("class", "needle-details")
    needleCircle.innerText = `Circle: `
    needleDetailsDiv.appendChild(needleCircle)
    // Circle
    const circle = document.createElement("span")
    circle.setAttribute("class", "wire-diameter")
    circle.innerText = needles.circle
    needleCircle.appendChild(circle)
    needleDetailsDiv.appendChild(needleCircle)
    // Wire Diamter
    const needleWireDiameter = document.createElement("div")
    needleWireDiameter.setAttribute("class", "needle-details")
    needleWireDiameter.innerText = `Wire Diamter`
    // Min
    const wireDiameterMin = document.createElement("div")
    wireDiameterMin.setAttribute("class", "wire-diameter")
    wireDiameterMin.innerText = `Min: ${needles.wire_diamter.min}`
    needleWireDiameter.appendChild(wireDiameterMin)
    // Max
    const wireDiameterMax = document.createElement("div")
    wireDiameterMax.setAttribute("class", "wire-diameter")
    wireDiameterMax.innerText = `Max: ${needles.wire_diamter.max}`
    needleWireDiameter.appendChild(wireDiameterMax)

    needleDetailsDiv.appendChild(needleWireDiameter)
    // Wire Radius
    const needleWireRadius = document.createElement("div")
    needleWireRadius.setAttribute("class", "needle-details")
    needleWireRadius.innerText = `Radius`
    // Min
    const wireRadiusMin = document.createElement("div")
    wireRadiusMin.setAttribute("class", "wire-diameter")
    wireRadiusMin.innerText = `Min: ${needles.radius.min}`
    needleWireRadius.appendChild(wireRadiusMin)
    // Max
    const wireRadiusMax = document.createElement("div")
    wireRadiusMax.setAttribute("class", "wire-diameter")
    wireRadiusMax.innerText = `Max: ${needles.radius.max}`
    needleWireRadius.appendChild(wireRadiusMax)

    needleDetailsDiv.appendChild(needleWireRadius)
    // Needle Length
    const needleWireLength = document.createElement("div")
    needleWireLength.setAttribute("class", "needle-details")
    needleWireLength.innerText = `Needle Length`
    // Min
    const wireLengthMin = document.createElement("div")
    wireLengthMin.setAttribute("class", "wire-diameter")
    wireLengthMin.innerText = `Min: ${needles.needle_length.min}`
    needleWireLength.appendChild(wireLengthMin)
    // Max
    const wireLengthMax = document.createElement("div")
    wireLengthMax.setAttribute("class", "wire-diameter")
    wireLengthMax.innerText = `Max: ${needles.needle_length.max}`
    needleWireLength.appendChild(wireLengthMax)

    needleDetailsDiv.appendChild(needleWireLength)
    // Bore Diameter
    const needleboreDiameter = document.createElement("div")
    needleboreDiameter.setAttribute("class", "needle-details")
    needleboreDiameter.innerText = `Bore Diameter`
    // Min
    const boreDiameterMin = document.createElement("div")
    boreDiameterMin.setAttribute("class", "wire-diameter")
    boreDiameterMin.innerText = `Min: ${needles.bore_diameter.min}`
    needleboreDiameter.appendChild(boreDiameterMin)
    // Max
    const boreDiameterMax = document.createElement("div")
    boreDiameterMax.setAttribute("class", "wire-diameter")
    boreDiameterMax.innerText = `Max: ${needles.bore_diameter.max}`
    needleboreDiameter.appendChild(boreDiameterMax)

    needleDetailsDiv.appendChild(needleboreDiameter)
    // Bore Depth
    const needleboreDepth = document.createElement("div")
    needleboreDepth.setAttribute("class", "needle-details")
    needleboreDepth.innerText = `Bore Depth`
    // Min
    const boreDepthMin = document.createElement("div")
    boreDepthMin.setAttribute("class", "wire-diameter")
    boreDepthMin.innerText = `Min: ${needles.bore_depth.min}`
    needleboreDepth.appendChild(boreDepthMin)
    // Max
    const boreDepthMax = document.createElement("div")
    boreDepthMax.setAttribute("class", "wire-diameter")
    boreDepthMax.innerText = `Max: ${needles.bore_depth.max}`
    needleboreDepth.appendChild(boreDepthMax)

    needleDetailsDiv.appendChild(needleboreDepth)

    needlesDetailsContainer.appendChild(needleTitle)
    needlesDetailsContainer.appendChild(needleDetailsDiv)
    contentWrapper.appendChild(needlesDetailsContainer)
    HomePage.root().appendChild(contentWrapper)
  }

  static iconixImage(selectedInserts, filteredInsertSelection, contentWrapper) {
    selectedInserts.map((insert) => {
      if (
        insert.implant.name === "ICONIX 1" ||
        insert.implant.name === "ICONIX 1 TT"
      ) {
        HomePage.implantIconixOneImage(filteredInsertSelection, contentWrapper)
      } else if (
        insert.implant.name === "ICONIX 2" ||
        insert.implant.name === "ICONIX 2 TT"
      ) {
        HomePage.implantIconixTwoImage(filteredInsertSelection, contentWrapper)
      }
    })
  }

  static trocarImage(selectedInserts, contentWrapper) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "content-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "trocar-img-div")
    insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "Trocar Measurements:"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    contentWrapper.appendChild(insertUrlTextDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  static filteredInsertSelection(selectedInserts, selectedInsert) {
    let filteredInsertSelection = []
    if (selectedInserts.length > 1) {
      selectedInserts.map((insert) => {
        if (
          insert.implant.name.includes("needles") &&
          selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        } else if (
          !insert.implant.name.includes("needles") &&
          !selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        }
      })
    } else {
      filteredInsertSelection = selectedInserts
    }
  }



  static renderInsertDetails(selectedInserts, selectedInsert) {
    const contentWrapper = document.createElement('div')
    contentWrapper.setAttribute('class', 'content-wrapper')
    // HomePage.filterForIconixInserts()
    let filteredInsertSelection = []
    if (selectedInserts.length > 1) {
      selectedInserts.map((insert) => {
        if (
          insert.implant.name.includes("needles") &&
          selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        } else if (
          !insert.implant.name.includes("needles") &&
          !selectedInsert.children[0].textContent.includes("needles")
        ) {
          filteredInsertSelection.push(insert)
        }
      })
    } else {
      filteredInsertSelection = selectedInserts
    }
    HomePage.scrollToTop()
    HomePage.implantName(filteredInsertSelection, contentWrapper)
    HomePage.implantPn(filteredInsertSelection, contentWrapper)
    // Trocar image
    if (
      selectedInsert.id === "3910-500-931" ||
      selectedInsert.id === "3910-500-920" ||
      selectedInsert.id === "3910-500-922" ||
      selectedInsert.id === "3910-500-921"
    ) {
      HomePage.trocarImage(selectedInserts, contentWrapper)
    }
    // Iconix 1 and 2 images
    HomePage.iconixImage(selectedInserts, filteredInsertSelection, contentWrapper)
    // Needle data and image
    HomePage.filterNeedleData(selectedInsert, contentWrapper)

    // Measurement image insert
    selectedInserts.map((insert) => {
      const reuableInsert = insert.implant.pn
      if (
        insert.implant.name.includes("ICONIX") &&
        insert.implant.id !== "3910-2" &&
        insert.implant.id !== "3910-4"
      ) {
        HomePage.implantMeasurementImg(contentWrapper)
      } else if (
        insert.implant.pn === "3910-500-391" ||
        insert.implant.pn === "3910-500-392"
      ) {
        HomePage.implantReusableImage3_9(reuableInsert, contentWrapper)
      } else if (
        insert.implant.pn === "3910-500-471" ||
        insert.implant.pn === "3910-500-472"
      ) {
        HomePage.implantReusableImage4_7(reuableInsert, contentWrapper)
      } else {
        return
      }
    })
    HomePage.implantMaterial(filteredInsertSelection, contentWrapper)
    HomePage.implantLength(filteredInsertSelection, contentWrapper)
    HomePage.implantWidth(filteredInsertSelection, contentWrapper)
    HomePage.implantDrillDepth(filteredInsertSelection, contentWrapper)
    HomePage.implantDrillWidth(filteredInsertSelection, contentWrapper)
    HomePage.implantNotes(filteredInsertSelection, contentWrapper)
    HomePage.implantPositiveStop(filteredInsertSelection, contentWrapper)
  }

  static implantReusableImage3_9(reusableInsert, contentWrapper) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "insert-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "reusable3_9-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "Reusable Instrumentation:"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    contentWrapper.appendChild(insertUrlTextDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  static implantReusableImage4_7(reusableInsert, contentWrapper) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "insert-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "reusable4_7-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "Reusable Instrumentation:"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    contentWrapper.appendChild(insertUrlTextDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  static implantMeasurementImg(contentWrapper) {
    const insertUrlTextDiv = document.createElement("div")
    insertUrlTextDiv.setAttribute("class", "content-details-div")
    const insertUrlDiv = document.createElement("div")
    insertUrlDiv.setAttribute("class", "measurement-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const insertUrlTitle = document.createElement("h3")
    insertUrlTitle.setAttribute("class", "insert-details-title")
    insertUrlTitle.innerText = "ICONIX Measurements"
    insertUrlTextDiv.appendChild(insertUrlTitle)
    insertUrlTextDiv.appendChild(insertUrlDiv)
    contentWrapper.appendChild(insertUrlTextDiv)
    HomePage.root().appendChild(contentWrapper)
  }

  static renderSearchField() {
    // Search feature
    const inputDiv = document.createElement("div")
    inputDiv.setAttribute("class", "search-container")
    inputDiv.setAttribute("id", "input-div")
  //   inputDiv.innerHTML = '<i class="fas fa-search"></i>'
    const inputTag = document.createElement("input")
    inputTag.setAttribute("class", "input-field")
    inputTag.setAttribute("type", "text")
    inputTag.setAttribute("id", "input-field")
    inputTag.setAttribute("name", "input-field")
    inputTag.setAttribute("placeholder", "Search by name or part number")
    inputDiv.appendChild(inputTag)
    root.appendChild(inputDiv)
    //
  }

  static renderSmallJointProbes(smallJointProbes) {
    const root = HomePage.root()
    const probesTitleDiv = document.createElement("div")
    probesTitleDiv.setAttribute("class", "probes-title-div")
    probesTitleDiv.innerText = "Small Joint Probes:"
    root.appendChild(probesTitleDiv)
    const probesContainer = document.createElement("div")
    probesContainer.setAttribute("class", "content-wrapper")
    probesContainer.setAttribute("id", "probes-container")
    smallJointProbes.map((probe) => {
      const probeDiv = document.createElement("div")
      probeDiv.setAttribute("class", "content-div")
      probeDiv.setAttribute("id", probe.probe.pn)
      const probeNameDiv = document.createElement("div")
      probeNameDiv.setAttribute("class", "content-title-div")
      const probePnDiv = document.createElement("div")
      probePnDiv.setAttribute("class", "content-description-div")

      probeNameDiv.innerText = probe.probe.name
      probePnDiv.innerText = probe.probe.pn
      probeDiv.appendChild(probeNameDiv)
      probeDiv.appendChild(probePnDiv)
      probesContainer.appendChild(probeDiv)
    })
    root.appendChild(probesContainer)
  }

  static renderProbes(probes) {
    const root = HomePage.root()
    const probesContainer = document.createElement("div")
    probesContainer.setAttribute("class", "content-wrapper")
    probesContainer.setAttribute("id", "probes-container")
    const suctionDiv = document.createElement("div")
    suctionDiv.setAttribute("class", "suction-div")
    suctionDiv.setAttribute("id", "top-suction-div")
    const suctionTitle = document.createElement("h3")
    suctionTitle.setAttribute("class", "section-title")
    suctionTitle.innerText = "Suction Probes"
    suctionDiv.appendChild(suctionTitle)

    const nonSuctionDiv = document.createElement("div")
    nonSuctionDiv.setAttribute("class", "suction-div")
    const nonSuctionTitle = document.createElement("h3")
    nonSuctionTitle.setAttribute("class", "section-title")
    nonSuctionTitle.innerText = "Non-Suction Probes"
    nonSuctionDiv.appendChild(nonSuctionTitle)

    const smallJointDiv = document.createElement("div")
    smallJointDiv.setAttribute("class", "suction-div")
    const smallJointTitle = document.createElement("h3")
    smallJointTitle.setAttribute("class", "section-title")
    smallJointTitle.innerText = "Small Joint Probes"
    smallJointDiv.appendChild(smallJointTitle)
    probes.map((probe) => {
      if (probe.probe.suction) {
        const probeDiv = document.createElement("div")
        probeDiv.setAttribute("class","content-div")
        probeDiv.setAttribute("id", probe.probe.pn)
        const probeNameDiv = document.createElement("div")
        probeNameDiv.setAttribute("class", "content-title-div")
        const probePnDiv = document.createElement("div")
        probePnDiv.setAttribute("class", "content-description-div")

        probeNameDiv.innerText = probe.probe.name
        probePnDiv.innerText = probe.probe.pn
        probeDiv.appendChild(probeNameDiv)
        probeDiv.appendChild(probePnDiv)
        suctionDiv.appendChild(probeDiv)
        probesContainer.appendChild(suctionDiv)
      } else if (probe.probe.suction === false) {
        const probeDiv = document.createElement("div")
        probeDiv.setAttribute("class", "content-div")
        probeDiv.setAttribute("id", probe.probe.pn)
        const probeNameDiv = document.createElement("div")
        probeNameDiv.setAttribute("class", "content-title-div")
        const probePnDiv = document.createElement("div")
        probePnDiv.setAttribute("class", "content-description-div")

        probeNameDiv.innerText = probe.probe.name
        probePnDiv.innerText = probe.probe.pn
        probeDiv.appendChild(probeNameDiv)
        probeDiv.appendChild(probePnDiv)
        nonSuctionDiv.appendChild(probeDiv)
        probesContainer.appendChild(nonSuctionDiv)
      } else {
        const probeDiv = document.createElement("div")
        probeDiv.setAttribute("class", "content-div")
        probeDiv.setAttribute("id", probe.probe.pn)
        const probeNameDiv = document.createElement("div")
        probeNameDiv.setAttribute("class", "content-title-div")
        const probePnDiv = document.createElement("div")
        probePnDiv.setAttribute("class", "content-description-div")

        probeNameDiv.innerText = probe.probe.name
        probePnDiv.innerText = probe.probe.pn
        probeDiv.appendChild(probeNameDiv)
        probeDiv.appendChild(probePnDiv)
        smallJointDiv.appendChild(probeDiv)
        probesContainer.appendChild(smallJointDiv)
      }
    })
    root.appendChild(probesContainer)
    Probes.bindingProbesEventListener()
  }

  static renderShavers(shavers) {
    const shaversContainer = document.createElement("div")
    shaversContainer.setAttribute("class", "content-wrapper")
    shaversContainer.setAttribute("id", "shavers-container")
    shavers.map((shaver) => {
      const shaverDiv = document.createElement("div")
      shaverDiv.setAttribute("class", "content-div")
      shaverDiv.setAttribute("id", shaver.PartNumber)
      const shaverNameDiv = document.createElement("div")
      shaverNameDiv.setAttribute("class", "content-title-div")
      const shaverPnDiv = document.createElement("div")
      shaverPnDiv.setAttribute("class", "content-description-div")
      shaverNameDiv.innerText = shaver.Name
      shaverPnDiv.innerText = shaver.PartNumber
      shaverDiv.appendChild(shaverNameDiv)
      shaverDiv.appendChild(shaverPnDiv)
      shaversContainer.appendChild(shaverDiv)
    })
    HomePage.root().appendChild(shaversContainer)
    HomePage.scrollToTop()
    Shavers.bindingShaversEventListener()
  }

  static renderXf2Errors(errors) {
    const errorsContainer = document.createElement("div")
    errorsContainer.setAttribute("class", "content-wrapper")
    errorsContainer.setAttribute("id", "shavers-container")
    errors.map((error) => {
      const errorDiv = document.createElement("div")
      errorDiv.setAttribute("class", "content-div")
      errorDiv.setAttribute("id", error.id)
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "content-title-div")
      errorTypeDiv.innerText = error.id
      errorDiv.appendChild(errorTypeDiv)
      errorsContainer.appendChild(errorDiv)
    })
    HomePage.scrollToTop()
    HomePage.root().appendChild(errorsContainer)
    Xf2Errors.bindingErrorsEventListener()
  }

  static renderXflowErrors(errors) {
    const errorsContainer = document.createElement("div")
    errorsContainer.setAttribute("class", "content-wrapper")
    errorsContainer.setAttribute("id", "shavers-container")
    errors.map((error) => {
      const errorDiv = document.createElement("div")
      errorDiv.setAttribute("class", "content-div")
      errorDiv.setAttribute("id", error.id)
      const errorTypeDiv = document.createElement("div")
      errorTypeDiv.setAttribute("class", "content-title-div")
      errorTypeDiv.innerText = error.id
      errorDiv.appendChild(errorTypeDiv)
      errorsContainer.appendChild(errorDiv)
    })
    HomePage.scrollToTop()
    HomePage.root().appendChild(errorsContainer)
    XflowErrors.bindingXflowErrorsEventListener()
  }

  static renderCapitalProducts(capitalProducts) {
    const root = HomePage.root()
    const capitalProductsContainer = document.createElement('div')
    capitalProductsContainer.setAttribute("class", "content-wrapper")
    capitalProductsContainer.setAttribute("id", "capital-products-container")
console.log(capitalProducts)
    capitalProducts.capital_products.map(product => {
      const capitalProductDiv = document.createElement("div")
      capitalProductDiv.setAttribute("class", "content-div")
      capitalProductDiv.setAttribute("id", product.pn)
      capitalProductDiv.setAttribute("data-capital", product.title)
      capitalProductDiv.setAttribute("data-navbar", product.title)
      capitalProductDiv.setAttribute("data-featureId", product.feature_id)
      const capitalProductTitleDiv = document.createElement("div")
      capitalProductTitleDiv.setAttribute("class", "content-title-div")
      capitalProductTitleDiv.innerText = product.title
      const capitalProductPnDiv = document.createElement("div")
      capitalProductPnDiv.setAttribute("class", "content-description-div")
      capitalProductPnDiv.innerText = product.pn
      capitalProductDiv.appendChild(capitalProductTitleDiv)
      capitalProductDiv.appendChild(capitalProductPnDiv)
      capitalProductsContainer.appendChild(capitalProductDiv)
      root.appendChild(capitalProductsContainer)
    })
    CapitalProducts.bindingCapitalProductsEventListener()
  }

  static renderImplantFamilies(implantFamiles) {
    const root = HomePage.root()
    const implantFamiliesContainer = document.createElement('div')
    implantFamiliesContainer.setAttribute("class", "content-wrapper")
    implantFamiliesContainer.setAttribute("id", "implant-families-container")

    implantFamiles.implant_families.map(family => {
      const implantFamiliesDiv = document.createElement("div")
      implantFamiliesDiv.setAttribute("class", "content-div")
      implantFamiliesDiv.setAttribute("id", family.id)
      implantFamiliesDiv.setAttribute("data-family", family.name)
      implantFamiliesDiv.setAttribute("data-navbar", family.name)
      const implantFamilyNameDiv = document.createElement("div")
      implantFamilyNameDiv.setAttribute("class", "content-title-div")
      implantFamilyNameDiv.innerText = family.name
      implantFamiliesDiv.appendChild(implantFamilyNameDiv)
      implantFamiliesContainer.appendChild(implantFamiliesDiv)
      root.appendChild(implantFamiliesContainer)
    })
    ImplantFamilies.bindingImplantFamiliesEventListener()
  }

  static renderImplants(implants) {
    const root = HomePage.root()
    const implantContainer = document.createElement("div")
    implantContainer.setAttribute("class", "content-wrapper")
    implantContainer.setAttribute("id", "implant-container")

    implants.map((implant) => {
      const implantDiv = document.createElement("div")
      implantDiv.setAttribute("class", "content-div")
      implantDiv.setAttribute("id", implant.implant.pn)
      implantDiv.setAttribute("data-index", implant.implant.id)
      implantDiv.setAttribute("data-navbar", implant.implant.family)
      const implantNameDiv = document.createElement("div")
      implantNameDiv.setAttribute("class", "name-div")
      const implantPnDiv = document.createElement("div")
      implantPnDiv.setAttribute("class", "pn-div")

      implantNameDiv.innerText = implant.implant.name
      implantPnDiv.innerText = implant.implant.pn
      implantDiv.appendChild(implantNameDiv)
      implantDiv.appendChild(implantPnDiv)
      implantContainer.appendChild(implantDiv)
    })
    root.appendChild(implantContainer)
    Implants.bindingImplantsEventListener()
  }

  // Arthro Default Settings
  static renderArthroDefaults() {
    const shaverFootpedalDefaults = Store.getShaverFootpedalDefaults()
    const rfFootpedalDefaultSettings = Store.getRfFootpedalDefaults()
    const shaverDefaultSettings = Store.getShaverDefaults()
    const rfDefaultSettings = Store.getRfDefaults()

    HomePage.renderShaverDefaults(shaverDefaultSettings)
    HomePage.renderShaverFootPedalDefaults(shaverFootpedalDefaults)
    HomePage.renderRfDefaults(rfDefaultSettings)
    HomePage.renderRfFootpedalDefaults(rfFootpedalDefaultSettings)
  }

  static renderShaverDefaults(shaverDefaultSettings) {
    HomePage.renderShaverDefaultsTitle()
  }



  static renderShaverDefaultsTitle() {
    const shaverUrlTextDiv = document.createElement("div")
    shaverUrlTextDiv.setAttribute("class", "insert-details-div")
    shaverUrlTextDiv.setAttribute("id", "shaver-default-details-div")
    const shaverUrlDiv = document.createElement("div")
    shaverUrlDiv.setAttribute("class", "shaver-img-div")
    // insertUrlDiv.setAttribute("id", "iconix2-img-div")
    const shaverDefaultTitle = document.createElement("h3")
    shaverDefaultTitle.setAttribute("class", "insert-details-title")
    shaverDefaultTitle.innerText = "Shaver Defaults:"
    shaverUrlTextDiv.appendChild(shaverDefaultTitle)
    shaverUrlTextDiv.appendChild(shaverUrlDiv)
    HomePage.root().appendChild(shaverUrlTextDiv)
  }

  static renderShaverFootPedalDefaults(shaverFootpedalDefaults) {
  }

  static renderRfDefaults(rfDefaultSettings) {
  }

  static renderRfFootpedalDefaults(rfFootpedalDefaultSettings) {
  }
}
