### What is the Court Data Adaptor service?
Court Data Adaptor (also known as CDA) is a software service used to connect LAA systems to the Common Platform run by HMCTS.

### What relationships does Court Data Adaptor have to other software systems?
- Court Data Adaptor calls to the Common Platform to request court data and to send legal aid status updates.
- Common Platform calls to Court Data Adaptor to send court case updates.
- MAAT API transfers data to Court Data Adaptor via SQS to send legal aid status updates to Common Platform.
- Court Data Adaptor transfers data to MAAT API via SQS to send court cause updates from Common Platform.
- View Court Data calls to Court Data Adaptor to retrieve court case data.

### Where is Court Data Adaptor hosted?
Court Data Adaptor is hosted in the MOJ Cloud Platform, which uses the AWS London region.

### Who looks after Court Data Adaptor?
Court Data Adaptor is maintained by the Crime Core team in LAA Digital.

### What type of software is Court Data Adaptor?
Court Data Adaptor is an adaptor that provides an interface to HMCTS data in the Common Platform. Court Data Adaptor has bi-directional data flows with the Common Platform, sending and receiving data and requests. The main function of Court Data Adaptor is data translation, and queueing of requests. Court Data Adaptor is a Ruby on Rails application that uses a Postgres database.

### Who are the users of Court Data Adaptor?
Court Data Adaptor is only consumed by other software systems.

### How old is Court Data Adaptor?
Court Data Adaptor was created in 2019.

### What is the future of Court Data Adaptor?
Court Data Adaptor will continue to provide an interface into court data for LAA systems. As HMCTS continues to roll out Common Platform across more UK courts, the volume of requests and data going through Court Data Adaptor will increase.
