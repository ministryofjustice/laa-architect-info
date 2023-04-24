### What is the HMRC Interface?
The HMRC Interface, also known as the HMRC Interface Service API, is an adaptor to HMRC APIs, and provides access to income, fraud and debt data held by HMRC.

### What relationships does HMRC Interface have to LAA digital systems?
- Civil Apply calls to the HMRC Interface to check the income data of applicants
- HMRC Assurance tool calls to the HMRC Interface to check the income data of applicants

### Who looks after the HMRC Interface?
LFA is being developed and maintained by the Civil Apply team in LAA Digital.

### What type of software is the HMRC Interface?
The HMRC Interface is an API adaptor built using Ruby on Rails. It retrieves data from HMRC based on pre-defined use cases agreed between LAA and HMRC - income, debt and fraud data. It makes multiple calls to HMRC APIs to retrieve the relevant data for an individual. It is backed by a Postgres database. It is being developed in line with the UK digital service standard.

### Where is the HMRC Interface hosted?
The HMRC Interface is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### How old is the HMRC Interface?
The HMRC Interface was released in 2022 as part of the Civil Apply project.

### Who are the users of the HMRC Interface?
The HMRC Interface is only called by other software services.

### Where is the code for the HMRC Interface?
The code for the HMRC Interface is on Github at https://github.com/ministryofjustice/laa-hmrc-interface-service-api.
