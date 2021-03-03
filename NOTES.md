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
        [ ] Implants - Show page
            () Desktop
            () Tablet
            () Mobile

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
        [] ICONIX Needles section - remove 
            () Name 
            () Surgircal Specialties 
            () Material     
            () Siliconza
        [] ICONIX Needles - Change 
            () "Tapper Cutting" to "Cutting
            () "ICONIX Needles" to "Needles Specifications"
        [] Typo - "ICONIX SPEEED" 
        [] 3910-600-062 - Change title to "REELX STT 4.5mm"
        [] 3910-600-060 - Change title to "REELX STT 5.5mm"
        [] Match Omega PNs with PNs in brochure (see Calli's notes)
        [] Omega - Drill Depth should be 23mm for all associate PNs (currently they're undefine)
        [] Omega - Add "Reusable Instrumentation" for:
            () Omega 3.9mm PNs
            () Omega 4.75mm PNs
        [] Titanium Wedge Anchor PNs - Length is missing
        [X] Implant Icon Language - "Sports Medicine anchor specifications including, material, length, width, drill depth, and drill width"






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
            


   




    