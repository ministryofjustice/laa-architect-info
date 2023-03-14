### What programming languages are used by LAA digital teams?
Whilst encouraging alignment, LAA digital prefers to give teams the autonomy to make the software choices that best fit their context rather than mandating a technology stack. That said, LAA digital does favour open-source over closed-source software.

When developing new software, LAA digital teams tend to use either Ruby on Rails, Python or Java.

LAA digital also has legacy systems with large amounts of PL/SQL code.

### What technical standards do LAA digital teams use?
LAA digital teams follow:
- The UK digital service standard when building new services (https://www.gov.uk/service-manual/service-standard)
- UK government standards when designing APIs (https://www.gov.uk/guidance/gds-api-technical-and-data-standards)
- UK government accessibility standards (https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)
- Ministry of Justice cyber security guidance (https://security-guidance.service.justice.gov.uk/#cyber-and-technical-security-guidance)
- Ministry of Justice architecture principles (https://docs.google.com/document/d/1XBTuCw0y--4fZpHcTLWilSFx_qz3aewTiWYJGTZU4sA/edit?usp=sharing)

### What tooling do LAA digital software teams use?
LAA digital teams have autonomy to choose the tooling that best fits their context. Alignment of tooling can help with sharing of best practice, onboarding time, troubleshooting. Tools that are commonly used by LAA digital teams include:
- Snyk: vulnerability scanning
- Sentry: error monitoring
- SonarCloud: code analysis
- Prometheus: metrics monitoring
- Kibana / ELK: log viewing
- AlertManager: handling alerts
- Geckoboard: dashboarding
- Tuple: pair programming

### How many software systems does LAA digital have?
LAA digital is responsible for around 90 software systems; the exact number depends on how you define a software system. The number of systems has increased year on year as LAA digital teams:
- a) uncover 'shadow' or 'unsupported' systems that are still needed but are not managed or owned by any team
- b) replace large monolithic software with micro-services
- c) struggle to decommission older systems

### Why does LAA digital have so many software systems?
LAA digital has steadily accumulated software over the past 25 years. Some possible reasons for this are:
- a) The natural tendency for organisations to accumulate software as more of their processes are digitised
- b) The variousness of legal aid. There isn’t a single legal aid journey, there are a number of fundamentally different ones (civil, criminal, legal advice, representation in court). Each one represents a different process with its own language, rules and context for users. Generally speaking, we have found that an entirely different set of services are needed for each legal aid journey type.
- c) The complexity of legal aid. From a software perspective, we find lots of business logic that is unique to legal aid. This impacts the size of our technical estate because our services tend to require lots of different component capabilities, which are - often appropriately - run as separate software applications.
- d) The [challenges of legacy displacement](https://martinfowler.com/articles/patterns-legacy-displacement/) and the need to 'dual run' new micro-services with older monolithic systems until they are fully replaced
- e) The need for 'transitional architecture' as we modernise and replace our legacy systems, such as additional APIs and adaptors for integrating new services with those systems

### What kind of software does LAA digital have?
LAA digital has software that supports over a million legal aid applications and over £2 billion in legal aid payments every year, giving those who need it access to justice.

LAA digital has a range of software types including:
- online application forms
- eligibility calculators
- caseworking systems
- payment systems

The nature and condition of these systems varies. One significant factor is whether the system was built before or after LAA digital was created in 2016:

- From around 2000 to 2016, the LAA built systems and digitised a whole raft of paper-based processes using Oracle  products like EBS, Oracle Database, and APEX. As a result, Oracle now powers most of the LAA digital’s biggest systems - CCMS, CWA, CCR, CCLF, MAAT, MLRA, OAS, ERIC, CIS, PIMS, TV, IFS, etc. Legal aid wouldn’t happen without these systems and the teams that look after them -  together they support over a million legal aid applications and over £2 billion in payments every year, giving people who need it access to justice. However, these systems are also problematic: they are fragile and hard to change, and the knowledge they require is increasingly difficult to find and retain. With significant changes to legal aid policy on the horizon (such as the Means Test Review, CLAIR, etc), the struggle to keep these systems operational isn’t getting any easier.

- LAA digital was formed in 2016 as part of a GDS-led movement to bring modern digital approaches into government. LAA digital created a number of autonomous cross-functional product teams to build new services in line with the UK digital service standard. LAA digital shifted towards favouring open source technologies, in particular Ruby, Python and Java.

### What is the future of LAA digital systems?
- LAA digital is working to reduce dependency on systems that meet the government definition of 'legacy' https://www.gov.uk/guidance/managing-legacy-technology.
- The process of legacy transformation will likely continue through a mix of 'replacement' and 'modernisation' of LAA digital's older systems.
- LAA digital has favoured an iterative approach to replacement - picking off capabilities from legacy systems one-by-one rather than replacing whole systems as a big bang. This method has the advantage of enabling teams to release value quicker and get users into the feedback loop as early as possible. It does however mean lots of ‘dual running’.
- LAA digital has entered a ‘transitional state’, during which its technical estate will grow before it can be streamlined back down. This is because LAA digital's biggest legacy systems were not designed in a way that allows specific components to be isolated and turned off as new services come along.
- During this period, many legacy systems will continue to be critical to the functioning of legal aid and will need to be appropriately modernised so that they remain operational, secure, and updated in line with legal aid policy changes. This modernisation process will continue to be challenging.
- LAA digital is designing more resilient and adaptable systems in order to help achieve the goal of creating 'simplified and more reliable access to legal aid services'. LAA Digital teams are also working to make sure that systems surface the right data to help drive decisions around simplification and automation.
