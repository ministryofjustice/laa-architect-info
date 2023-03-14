### What is Benefit Checker?
Benefit Checker is a software system that retrieves the benefits status of UK citizens from DWP.

### What relationships does Benefit Checker have to other software systems?
- Benefit Checker calls to DWP API via a SOAP interface to retrieve benefits data
- eForms calls to Benefit Checker to request benefit status for crimninal legal aid applicants
- MAAT calls to Benefit Checker to request benefit status for criminal legal aid applicants
- CCMS calls to Benefit Checker to request benefit status for civil legal aid applicants
- Crime Apply calls to Benefit Checker to request benefit status for criminal legal aid applicants
- Civil Apply calls to Benefit Checker to request benefit status for civil legal aid applicants
- HMPPS, Help With Prison Visits calls to Benefit Checker to request benefit status for prison visitors
- HMCTS calls to Benefit Checker to request benefit status for court users
- Scottish Legal Aid Board calls to Benefit Checker to request benefit status for Scottish legal aid applicants

### Where is Benefit Checker hosted?
Benefit Checker is hosted in the LAA Landing Zone, which uses the AWS London region.

### Who looks after Benefit Checker?
Benefit Checker is maintained by the Crime Core team in LAA Digital.

### What type of software is Benefit Checker?
Benefit Checker is an adaptor service that connects to the DWP API. Benefit Checker acts as an interface between the Legal Aid Agency (MOJ) and the Department of Work & Pensions (DWP) + other 3rd parties, providing access to the latest pass-ported benefit entitlement checks including ‘Universal Credit’ status, based on Department of Work and Pensions systems. Benefit Checker is a Java application that uses Tomee. It runs on Java 8. Benefit Checker does not persist data but acts a a wrapper passing on the data it received from DWP to its consumers.

### Who are the users of Benefit Checker?
Benefit Checker is consumed by other software systems.

### How old is Benefit Checker?
Benefit Checker was created in around 2014.

### What is the future of Benefit Checker?
LAA digital is planning to build a new version of the Benefit Checker that will enable the retrieval of updated benefits and income data. These changes will help to support Means Test Review policy changes. Discussions with DWP to support this change are underway.
