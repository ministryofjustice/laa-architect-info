### Who are LAA Digital's internal users?
Internal users of LAA Digital systems include staff from the Legal Aid Agency who process and manage the legal aid fund:
- Caseworkers who assess applications and claims for legal aid
- Supervisors who manage caseworkers
- The assurance team who audit the 'error rate' of legal aid
- The contracts team who manage contracts with law firms and manage access to legal aid systems

### Who are LAA Digital's external users?
External users of LAA Digital systems include:
- Legal aid providers (solicitors and those who work for law firms) who apply and claim for legal aid on behalf of clients
- Members of the public who search for legal providers and submit information when applying for legal aid

### How do LAA Digital systems authenticate users?
Currently most LAA Digital services use the [LAA Portal](/docs/laa-portal) to authenticate both internal and externals users. However, some systems have implemented their own identity solutions instead. Going forward, new services are encouraged to use LAA Portal for authenticating external users and use the MOJ AzureAd instance for authenticating internal users.

### Why use LAA Portal for external users?
- LAA Portal provides a unified front door to LAA services for providers.
- LAA Portal syncs user data from CWA which provides user management capabilities. This means that systems do not need to take responsibility for handling JML process (joiners, movers, leavers) themselves.
- LAA Portal is managed by the PCUAM team. Contact PCUAM for more details or for onboarding new services.

### Why use MOJ AzureAD for internal users
The MOJ AzureAD instance is used to authenticate DOM1 login. This means that systems can provide a single-sign-on experience for internal users, who only need to login to DOM1 and then can be automatically authenticated with LAA systems. MOJ AzureAD is managed by the MOJ Tech Services team. Contact the TS Demand team to request onboarding of new services to MOJ Azure AD.  

### What authorisation, user management and access control options are there for LAA Digital systems?
If using LAA Portal, users and roles are managed via a system called CWA. Systems that do not integrate with LAA Portal need to ensure that appropriate processes are in place for the management of users and user roles, including JML.

Each service is responsible for authorising what users can and cannot do on the service. This means providing appropriate access controls based on the role of the user, together with auditing, logging and security controls. For more guidance on access control and logging, please refer to the [MOJ security guidance](https://security-guidance.service.justice.gov.uk/#access-control)
