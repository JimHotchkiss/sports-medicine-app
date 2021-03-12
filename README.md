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



# Data structure 
 "IMPLANT": {"ICONIX SPEED":[{"name":"Triple Loaded 1.2 mm Xbraid TT", "pn": "3910-500-931"},{"name":"Double Loaded 2.0mm Xbraid TT", "pn":"3910-500-920"},{"name":"Double Loaded #2 Force Fiber", "pn":"3910-500-922"}, {"name":"Combo 1.2 mm & 2.0mm Xbraid TT", "pn":"3910-500-921"}],

   "IMPLANT": "ICONIX SPEED\nTriple Loaded 1.2 mm Xbraid TT:\n3910-500-931\nDouble Loaded 2.0mm Xbraid TT:\n3910-500-920\nDouble Loaded #2 Force Fiber:\n3910-500-922\nCombo 1.2 mm & 2.0mm Xbraid TT:\n3910-500-921",

# Deployment Note - when I tried to deploy to Herokue I got this error message: 
    * error: failed to push some refs to
    * The fix - apparently I didn't establish the master branch correctly 
        - 'git push heroku HEAD:master' - this fixed the issue

# Note - 2/23/2021
    * .zip file wouldn't properly load. It would load the HTMl, but it would not load the data (features). I think the javascript fetch request is not compatible with the Highspot, .zip file method
        - Going to try and launch on Azure, and send the link over to the Highspot administrator (Annie Werner)

# Note - featureData.json - Shaver data

    {
        "id": "shaver", "title": "Shaver Specifications", "iconUrl": "../images/soccer.png", "description": "Language that describes what this feature does or provides."
    },

# Note - Default settings data
{"default_settings":[
    {"handpiece":[
        {"button1": 
            [{"default1": {"function": "Oscillate", "options": "One Touch"}}, {"default2": {"function": "Activate/Deactivate", "options": "None"}}, {"default3": {"function": "Oscillate", "options": "One Touch"}}
            ]
        },
        {"button2": 
            [{"default1": {"function": "Forward", "options": "One Touch"}}, {"default2": {"function": "Select Mode", "options": "Oscillate or Forward/Reverse"}}, {"default3": {"function": "Jog", "options": "-"}} ]}, 
        {"button3": 
            [{"default1": {"function": "Reverse", "options": "One Touch"}}, {"default2": {"function": "Forward/Reverse", "options": "-"}}, {"default3": {"function": "Forward", "options": "One Touch"}}]}
        ]
    }]
}

# Note - default settings database - footpedal
 {"footpedal":{
        "button1": {"default1": {"function": "Jog", "options": "-"}, "default2": {"function": "Select Mode", "options": "Oscillate or Forward/Reverse"}, "default3": {"function": "Select Mode", "options": "Oscillate or Forward/Reverse"}}}, 
        "button2": {"default1": {"function": "Select Handpiece", "options": "RF or Shaver"}, "default2": {"function": "Select Handpiece", "options": "RF or Shaver"}, "default3": {"function": "Select Handpiece", "options": "RF or Shaver"}},
        "button3":{"default1": {"function": "Select Direction", "options": "Forward or Reverse"}, "default2": {"function": "Select Speed", "options": "High or Low"}, "default3": {"function": "Select Speed", "options": "High or Low"}},
        "buttonA":{"default1": {"function": "Oscillate", "options": "Fixed"}, "default2": {"function": "Ocsillate/Reverse", "options": "Variable"}, "default3": {"function": "Ocsillate/Reverse", "options": "Fixed"}},
        "buttonB":{"default1": {"function": "Forward/Reverse", "options": "Variable"}, "default2": {"function": "Ocsillate/Forward", "options": "Variable"}, "default3": {"function": "Ocsillate/Reverse", "options": "Fixed"}}
    },