### What is LAA Portal?
LAA Portal (also known as the LAA Online Portal, and just Portal) is used to authenticate users to LAA web services. Users, both internal and external, login to the LAA Portal and are presented with a list of services they can access.

### What relationships does LAA Portal have to other software systems?
Many LAA Digital systems integrate with Portal in order to authenticate users of their service:
- CCMS PUI
- CCMS EBS
- Civil Apply
- CCR
- CCLF
- Crime Apply
- EForms
- CWA
- OAS

CWA connects to LAA Portal via LAA Hub and ODIP to send Portal data about new users and updates to existing users

### Where is LAA Portal hosted?
LAA Portal is hosted in the LAA Landing Zone, which uses the AWS London region.

### Who looks after LAA Portal?
LAA Portal is maintained by the PCUAM team (Provider Contracts and User Access Management) in LAA Digital.

### What type of software is LAA Portal?
LAA Portal is an identity service that consists of:
- OID (Oracle Internet Directory): LDAP directory
- OAM (Oracle Access Manager): access control
- OIM (Oracle Identity Manager)
- Oracle Database
- A custom Java application that serves the login and homepage
- LAA Service Status dashboard: ReactJS app that provides users with status updates on LAA web services

The portal acts as a SAML (Security Assertion Markup Language) Identity Provider (IDP).  Other applications (SAML Service Providers (SP)) can then authenticate and receive authorisation information from the Portal.

### Who are the users of LAA Portal?
The LAA Portal serves a wide range of internal and external users who need access to LAA systems.

### What is the future of the LAA Portal?
LAA Digital continues to review the identity space. LAA Portal is a potential candidate for being replaced with a newer identity provider, subject to the outcomes of discovery into the space. A key challenge for any replacement would be the need to smoothly manage the transition of users and systems to a new service.
