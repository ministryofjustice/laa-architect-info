### What is Civil Apply?
Civil Apply is a service used by solicitors and legal providers to apply for civil legal aid on behalf of their clients.

### What relationships does Civil Apply have to LAA digital systems?
- Civil Apply submits criminal legal aid applications to CCMS via SOA
- Civil Apply calls the Provider Details API to get provider details and reference data from CCMS
- Civil Apply calls to LAA Portal to authenticate users
- Civil Apply calls to the Benefit Checker to check the benefits entitlement status of applicants
- Civil Apply calls to the Check Financial Eligibility service to assess the means status of applicants
- Civil Apply calls to the Legal Framework API to check the legal aid application requirements based on the type of legal proceeding the application relates to
- Civil Apply calls to the HMRC Interface to check the income data of applicants

### Who looks after Civil Apply?
Civil Apply is being developed and maintained by the Civil Apply team in LAA Digital.

### What type of software is Civil Apply?
Civil Apply is a Ruby on Rails application backed by a Postgres database. It is being developed in line with the UK digital service standard.

### Where is Civil Apply hosted?
Civil Apply is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### How old is Civil Apply?
Civil Apply development began in 2018.

### Who are the users of Civil Apply?
Civil Apply is used by legal aid providers to submit applications for criminal legal aid.

### Where is the code for Civil Apply?
The code for Civil Apply is on Github at https://github.com/ministryofjustice/laa-apply-for-legal-aid.
