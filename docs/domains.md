### What are software domains?
Domains define specific bounded areas of related functionality and data. Domain-driven-design (DDD) is an approach to software development that focuses on developing a rich understanding of the processes, language, and rules of a domain. DDD is particularly suited to complex business domains.

### What software domains does LAA digital have?
LAA digital has domain boundaries around the different types of law (criminal, civil) and the different phases of the legal journey (custody, advice on legal matters, representation in court).

Strong differences exist between these domains - each has its own language, rules and context for users. This helps us to draw appropriate boundaries around the scope of LAA Digital software applications.

At a high-level, Criminal legal aid domains include:
- Advice in custody
- Representation in a criminal court
  - Magistrates (crime lower)
  - Crown (crime higher)

At a high-level, Civil legal aid domains include:
- Civil legal help & advice
- Representation in a civil court

There are also domains that cut across both civil and criminal:
- Legal aid providers
- Eligibility for legal aid
- Payments
- Generic domains:
  - Identity and user management
  - Data & reporting

### Why is DDD a good fit for LAA Digital teams?
DDD is designed for complex domains that have lots of business logic. The legal system is complex with many different phases and scenarios, and there are a large number of rules around determining eligibility for legal aid in each scenario. As such, LAA Digital domains tend to be complex, making DDD a useful approach.

### What can LAA Digital teams do to manage complexity?
On a day to day basis, teams should think about:
- Onboarding (because there is a large on-ramp and lots to learn in order to be effective)
- Knowledge capture (documentation, automated tests, training materials etc)
- Retention and wellbeing
- The principles of domain-driven design

Teams should treat these things as first-class priorities and expect to spend more time on them than normal, even if it means slowing down on other priorities in the short-term.

In terms of planning and strategy:
- When building new services, think beyond the horizons of the initial MVP - which components of older systems might we be able to turn off, how might the transition be handled
- When prioritising, see decommissioning as a high-value achievement in its own right and a cause for celebration.
- Look for opportunities to buy instead of build (to limit the code we own) but avoiding the Fake COTS trap (buying but then needing to heavily customise)
- Look for opportunities to reuse software where possible (to limit the code we own) but favouring duplication over reuse if it makes things easier to manage
- If integrating or working with legacy systems, bear in mind that they often weren’t designed for iterative change cycles, so the pace of change is slowed
