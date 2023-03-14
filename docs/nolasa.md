### What is NoLASA?
NoLASA is a software system used to auto-search the Libra system for court case data.

### What is the background context for NoLASA?
The Managed Libra records application (MLRA) is an LAA system that shares a database with the means assessment administration tool (MAAT). It links cases to their corresponding cases in the HMCTS Libra system. This is for the purposes of tracking cases through the course / Legal Aid system in a joined up way (i.e. updates of a person's status through the courts system is updated in LAA systems once a case is linked).

If an LAA caseworker searches for a case on the Libra system using MLRA and they are unable to find a corresponding case (this can happen for numerous reasons, for instance a Legal Aid application being submitted by a legal provider before the police/courts have added onto LIBRA), the case is marked by a caseworker as 'NOT ON LIBRA' and places onto a backlog queue (the 'not on libra' queue). Case workers will then research these cases at a later date to see if the corresponding case is now on Libra system.

This researching can take time as there is not a great way of prioritizing cases that may be on Libra. This is where the Nolasa application comes in.

### How does NoLASA work?
Not On Libra Auto-Search Application (NOLASA) is a micro-service that reads cases that have been marked as 'not-on-libra' from the MLRA database once a day (8pm). It then auto-searches the HMCTS Libra system via the LAA's Infox message broker service. The message protocol used is SOAP.

If NOLASA finds that there are results returned for a case it updates its status in MLRA to say 'RESULTS FOUND'. This means that caseworkers can filter 'not on libra' cases to ones that they know they will have results for. They can then prioritize their case searching and linking more effectively.

### What relationships does NoLASA have to other software systems?
- NoLASA connects to the MAAT database.
- NoLASA calls to InfoX to perform searches of Libra

### Where is NoLASA hosted?
NoLASA is hosted in the LAA Landing Zone, which uses the AWS London region.

### Who looks after NoLASA?
NoLASA is maintained by the Crime Core team in LAA Digital.

### What type of software is NoLASA?
The NOSALA micro-service has been developed using Springboot framework with enbedded Tomcat server. Tomcat is fully contained in the fat JAR file. Gradle packages executable JAR file which is deployed as Docker image on AWS ECS.

### How old is NoLASA?
The first code commit for NOSALA was pushed on 8th August 2017. The history of the project before that is unknown.

### What is the future of NoLASA?
HMCTS are replacing the Libra system with a new service called Common Platform. Once the replacement is complete, the Legal Aid Agency will no longer need to communicate with the Libra system and NOSALA can be decommissioned. It is highly likely that NOSALA will be needed until this time since there are no plans to build an alternative auto-search for Libra.
