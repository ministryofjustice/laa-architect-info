### What is CCQ?
CCQ stands for Check if your Client Qualifies for legal aid. It is a web service that allows solicitors and legal providers to check the financial eligibility of applicants for civil legal aid.

### What relationships does CCQ have to LAA digital systems?
- CCQ calls to the Check Financial Eligibility (CFE) service to assess the means status of applicants. Note that it initially calls to a 'partner' fork of CFE, with the plan to reconcile back to a single CFE this year.

### Who looks after CCQ?
CCQ is being developed and maintained by the Eligibility team in LAA Digital.

### What type of software is CCQ?
CCQ is a Ruby on Rails application backed by a Postgres database. It is being developed in line with the UK digital service standard.

### Where is CCQ hosted?
CCQ is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### How old is CCQ?
CCQ began development in autumn 2022 and was initially released in early 2023.

### Where is the code for CCQ?
The code for CCQ is on Github at https://github.com/ministryofjustice/laa-estimate-financial-eligibility-for-legal-aid.
