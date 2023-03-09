### Where are LAA digital software systems hosted?
LAA digital software systems are hosted in one of four places:
- LAA Landing Zone
- Cloud platform
- Modernisation Platform
- 6 Degrees

### What is the LAA Landing Zone?
The LAA Landing Zone hosts LAA software systems in the the AWS London region. The LAA Landing Zone was created as a space to 'lift and shift' older systems that were previously running in on-premises hosting into AWS cloud. It was designed to simplify the initial migration of these systems but with the intention that those systems would then be moved into other AWS platforms with better standards and guardrails, namely Cloud Platform and Modernisation Platform. Systems that run on LAA Landing Zone will therefore need to be migrated into Cloud Platform or Modernisation Platform over the coming years. The LAA Landing Zone is run by the LAA Ops team.

### What is the Cloud Platform?
The Ministry of Justice’s Cloud Platform is a hosting platform for digital services built within the Ministry of Justice.

The Cloud Platform uses the Amazon EKS service.

The Cloud Platform is the default choice for hosting new software applications run by LAA digital.

The user guide at https://user-guide.cloud-platform.service.justice.gov.uk/ provides more information for teams that use the Cloud Platform.

### What is the Modernisation Platform?
The Ministry of Justice’s Modernisation Platform is a hosting platform for digital services built within the Ministry of Justice. It provides an alternative hosting option to the Ministry of Justice’s Cloud Platform, for software that is not suited to running in AWS EKS.

The user guide at https://user-guide.modernisation-platform.service.justice.gov.uk/provides more information for teams that use the Modernisation Platform.

### What is 6 Degrees?
LAA digital uses the term '6 Degrees' to refer to the historical hosting platform for LAA software applications. We have migrated nearly all of those software applications away from 6 Degrees and into AWS hosting - initially to the LAA Landing Zone. The EBS component of CCMS is still running in 6 Degrees hosting, however. VPNs connect 6 Degrees to the LAA Landing Zone to provide connectivity between EBS and other CCMS components.

### Where should new LAA Digital services be hosted?
New services should be hosted in the MOJ Cloud Platform. If teams feel that the service cannot be appropriately run on Kubernetes in Amazon EKS then teams can consider using MOJ Modernisation Platform instead.

### How can services in different MOJ platforms communicate with each other?
he MOJ Transit Gateway provides connectivity between Cloud Platform, Modernisation Platform, and the LAA Landing Zone. Services can also communicate over the internet via API endpoints. 
