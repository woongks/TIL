single-server design

separating out the database (from the server)

vertical scaling
(as traffic grows, have a bigger server)

> single point of failure

horizontal scaling
(preferred approach)

> multiple servers with load balancer
> stateless

conclusion:

choose the simplest architecture that meets your projected traffic requirements.

in horizontal scaling, where do servers come from?

- provisioned within your own compnay's data centers
- cloud services( EC2, Google Compute Engine, Azure VM's)
- fully managed "serverless" services (Lambda, Kinesis, Athena)

scaling the database?

failover servers: cold standby

> have a periodic backup
> can take long. (down time)
> cheap, but not too safe way

failover servers: warm standby

> another db, but more like a replication of a host
> ready-to-go db
> can lose data (not as much as cold standby)

failover servers: hot standby

> frontend writing simultaneously to backup servers

horizontal scaling of databases: sharding
