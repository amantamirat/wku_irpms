# Wolkite University Institutional Research and Project Managment System
This is a research and project managment software system suitable for the Research and Community Vice President Office of Wolkite University (Ethiopian Universities). The project started by [Wolkite Univesity](https://www.wku.edu.et) in 2024.
Institutional Research and Project Management (IRPM) is used to electronically:
- Create, route, and approve Proposal Approval Forms (PAF) to submit funding proposals to sponsors, including Grants.gov
- Route an unfunded agreement (UFA) for processing (e.g., Non-Disclosure Agreement, Material Transfer Agreement, etc.)
- Create, route, and approve Awards (AWD)
- The Data Set contains administrative and financial data on proposals and awards processed by the Office of Research and Sponsored Projects.


## Required Tools
For system develoment: download and install Nodejs and MongoDB
- To start mongo db, you might use the following commands
```bash
# for linux 
sudo systemctl start mongod
# for windows open your terminal as administrator then
net start MongoDB
```

## How to clone
Install git on your windows or linux machine, and then configure your account credintials of your git and PAN, you may use these commands
```bash
git config username="yourusername" 
#or
git config --global user.name="yourusername" 
git config useremail="youremail"
#or
git config --global user.email="yourusername" 
#then clone this repo 
git clone https://github.com/amantamirat/wku_irpms.git
# it will ask you to log in via browser or ask you to enter a password (PAN) for PAN use the one you recived.
```

## How to run
### Server
Run the server which developed using NodeJS, but before running the server, make sure you create .env file inside the backend folder, and paste the associated confugrations that you have recieved (port and database infos).
```bash
cd backend
npm start
```
if ts-node-dev (for typescript compilation and excution) is not installed on your node enviroment install it using 
```bash
npm install -g ts-node-dev
#then
npm install tsconfig-paths --save-dev
```
### Client
The client or the frontend is developed using react, with next framework, and PrimeReact UI Library. 
```bash
cd frontend
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Then add Next on top of it using:
```bash
npm install next react react-dom
```
### Test Scripts 
Inside test scripts there are scripts primerly used to populate random data to the server table,update selcted items and evaluate different methods of the server. You can edit and run them like
```bash
npx ts-node testColleges.ts
```
 

## Learn More
- Front end developed using NextJs
    - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- Back end developed using NodeJs
    - [Learn Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) - an introduction to Node.js.

## Scope
- Research Development and Partnership Directorate
- Postgraduate Research Directorate,
- Community Engagement and Consultancy Services Directorate,
- Technology Transfer and University Industry Linkage Directorate,
- Publication and Documentation Directorate
- Indigenous Knowledge Directorate



