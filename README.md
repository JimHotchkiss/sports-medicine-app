# Importing data - I'm using Python.
    - import pandas as pd
    - read excel file with .read_excel
    - rund file with 'python3 data.py'
    - used excel2json to convert excel data to json object


# Components VS. Adapters
    - Adapaters are like Containers in React development: they handle data fetching and manipulation
    - Components render the data

# File structure 
    - CSS - holds all the stling files
    - Data - holds all the app's data objects
    - src - holds all the app's 'working' files

# File execution sequence 
    - src/index.js 
        * Kicks off our app, by instantiating an instance of our App class 
    - src/components/app.js
        * In the constructor(), intantiates an instance of a HomePage class
    - src/components/homePage.js 
        * It instantiates an instances of the Navbar class
            ~ And in the .callRenderNavbar() instance method, a navbar is rendered by calling the Navbar renderNavbar() instance method
        * It instantiates an instances of the Features class
             ~In its constructor(), instantiates an instance of the FeaturesAdapter()
                - The FeaturesAdapter() fetches the data that will populate our HomePage with different features
             ~ The Features class is responsible for fetching and rendering the data