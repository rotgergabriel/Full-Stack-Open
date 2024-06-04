// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/notes
// Server-->Browser: Responds with the HTML code
// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/main.css
// Server-->Browser: Responds with main.css
// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/main.js
// Server-->Browser: Responds with main.js

// note over Browser:
// The browser will request the JS code depending on the location of the SCRIPT
// in the HTML document. If it is in the HEAD, it will be requested before loading the BODY.
// If the SCRIPT is at the end of the BODY, it will be requested after the page has loaded.
// end note

// Browser->Server: Makes a HTTP GET request to https://studies.cs.helsinki.fi/exampleapp/data.json
// Server-->Browser: [{ Responds with the JSON code }, ...]

// note over Browser:
// The browser will display all JSON data on the main page
// end note

// note over Browser:
// The form is loaded and ready to be used by the user
// end note

// User->Browser: The user interacts with the form, sending data to the server

// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/notes
// Server-->Browser: Responds with the HTML code
// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/main.css
// Server-->Browser: Responds with main.css
// Browser->Server: Makes a request to https://studies.cs.helsinki.fi/exampleapp/main.js
// Server-->Browser: Responds with main.js
// Browser->Server: Makes a HTTP GET request to https://studies.cs.helsinki.fi/exampleapp/data.json
// Server-->Browser: [{ Responds with the updated JSON code with the new information }, ...]

// note over Browser:
// The browser will display all the updated JSON data
// end note

// note over Browser:
// Since this is a page that uses now obsolete AJAX,
// the same initial cycle repeats over and over in the same way,
// as it is not an SPA page
// end note