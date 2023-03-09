### What is InfoX?
InfoX is a software system used to connect legal aid systems with a court system called Libra.

### What relationships does InfoX have to other software systems?
- InfoX calls to Libra to search court case information and send updates on the status of criminal legal aid applications.
- Libra calls to InfoX to send court case hearing updates.
- Infox uses a SOAP Gateway to connect with Libra.
- InfoX is an adaptor and does not persist the data it receives. Instead it writes court case updates to the MAAT database.
- The MLRA system calls to InfoX to search for court case data.
- The NoLASA system calls to InfoX to check for court case updates.

### Where is InfoX hosted?
InfoX is hosted in the LAA Landing Zone, which uses the AWS London region.

### Who looks after InfoX?
InfoX is maintained by the Crime Core team in LAA Digital.

### What type of software is InfoX?
InfoX is an adaptor to the Libra system run by HMCTS. It is a Java application and uses Tomee and the SpringMVC framework. It runs on Java 8. It is not regularly updated.

### How old is InfoX?
The first code commit for InfoX was pushed on 19th May 2017. The history of the project before that is unknown.

### What is the future of InfoX?
HMCTS are replacing the Libra system with a new service called Common Platform. Once the replacement is complete, the Legal Aid Agency will no longer need to communicate with the Libra system and InfoX can be decommissioned. It is highly likely that InfoX will be needed until this time since there are no plans to build an alternative adaptor to Libra.
