### What is the MAAT API service?
MAAT API is a software service that acts as an interface to the MAAT database.

### What relationships does MAAT API have to other software systems?
- MAAT API connects to the MAAT database
- MAAT API transfers data to Court Data Adaptor via SQS to send legal aid status updates to Common Platform.
- Court Data Adaptor transfers data to MAAT API via SQS to send court cause updates from Common Platform.
- Crime Means Assessment calls to the MAAT API to save means assessments to the MAAT database.

### Where is MAAT API hosted?
MAAT API is hosted in the LAA Landing Zone, which uses the AWS London region.

### Who looks after MAAT API?
MAAT API is maintained by the Crime Core team in LAA Digital.

### What type of software is MAAT API?
MAAT API provides a RESTful interface to the MAAT database. MAAT API implements the OpenAPI standard. MAAT API is a Java based Spring Boot application. MAAT API currently only supports a subset of interactions with the MAAT database, those relating to court data and means assessment data.

### Who are the users of MAAT API?
MAAT API is only consumed by other software systems.

### How old is MAAT API?
MAAT API was created in 2020.

### What is the future of MAAT API?
MAAT API will likely expand to support other new services that need to interact with the MAAT database and require a modern RESTful interface to do so.
