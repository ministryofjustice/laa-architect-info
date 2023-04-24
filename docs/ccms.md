### What is CCMS?
CCMS stands for Client and Cost Management System. CCMS is a software system used by solicitors to apply for civil legal aid and by caseworkers to assess applications for civil legal aid. It is also used by solicitors to bill for legal aid work and by caseworkers to assess those bills.

In addition, it Acts as the financial accounting system of reference for the LAA, including making payments to providers.

### What relationships does CCMS have to other software systems?
- Civil Apply submits criminal legal aid applications to CCMS via SOA
- Provider Details API queries the CCMS DB to get provider details and reference data from CCMS
- CCMS calls to LAA Portal to authenticate users
- CCMS calls to the Benefit Checker to check the benefits entitlement status of applicants
- CWA syncs user data to CCMS DB
- CCMS pushes payment instructions to payment lambdas
- CCMS transfers requests to print letters and correspondence to Xerox via FTP
- CCMS sends requests for managing files and documents to Northgate
- CCMS pushes customer invoice and contribution information to Marstons via FTP
- CIS pushes invoices approved for payment and, after payment, updates status of invoices (via HUB)

### Where is CCMS hosted?
Most CCMS components are hosted in the LAA Landing Zone, which uses the AWS London region. However, the EBS component of CCMS is in on-premises hosting (6 Degrees). Migration of EBS into the LAA Landing Zone is expected in 2023. Migration of CCMS components from the LAA Landing Zone and into the MOJ Modernisation Platform, also an AWS based service, is being actively looked at.

### Who looks after CCMS?
CCMS is maintained by three teams in LAA Digital: CCMS Civil Applications, CCMS Civil Billing and Payments, and CCMS Platforms.

### What type of software is CCMS?
CCMS is made up of a number of components:
- Provider User Interface (PUI): a Java application for providers to submit civil legal aid applications and billing claims
- SOA: a SOAP API used to interact with the CCMS database, using Oracle SOA Suite
- EBS: a customised version of Oracle E-Business Suite, that is used to process civil legal aid applications and manage payments and finance
- CCMS DB: an Oracle Database that stores information on civil legal aid applications, civil and criminal payments, finance and other MI
- Provider Details API: an XML API to provide reference data from the CCMS DB
- Temporary Data Store: a database that stores in-progress applications from PUI
- Oracle Forms: web forms that provide a UI for interacting with the CCMS database
- OPA: dynamically generates interview questions for PUI based on means and merits rules for civil legal aid, based on Oracle Policy Automation software

### Who are the users of CCMS?
- CCMS is used by solicitors to make applications for civil legal aid on behalf of clients and to make billing claims for legal aid work completed
- CCMS is used by means caseworkers to assess the financial eligibility of applications for civil legal aid
- CCMS is used by merits caseworkers to assess the merits eligibility of applications for civil legal aid
- CCMS is used by billing caseworkers to assess billing claims for civil legal aid

### How old is CCMS?
CCMS has been mandatory for all civil case types since 1 April 2016.

### What is the future of CCMS?
CCMS is a 'legacy' application that is undergoing transformation. This involves both replacement and modernisation:
- Replacing certain capabilities with modern services, such as Civil Apply.
- Modernising CCMS software to increase resilience and performance, for example cloud migration, deployment pipelines, automated testing, observability.

Given the number of critical capabilities that CCMS performs for the LAA, the transformation is likely to be a long-term process.
