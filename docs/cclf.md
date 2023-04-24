### What is CCLF?
CCLF is used by LAA caseworkers to process claims for costs for Crown Court defence litigator work. These are claims from solicitors. Sister system CCR performs a similar function for advocate (barrister and solicitor-advocate) claims.

### Who looks after CCLF?
CCLF is maintained by the Assess a Claim team in LAA Digital.

### Who are the users for CCLF?
- Billing caseworkers use CCLF to assess and process claims for defence litigator work

### What relationships does CCLF have with LAA Digital systems?
- CIS takes processed claims from CCLF via the LAA Hub
- CCLF loads defendant data from MAAT via the LAA Hub
- CCLF fetches claim information from CCCD
- CCLF calls to LAA Portal to authenticate users

### What type of software is CCLF?
CCLF is a Java application that connects to an Oracle database, with PL/SQL code for handling of claims data.

### Where is CCLF hosted?
CCLF is hosted in the LAA Landing Zone, which uses the AWS London region.
