Starting a node-based api for jwt authentication
===

Start mongo container 
```
docker run --name mongo -p 27017:27017 -d mongo
```

Run from Dockerhub (assumes Mongo container is running and container is on local network)
```
docker pull astrobass/node-api-jwt

docker run --name api-jwt --link mongo:mongo -p 8888:8888 -d astrobass/node-api-jwt
```

Run Watchtower to automatically pull latest Docker image from Dockerhub when it changes
```
docker pull centurylink/watchtower

docker run -d --name watchtower -v /var/run/docker.sock:/var/run/docker.sock centurylink/watchtower --cleanup
```

Other options
---

Start api-jwt container manually
```
docker build -t api-jwt .

docker run --name api-jwt --link mongo:mongo -p 8888:8888 -d api-jwt
```

Run from Dockerhub (assumes Mongo container is already running and linking via Docker container bridge)
```
docker pull astrobass/node-api-jwt

docker run --name api-jwt --link mongo:mongo -p 8888:8888 -d astrobass/node-api-jwt
```
