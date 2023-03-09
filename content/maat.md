### What is MAAT?
MAAT is a software system used by caseworkers to assess applications for criminal legal aid. MAAT stands for Means Assessment Administration Tool.

### What relationships does MAAT have to other software systems?
- MAAT calls to Benefit Checker to get benefit entitlement status for legal aid applicants.
- MAAT writes to EDW via LAA Hub jobs to send MI and casework performance data.
- MAAT writes to eForms via LAA Hub jobs to send legal aid decisions and status updates.
- MAAT writes to Marstons via LAA Hub jobs to send applicant contribution and debt amounts.
- MAAT writes to ePrint via LAA Hub jobs to request the printing and sending of letters.
- MAAT calls to the Crime Means Assessment service to request financial eligibility calculations.
- The MLRA system connects to the MAAT database.
- The NoLASA system connects to the MAAT database.
- The InfoX system saves Magistrates court updates to the MAAT database.
- CCR calls to MAAT via LAA Hub jobs to load defendant data
- CCLF calls to MAAT via LAA Hub jobs to load defendant data
- CWA writes to MAAT via LAA Hub jobs to send provider details
- Xhibit writes to MAAT via LAA Hub jobs to send Crown Court updates
- Eforms writes to MAAT via LAA Hub jobs to submit criminal legal aid applications
- MAAT API calls the MAAT database to update court case and means assessment data

### Where is MAAT hosted?
MAAT is hosted in the LAA Landing Zone, which uses the AWS London region.

### Who looks after MAAT?
MAAT is maintained by the Crime Core team in LAA Digital.

### What type of software is MAAT?
MAAT is a caseworking system that is used to process criminal legal aid applications. MAAT is a Java application that uses Tomee. It runs on Java 8. The MAAT database is an Oracle Database running in AWS RDS. The MAAT database also has significant amounts of business logic contained in PL/SQL.

### Who are the users of MAAT?
MAAT is used by LAA caseworkers to process applications for criminal legal aid


### How old is MAAT?
MAAT was created in around 2008.

### What is the future of MAAT?
MAAT is a 'legacy' application that is undergoing a modernisation programme. In order to safely implement upcoming changes to legal aid policy, the Crime Modernisation team decided to remove core capabilities from MAAT and 'lift and shift' them into new micro-services that will be easier and safer to implement changes in. The first of these capabilities is the 'Crime Means Assessment' service, which is now built and live - this means that MAAT no longer performs means calculations itself, but instead calls out to the new service. More functional capabilities are being pulled out of MAAT and into new services. At first, these new capabilities will use the MAAT database to persist data (this is because many downstream processes still rely on the data existing in the MAAT database). A future phase of the modernisation process will be to move this data out of the MAAT database and ensure that all relevant integrations are updated. Eventually, the MAAT UI might also be replaced by the new Crime Review service, and LAA digital might be in a position to sunset or decommission MAAT.
