### What is Crime Apply?
Crime Apply is a service used by solicitors and legal providers to apply for criminal legal aid on behalf of their clients. The service is in active development and is due to go into private beta in summer 2023.

### What relationships does Crime Apply have to LAA digital systems?
- Crime Apply submits criminal legal aid applications to the Criminal Applications datastore and reads previously submitted applications from the Criminal Applications datastore
- Crime Apply calls to LAA Portal to authenticate users
- Crime Apply calls to the Benefit Checker to check the benefits entitlement status of applicants

### Who looks after Crime Apply?
Crime Apply is being developed and maintained by the Crime Apply team in LAA Digital.

### What type of software is Crime Apply?
Crime Apply is a Ruby on Rails application backed by a Postgres database. It is being developed in line with the UK digital service standard.

### Where is Crime Apply hosted?
Crime Apply is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### How old is Crime Apply?
Crime Apply development began in late 2022.

### Who are the users of Crime Apply?
Crime Apply is used by legal aid providers to submit applications for criminal legal aid.

### Where is the code for Crime Apply?
The code for Crime Apply is on Github at https://github.com/ministryofjustice/laa-apply-for-criminal-legal-aid.
