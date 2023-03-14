### What is Crime Means Assessment service?
Crime Means Assessment (also known as CMA) is a software service that performs means assessments for criminal legal aid. Crime Means Assessment can be used to create, update, or retrieve means assessment results.

### What relationships does Crime Means Assessment have to other software systems?
- Crime Means Assessment calls to the MAAT API to save means assessments to the MAAT database.
- MAAT calls to the Crime Means Assessment service to request financial eligibility calculations.

### Where is Crime Means Assessment hosted?
Crime Means Assessment is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### Who looks after Crime Means Assessment?
Crime Means Assessment is maintained by the Crime Modernisation team in LAA Digital.

### What type of software is Crime Means Assessment?
Crime Means Assessment is an eligibility calculator that takes information about a criminal legal aid applicant and assesses whether they are financially eligible for legal aid. Crime Means Assessment is a Java based Spring Boot application and uses a Postgres database. Crime Means Assessment can be considered a micro-service that encapsulates crime means assessment.

### Who are the users of Crime Means Assessment?
Crime Means Assessment is used by the MAAT system.

### How old is Crime Means Assessment?
Crime Means Assessment was created in 2022.

### What is the future of Crime Means Assessment?
Crime Means Assessment was developed as part of the MAAT modernisation programme. It replaces the capability in MAAT for assessing the financial eligibility of legal aid applicants. In future a decision will need to be made about who manages the Crime Means Assessment service. Currently it is maintained by the Crime Modernisation team but this responsibility might move to the Eligibility Platform team. Crime Means Assessment might also be refactored to more closely align to the patterns used by other LAA digital eligibility calculators.
