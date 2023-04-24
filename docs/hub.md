### What is the LAA Hub?
The LAA Hub is a centralised system used in LAA Digital to move information across legacy systems. The LAA Hub runs scheduled jobs that copy data between databases, running as a batch scheduling/ETL coordinator for the LAA.

### Who are the users for the LAA Hub?
The LAA Hub is only used to facilitate data transfer between LAA systems

### What type of software is the LAA Hub?
The HUB is written in PL/SQL and hosted in an Oracle database, currently in AWS RDS.

Scheduling of jobs normally relies on the Oracle DBMS Scheduler, but some jobs are triggered as child sub-processes instead or at the completion of a given job.

### What is the future of the LAA Hub?
LAA Digital has stopped creating new Hub jobs. Instead, new services use modern interfaces, such as RESTful APIs, as a way of requesting data at the point of need. Gradually, as legacy services are replaced, so are the Hub jobs that served them, reducing the LAA's dependency on the LAA Hub. In this way, ultimately the LAA Hub will be replaced.
