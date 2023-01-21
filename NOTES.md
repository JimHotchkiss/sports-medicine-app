 # 2/24/2021
    - Assure images and data for Implants feature are properly associated
        [X] Iconix 1 Drill image
            - All Iconix 1 PNs w/out needles
        [X] Iconix 2 Drill image 
            - All Iconix 2 PNs w/out needles
        [X] Iconix Measurement image
            - Iconix PNs, except 
                ~ Iconix 1 w/needles
                ~ Iconix 1 TT w/needles
                ~ And 'Speed' implants
        [X] Iconix Needle Data 
            (x) Iconix 1 w/needle 
            (x) Iconix 1 TT w/needle
            (x) Iconix 2 w/needle
            (x) Iconix 2 TT w/needle
                [X] Fix ICONIX Needles - ICONIX 2 TT w/needles 
                    - Surgical Specialties PN   
                    - Material (the layout)
        [X] Trocar Image 
            - Iconix Speed 
                ~ 3910-500-931
                ~ 3910-500-920
                ~ 3910-500-922
                ~ 3910-500-921
    - Media Queries 
        [X] Implants - Search/list page
            # Note - Need to nest input div and implant container into same div
            (x) Desktop
            (x) Tablet
            (x) Mobile
        [X] Implants - Show page
            (x) Desktop
            (x) Tablet
            (x) Mobile

# 2/25/2021
     - Media Queries 
        [X] Implants - Search/list page
            # Note - Need to nest input div and implant container into same div
            (x) Desktop
            (x) Tablet
            (x) Mobile
        [X] Implants - Show page
            (X) Desktop
            (X) Tablet
            (X) Mobile
        [X] Launch on Azure for development and testing purposes
            - Note - See instruction below labeled 'Azure'
        [X] Probes - Search/list
            # Note - Need to nest input div and implant container into same div
            (x) Desktop
            (x) Tablet
            (x) Mobile
        [X] Probes - Show page
            (x) Desktop
            (x) Tablet
            (x) Mobile
        [X] Update Azure to reflect changes with the Probes feature
    - Shaver Feature 
        [X] Feature icon on Features page
        [X] List all shavers 
        [X] Create searchable functionality 
            (x) Search by PN isn't working (had to convert number to string to get .includes() to work)

