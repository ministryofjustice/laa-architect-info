### What security guidance should LAA Digital teams use?
LAA Digital teams should:
- Follow the Ministry of Justice cyber security guidance - https://security-guidance.service.justice.gov.uk/#cyber-and-technical-security-guidance
- Be aware of the OWASP list of common vulnerabilities when developing applications - https://owasp.org/www-project-top-ten/
- If unsure, refer to the MoJ Cyber Security team (who can be messaged in the #security Slack channel)

### What should LAA Digital teams do if they have a security related incident?

Teams should assess the impact of any breach and take any immediate action to secure their applications and data.

Security incidents will happen, teams should not worry about informing others and flagging suspected breaches. You should inform:
- The LAA Technical Architects
- The MoJ Cyber Security team (via the #security Slack channel)
- Any other teams who have services that might be effected
- If appropriate, the LAA Digital SMT and other stakeholders

Once the incident is resolved, it is important to learn the lessons of the breach and put in place any appropriate mitigations and controls. A retrospective or postmortem should be held to help facilitate this.

### What security testing should LAA Digital teams do before releasing new software services?
It is normal for LAA Digital teams to carry out an ITHC before releasing new services to private or public beta. It is also recommended to hold a threat vulnerability modelling session (TVM) prior to the ITHC, which can help to form the scope for the ITHC testing. The MoJ Cyber Security team can help to facilitate TVM sessions with teams.

LAA Digital teams also use security tooling as standard:
- Snyk for vulnerability scanning
- SonarCloud for code analysis
- Sentry for error monitoring
- ModSec as a web application firewall (this can be configured for services running on MoJ Cloud Platform https://user-guide.cloud-platform.service.justice.gov.uk/documentation/networking/modsecurity.html)

For other security tooling and testing techniques, please refer to the LAA Developer (Slack #laa-developers) and Cyber Security (Slack #security) communities.
