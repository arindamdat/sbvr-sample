# sbvr-sample
This is a sample project to try-out pine js with SBVR

## Prerequisites
- Node JS
- YARN [***IMPORTANT: Please install yarn from this .msi installer only https://yarnpkg.com/en/docs/install#windows-stable]
- Docker Desktop and make sure it is running.

## Steps to run the project:
1. Clone this repository
2. Open a terminal of your choice
3. Change working directory to the root of the repository [e.g, cd /d/my-project/sbvr-sample]
4. Run the following commands in sequence<br/>
     `yarn`<br/>
     `docker-compose up`
5. Close the terminal
     
Once you are done with the above steps, it will run following two docker containers:
- Postgres: localhost:5432. Username: SYSDBA, Password: masterkey. You can use any client tool to connect to this Postgres server.
  I prefer "DBeaver".
- A container hosting the api at port 1337

Now you can access the api at http://localhost:1337/eproc. This is a ODATA supported Rest api. You can get the entire model information at this url http://localhost:1337/eproc/$metadata. If you want a more readable and clean JSON format of edmx, you can hit this custom url http://localhost:1337/edm-meta?apiRoot=eproc. NOTE: here the querystring apiRoot should contain the Root of the api, for example eproc, employee-mgmt, etendering etc. This server can host multiple apis (or domain). For now, we have only e-procurement which has apiRoot /eproc.
