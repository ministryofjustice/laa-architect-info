### What is CLA?
CLA stands for Civil Legal Advice. CLA is a service provided to the general public in England and Wales where users can obtain free legal advice from specialist legal providers relating to a range of Civil matters. This is subject to the user’s matter being within scope of the service and the user passing the means eligibility test. The advice can either be given via telephone or in person depending upon the client’s unique circumstances. LAA Digital provides software services to support the provision of CLA.

### What relationships does CLA have to LAA digital systems?
- CLA calls to LAALAA finds out which legal providers are near the user
- CLA MI stores data from the Tender Assessment Database (TAD) via file extract

### Who looks after CLA?
CLA is maintained by the CLA team in LAA Digital.

### Who are the users for CLA?
- Citizens use CLA to check if they can get legal help
- Legal providers use CLA to upload work reports for legal help they have provided to citizens
- The Direct Services Team use CLA to manage legal help cases and MI data extracts
- Contact Centre Operators use CLA to check eligibility of legal help applicants

### What type of software is CLA?
CLA software applications include:
- CLA Public: a public web service built using Flask which allows citizens to check if they are eligible for legal aid
- CLA Frontend: a Django web application for managing civil legal aid applications and callbacks
- CLA Backend API: an API for managing civil legal aid cases, backed by a Postgres database
- CLA MI: an Oracle APEX application to process the information from CLA Backend into TAD

### Where is CLA hosted?
CLA is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### How old is CLA?
CLA began development in 2013.
