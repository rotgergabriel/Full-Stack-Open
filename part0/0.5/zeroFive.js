// title Single Page Application (SPA)

// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/SPA
// Server-->Browser: Responds with the HTML document

// Browser->Server: Makes a HTTP GET request to https://studies.cs.helsinki.fi/exampleapp/SPA/data.json
// Server-->Browser: [{ Responds with data.JSON }, ...]

// note over Browser:
// The browser will display all the JSON data on the main page
// end note

// note over Browser:
// The files are initially loaded just like the old pages,
// but when loading new notes, only that information will be requested from the server,
// and the entire page will not be reloaded. We could say it will update in real time
// as the user makes requests or navigates the site.
// end note