# 3/3/2021
    - Implants - address Calli's feedback
        [X] PN 3910-100-045 - four different implants with samd PN
            (x) Titanium Wedge Anchor, 6.5mm Double strand with #2 FF suture - 3910-100-045
            (x) Titanium Wedge Anchor, 6.5mm Double strand with #2 FF suture with needles - 3910-100-145 (corrected)
            (x) Titanium Wedge Anchor, 5.0mm Double strand with #2 FF suture 3910-100-035
            (x) Titanium Wedge Anchor, 5.0mm Double strand with #2 FF suture with needles - 3910-100-135 (corrected)
        [X] ICONIX Needles section - remove 
            (x) Name 
            (x) Surgircal Specialties 
            (x) Material     
            (x) Siliconza
        [X] ICONIX Needles - Change 
            (x) "Tapper Cutting" to "Cutting
            (x) "ICONIX Needles" to "Needles Specifications"
        [X] Typo - "IONIX SPEED" to "ICONIX SPEED"
        [X] 3910-600-062 - Change title to "REELX STT 4.5mm"
        [X] 3910-600-060 - Change title to "REELX STT 5.5mm"
        [X] Match Omega PNs with names in brochure (see Calli's notes)
            (x) 3910500391
            (x) 3910500392
            (x) 3910500471
            (x) 3910500472
            (x) 3910500652
            (x)  NOTE - 3910500653 and 234020117 are not in original implant database (email Calli)
        [X] Omega - Drill Depth should be 23mm for all associate PNs (currently they're undefine)
            * It was a type on the implant data. Fixed.
        [X] Omega - Add "Reusable Instrumentation" for:
            (x) Omega 3.9mm PNs - 3910-500-391, 3910-500-392
            (x) Omega 4.75mm PNs - 3910-500-471, 3910-500-472
        [X] Titanium Wedge Anchor PNs - Length is missing
        [X] Implant Icon Language - "Sports Medicine anchor specifications including, material, length, width, drill depth, and drill width"
        [X] Omega PNs 3910500653 and 234020117 are not part of the Implant database. Email sent to Calli on Wednesday requesting data
        [X] NOTE - 'Reusable Instrumentation' title can leave the user thinking that other instruments, like PN -652, are reusable
            (x) Possible fix - clearly, combine them together under one title
        [X] Update changes to Azure sportsmedtoolbox
        [X] Probes - Include suction, non-suction and small-joint probes.
            (x) Suction
            (x) Non-suction
            (x) Small Joint
        [X] Needle Specification - Make the parameters bold
        [X] Omega PN 3910-500-653 add to database (use data from -652). We can ommit 234-020-117

# 3/4/2021
      [X] Update changes to Azure sportsmedtoolbox
        (x) Email Calli and Team 
            - Made suggested changes and fixes
            - Changed the Probes feature language
            - Probes - added suction, non-suction and small-joint sections
            - Graphic - Convert images 
            - Colaterial material needed for launch
      [X] Needle Specification - Make the parameters bold
      [X] Shavers - Eventlistener 
        (x) Clear shaver text
        (x) Clear search field 
        (x) Probes - fix probes data (replaced integers with string representation of numbers)
        (x) Render Probe details
            (x) Oscillate max
            (x) Oscillate default
            (x) High speed default
            (x) High speed max 
            (x) Low speed default
            (x) Low speed max
            (x) Speed step incrument
      [X] Backbutton 
        (x) Clear Probe details 
        (x) Re-render search field
        (x) Hide backbutton

# 3/5/2021
    [X] Console Simulator (HUB) - what would it take to build the HUB UI and launch through Azure?
        * A lot of work to build out the entire HUB UI
    [] Sport Med Toolbox - XF2 error codes  
        (x) Import error data 
            * data.py 
                - import pandas as pd
                  import excel2json
                    * excel2json will take any file you put in and create a json file.
                        excel2json.convert_from_file("file-name")
                        df = pd.read_excel("error-data.xlsx")
                    * > python3 data.py - creates a json file
         () Clean up data 
            (x) Correct Error Id
            () Shorten 'Error Id' to 'id'
            () Replace 'Troubleshoot Possible Production Errors' with 'troubleshoot'
         (x) Title fix in Navbar - Xf2Errors
    [X] Aaron's suggested fixes and improvements 
        (x) 'Arthro Specifications' will replace Probes Specifications     
            - Aarons's ideas for future features
                 (1) Arthro Specifications 
                 (2) Arthro Money and Default Settings and 
                 (3) Arthro Troubleshooting
    [] Email Annie file URL, by EOB on Monday
    [] Create two URLs through Azure
        () Production
        () Development

# 3/10/2021
    [X] Sport Med Toolbox - XF2 error codes  
        (x) Import error data 
            * data.py 
                - import pandas as pd
                  import excel2json
                    * excel2json will take any file you put in and create a json file.
                        excel2json.convert_from_file("file-name")
                        df = pd.read_excel("error-data.xlsx")
                    * > python3 data.py - creates a json file
         (x) Clean up data 
            (x) Correct Error Id
            (x) Shorten 'Error Id' to 'id'
            (x) Replace 'Troubleshoot Possible Production Errors' with 'troubleshoot'
         (x) Title fix in Navbar - Xf2Errors
    [X] Commit xf2 errors to local storage
        (x) GetXf2Errors()
        (x) AddXf2Erros()
    [X] Render error messages to the DOM
        (x) RenderXf2Errors() method
        (x) Build proper search 
        (x) BindingErrorsEventListener() method
        (x) Render error details 
        (x) Assure proper back button functionality
        (x) Fix id=NONE
    [X] Email Annie file URL, by EOB on Monday
        (x) Emailed Annie update - will wait for Calli's feedback before updating code and URL
    [] Create two URLs through Azure
        () Production
        () Development
    [] Default Button feature - Hand piece and foot pedal
    [] Azure DevOps 

# 3/11/2021
    [X] Xf2 errors 
        (x) Error media queries - conatiner max-width desktop
        (x) Scroll to top when errors page loads
    [] Default Button feature - Hand piece and foot pedal
        () Onclick, render Default settings feature
        () Build default database - this will minimize how much we have to rely on the images (poor quality)
            () Hand piece 
                - Initial data structure
                    (x) Test fetch
            () Foot pedal
                - Initial data structure
                    (x) Test fetch
            () RF wand
                - Initial data structure
                    (x) Test fetch
            () LCD screen
                - Initial data structure
                    (x) Test fetch
    [] Create two URLs through Azure
        - Note - 3/12/2021
            * Production will include 'Implant', 'Arthro Specification' and 'Complaint'
            * Development will include 'Implant', 'Arthro Specifications', 'Complaint', 'Shaver Specification' and 'Xf2 Error'
                # Not present in developemnt - 'Arthro Default Settings'
            () Production
            () Development
    [] Azure DevOps 

# 3/12/2021
    [] Default Button feature - Hand piece and foot pedal
        () Onclick, render Default settings feature
        () Build default database - this will minimize how much we have to rely on the images (poor quality)
            (x) Hand piece 
                - Initial data structure
                    (x) Test fetch
            (x) Foot pedal
                - Initial data structure
                    (x) Test fetch
            (x) RF wand
                - Initial data structure
                    (x) Test fetch
            () LCD screen
                - Initial data structure
                    (x) Test fetch
    [] Create two URLs through Azure
        - Note - 3/12/2021
            * Production will include 'Implant', 'Arthro Specification' and 'Complaint'
            * Development will include 'Implant', 'Arthro Specifications', 'Complaint', 'Shaver Specification' and 'Xf2 Error'
                # Not present in developemnt - 'Arthro Default Settings'
            () Production
            () Development
    [] Azure DevOps 

# 3/17/2021
    [X] Calli's fixes and corrections 
        (x) Iconix 1 with Needles (3910-500-412), 'Note' section: add end parentheses
        (x) Remove the title "Reusable Instrumentation" and "End of Reusable Instrumentation" words on the home screen.  When I said to include "Reusable instrumentation" I meant to include an image of the actual instruments within the actual part number, similar to how you included the images within the Iconix part numbers.
            (X) Omega 3.9mm - include 'Reusable Instrumentation' image
            (X) Omega 4.7mm - include 'Reusable Instrumentation' image
                * Notes -  
                implant.implant.pn === "3910-500-391" ||
                implant.implant.pn === "3910-500-392" ||
                implant.implant.pn === "3910-500-471" ||
                implant.implant.pn === "3910-500-472"
        (x) Omega instrumentation specs for drill depth and width were not 100% correct (MY FAULT!). Can you please review the attachment again or screenshot below and update with the appropriate part numbers and specs?
            (x) 3910-500-951
            (x) 3910-500-952
            (x) 3910-500-471
            (x) 3910-500-472
            (x) 3910-500-652
        (x) 3910-200-080: On this part number, please add 4.5mm after "ANCHOR"
        (x) 3910-200-081, 082 and 083: On these part numbers, please add "5.5mm" after "ANCHOR"
        (x) 3910-200-084, 085 and 086: On these part numbers, please add "6.5mm" after "ANCHOR"
        (x) 3910-400-050 and 055: For these part numbers, add "5.5" after "Anchor"
        (x) 3910-400-060 and 065: For these part numbers, add "6.5" after "Anchor"
        (x) Make sure that for all "Postive Stops" you are referencing what is in Column E, not H.  There are 2 columns that say "Positive Stop?" and we need the content to pull from Column E, instead of H.
            - 13 through 36 in the Excel spread sheet
    [] Default Button feature - Hand piece and foot pedal
        () Onclick, render Default settings feature
        () Build default database - this will minimize how much we have to rely on the images (poor quality)
            (x) Hand piece 
                - Initial data structure
                    (x) Test fetch
            (x) Foot pedal - Shaver
                - Initial data structure
                    (x) Test fetch
            (x) RF wand
                - Initial data structure
                    (x) Test fetch
            () Foot pedal - RF Wand
                - Initial data structure
                    () Test fetch
            () LCD screen
                - Initial data structure
                    (x) Test fetch
    [] Create two URLs through Azure
        - Note - 3/12/2021
            * Production will include 'Implant', 'Arthro Specification' and 'Complaint'
            * Development will include 'Implant', 'Arthro Specifications', 'Complaint', 'Shaver Specification' and 'Xf2 Error'
                # Not present in developemnt - 'Arthro Default Settings'
            () Production
            () Development
    [] Azure DevOps 

# 3/18/2021 
    [] Create two URLs through Azure
        - Note - 3/12/2021
            * Production will include 'Implant', 'Arthro Specification' and 'Complaint'
            * Development will include 'Implant', 'Arthro Specifications', 'Complaint', 'Shaver Specification' and 'Xf2 Error'
                # Not present in developemnt - 'Arthro Default Settings'
            () Production
            (x) Development
                * 3/18/2021 - Update link for director of Sports Med R&D
                    (x) 'Remove' Arthro Default Settings
    [] Default Button feature - Hand piece and foot pedal
        () Onclick, render Default settings feature
        () Build default database - this will minimize how much we have to rely on the images (poor quality)
            (x) Hand piece 
                - Initial data structure
                    (x) Test fetch
            (x) Foot pedal - Shaver
                - Initial data structure
                    (x) Test fetch
            (x) RF wand
                - Initial data structure
                    (x) Test fetch
            () Foot pedal - RF Wand
                - Initial data structure
                    () Test fetch
            () LCD screen
                - Initial data structure
                    (x) Test fetch
    [] Azure DevOps 

# 3/19/2021
 [] Sports Med Toolbox - Corrections
    (x) Change 'Width' to 'Diameter'
    (x) 'Postive' stop, misspelling - Nano Tack TT
    (x) Correct - CinchLock SS Diamter
        (x) Distal Tip - 2.4mm
        (x) Distal Barb - 2.8mm
        (x) Proximal Barb - 3.0mm
    () Correct - CinchLock Flex **** Is this true for Flex (email Nick or Calli)
        () Distal Tip - 2.4mm
        () Distal Barb - 2.8mm
        () Proximal Barb - 3.0mm
 [] Create two URLs through Azure
        - Note - 3/12/2021
            * Production will include 'Implant', 'Arthro Specification' and 'Complaint'
            * Development will include 'Implant', 'Arthro Specifications', 'Complaint', 'Shaver Specification' and 'Xf2 Error'
                # Not present in developemnt - 'Arthro Default Settings'
            () Production
            (x) Development
                * 3/18/2021 - Update link for director of Sports Med R&D
                    (x) 'Remove' Arthro Default Settings
    [] Default Button feature - Hand piece and foot pedal
    # Note - We could render the different options, shaver, shave footpedal, rf, rf footpedal, lcd screen. This could reduce the clutter, and confusion, on the final screen that renders the default settings. 
        * However, it also creates another choice and step for the user.
        () Onclick, render Default settings feature
        () Build default database - this will minimize how much we have to rely on the images (poor quality)
            (x) Hand piece 
                - Initial data structure
                    (x) Test fetch
            (x) Foot pedal - Shaver
                - Initial data structure
                    (x) Test fetch
            (x) RF wand
                - Initial data structure
                    (x) Test fetch
            () Foot pedal - RF Wand
                - Initial data structure
                    () Test fetch
            () LCD screen
                - Initial data structure
                    (x) Test fetch
        () Render Shaver handpiece 
            () Title
            () Image 
            () Default settings
    [] Azure DevOps

# 3/24/2021
    [] Meeting with Calli and Annie
        () Ready for QA
            () Implant Specifications
                () Media queries - big screens
            () Arthro Specifications 
                () Media queries - big screens
            () Shaver Specifications
                () Media queries - big screens
## Note: See CORRECTIONS.md
    [] Create two URLs through Azure
            - Note - 3/12/2021
                * Production will include 'Implant', 'Arthro Specification' and 'Complaint'
                * Development will include 'Implant', 'Arthro Specifications', 'Complaint', 'Shaver     Specification' and 'Xf2 Error'
                    # Not present in developemnt - 'Arthro Default Settings'
                () Production
                (x) Development
                    * 3/18/2021 - Update link for director of Sports Med R&D
                        (x) 'Remove' Arthro Default Settings
        [] Default Button feature - Hand piece and foot pedal
    # Note - We could render the different options, shaver, shave footpedal, rf, rf footpedal, lcd screen. This could reduce the clutter, and confusion, on the final screen that renders the default settings. 
         * However, it also creates another choice and step for the user.
            () Onclick, render Default settings feature
            () Build default database - this will minimize how much we have to rely on the images (poor quality)
                (x) Hand piece 
                 - Initial data structure
                        (x) Test fetch
                (x) Foot pedal - Shaver
                 - Initial data structure
                        (x) Test fetch
                (x) RF wand
                    - Initial data structure
                        (x) Test fetch
                () Foot pedal - RF Wand
                    - Initial data structure
                        () Test fetch
                () LCD screen
                    - Initial data structure
                        (x) Test fetch
            () Render Shaver handpiece 
                () Title
                () Image 
                () Default settings
        [] Azure DevOps

 # 3/31/2021
    [X] Media Queries Corrections
        (x) Implants - Needles div
        (x) Iconix 2 image

# Go Live Checklist 
    [X] Images - purchase or create
    [] Shaver Specifications langauage 
        - I made changes, but need to be okayed by the Team


# NOTE - Visual Studio - Select all occurances of match
    * Cmd + Shift + L

# Azure 
    - https://portal.azure.com/
    - Easiest way to host a single-page web application is to load the file to a storage account 
        * Once logged in, click on the menu icon, and then click on 'Storage Accounts'
        * Click on '+ Create' icon
            - Enter the 'Subscription'
            - 'Create new' Resource group - this is the name of the 'group' of files
            - 'Storage account name' - this name will define the url
            - You can toggle through the different settings tabs, however, none of the settings need to be changed. 
            - Once you toggled through, you'll get a text box that says, 'validation successful'
                * You can then click 'Create'
            - Once it's built, click 'Go to resource'
        * Once you've clicked 'Go to resource', in the column, on the left side of the screen, click 'Storage Explorer (preview)
            - Again in the column, on the left side, seletect 'Static website'. 
                * Here we want to toggle under Static website 'Enable'
                    - Under Index document name, we want to define default page and redirect 
                        * index.html - for both 'Index document name' and 'Error document path'
                        * click 'Save'
            - Now if we go back to the 'Storage explorer', you'll find under the 'BLOB CONTAINERS' a '$web' folder. This is the 'container' we'll be putting all our files in. 
                * Note - this method of hosting a single page application does not handle folders, just files. Consequently, all the files will be uploaded into the BLOB container, with no folder structure. So if you have nested folder structure, you may need to change the urls to correctly reflect this. 
            - Once you open the '$web' folder, you can start uploading your files to it by clicking the 'Upload' button
            - Once all your files are uploaded, you can test your app by going to 'Static website', and pasting the URL, found under 'Primary endpoint' into a browser.
            
# 4/7/2021 
    * Change XF2 errors for Crossflow errors
        - The XF2 errors are not very helpful to the users in the field
    [] XflowErrors
        (x) Create xflowData 
        (x) Create xflow in featureData 
        (x) Create xflowErrors component
            (x) When xFlowErrors loads, in the constructor, call xflowErrorsAdapter
        (x) Create xflowErrorsAdapter
        (x) Fetch data 
        (x) Link newly create javascript files to HTML
        () Create Store entry for xflowErrors
            () getXflowErrors()
            () addXflowErrors()
        () Render error list 
        () Enable search functionality
        () Render error message  
            () Description
            () type
            () cause
            () troubleshooting
    [] Xf2Errors - IFU version
        () Update xf2errors.js
    [X] Add :hover to Shaver div
# 4/9/2021
    (x) Create Store entry for xflowErrors
                (x) getXflowErrors()
                (x) addXflowErrors()
        (x) Render error list 
            (x) Enable search functionality
            (x) Render error message 
                (x) id 
                (x) Description
                (-) type
                (-) cause
                (x) troubleshooting
        (x) Back button functionality
[] Xf2Errors - IFU version
    () Update xf2errors.js
        () Remove 'W' error messages that do not pertain to Crossfire2
            () w7
            () w8
        () Add 'Category'
        () Add 'Solution'
    () Troubleshooting from the IFU - could be a 'general troubleshooting' option on the list of error codes.
[X] Add :hover to Shaver div

# 4/14/2021
[X] Xf2Errors - IFU version
    (x) Update xf2errors.js
        () Remove 'W' error messages that do not pertain to Crossfire2
            (x) w7
            (x) w8
        (x) Add 'Category'
        (x) Add 'Solution'
    (x) Troubleshooting from the IFU - could be a 'general troubleshooting' option on the list of error codes.
    (x) Appropriately render Solution and Category attributes.
[] Azure deployment 
    () Url corrections

# 4/15/2021
[] Update Azure - Sports Med Toolbox Development
    () Correct Crossflow errors bug
        () id
        () description
        () type
        () cause
        () troubleshooting


    () Update Azure
# 22-May-22
[] Create Implant Families
    (x) Create 3 placeholders (Calli - For family specifics)
    (x) create implantFamiliesAdapter
    (x) Render the family placeholders
    (x) In the featuresData file, I changed the insert-specifications to insert-families. 
        ( ) Get specific language from Calli for this description 
    ( ) Build a generic renderFeature for implantSpecifications and implantFamilies
# Note: insert-specification data:         "id": "implant-specifications", "title": "Implant Specifications", "iconUrl": "../images/implants.png", "description": "Sports Medicine anchor specifications including, material, length, width, drill depth, and drill width"

# Note: 30-May-22 - Built the basic implant family functionality: renders the dummy data (get real data from Calli), binded event handler to the implant family button, clears family text, and renders the implants data (this will be specific to the implant family data provided by Calli)
    * The Navbar Titile does NOT update, when specific family is clicked
    
# Implant Families
Iconix
Iconix Speed
Cinchlock
NanoTack
ReelX
Omega
Biosteon Intraline
PEEK Zip
PEEK Intraline
Twinloop
Titanium Intraline
Titanium Wedge Anchor


[X] Need to align Implant Family data with implant data
[X] Need to clear search bar when Implant is selected
[X] Back btn - returns user to Implant Family
[X] NOTE: I believe a single implant has been omitted. Double check
    * Knotilus Anchor

# Capital Products
    * Adapatable Beach Chair 

[ ] Issue: UpdateTitle running into bug with 'item' undefined 

* For every binding function, a 'location' is store in localstorage and updated with each back-button click
    * Example - Implant Familiex
        1.  Implant Families
        2.  Cinchlock Families
        3.  Cinchlock Details
    * Note: Using Localstorage doesn't seem to be working. When you update localstorage, it changes the state of the page.
        * Read some articles on javascript and back button strategies
    * Alphavent
[] Send Calli an email requesting Adaptable Beach Chair image (high resolution)
[] Ask Calli about 'Suture System' for description, instead of PN
[] Alphavent sutures data
    (x) 4.75mm
    () 5.5mm
    () 6.5mm 

[] Tool-Box Feedback 30-Jul-22
Adaptable Beach Chair

    [X] Change patient weight limit to 400 lbs.
    [X] For all of the benefit sections, can we put the bullets in the same box?
 

    [X] Number 2 should say “Designed to accommodate both shoulder and arthroscopy and arthroplasty procedures”
 
    [X] Combine both disposables sections to have a screenshot from the brochure
        (x) Create PNG from brochure
        (x) Replace test display with image
 
Implant Families
    [X] Can we alphabetize so Alphavent is at the top?

Alphavent

    [X] For all sections with multiple bullets, can we put all content in one gold box together?
        (x) Pilot Hole Width
        (x) Instrument Compatability
 

    [X] Remove “Category” box

DARTS Updates
    [X] Change DARTS name to Pivot Guardian Direct
    [X] Disposables
        (x) 3105000740 Pivot Guardian safety boot liners, small
        (x) 3105000741 Pivot Guardian safety boot liners, medium
        (x) 3105000742 Pivot Guardian safety boot liners, large
    [X] Clinical Indications
        (x) Direct anterior total hip arthroplasty, hip pinning, hip fracture, periacetabular osteotomy, and derotational femoral osteotomy

Notes: Order of developmemnt
    [X] Darts
        (x) Add images to DARTS - Jake's email
    [] Guardian
        () Note: In the Excel sheet there's no 'Disposables' or 'Clinical Indications'
    [] Hip Map
    [] Hip Check
    [] Adaptable Arm Positioner 



  
   




    