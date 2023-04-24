### What is CCR?
CCR is a web service that manages advocate fee claims for criminal legal aid. CCR stands for Crown Court Remuneration.

### Who looks after CCR?
CCR is maintained by the Assess a Claim team in LAA Digital.

### Who are the users for CCR?
- Billing caseworkers use CCR to assess and process claims for advocate fees

### What relationships does CCR have with LAA Digital systems?
- CIS takes processed claims from CCR via the LAA Hub
- CCR loads defendant data from MAAT via the LAA Hub
- CCR fetches claim information from CCCD
- CCR calls to LAA Portal to authenticate users

### What type of software is CCR?
CCR is a Java application that connects to an Oracle database, with PL/SQL code for handling of claims data.

### Where is CCR hosted?
CCR is hosted in the LAA Landing Zone, which uses the AWS London region.
