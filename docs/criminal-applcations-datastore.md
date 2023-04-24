### What is the Criminal Applications datastore?
The Criminal Applications datastore stores applications for criminal legal aid. The service is in active development and is due to go into private beta in summer 2023.

### What relationships does the Criminal Applications datastore have to LAA digital systems?
- Crime Apply submits criminal legal aid applications to the Criminal Applications datastore and reads previously submitted applications from the Criminal Applications datastore
- Crime Review reads applications for legal aid from the Criminal Applications datastore
- MAAT API reads applications for legal aid from the Criminal Applications datastore

### Who looks after the Criminal Applications datastore?
The Criminal Applications datastore is being developed and maintained by the Crime Apply and Crime Review teams in LAA Digital.

### What type of software is the Criminal Applications datastore?
The Criminal Applications datastore is an API built using Ruby on Rails. Applications are stored in a Postgres database. It is being developed in line with the UK digital service standard.

### Where is the Criminal Applications datastore hosted?
The Criminal Applications datastore is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### How old is the Criminal Applications datastore?
Criminal Applications datastore development began in late 2022.

### Who are the users of the Criminal Applications datastore?
The Criminal Applications datastore is only called by other software services.

### Where is the code for the Criminal Applications datastore?
The code for the Criminal Applications datastore is on Github at https://github.com/ministryofjustice/laa-criminal-applications-datastore.
