# StudyNow Technical Task Setup Instruction
## After checkout run below command in root folder
 npm install
### For angular, go to studnowgui folder and run below command
 npm install
### Edit .env file and replace your mongodb URL and run below command
 npm start
### Access application from browser
URL: http://localhost:8000
### For angular, run below command
 ng serve
### Angular URL : http://localhost:4200

## Dockerize the application
### Create docker image by running below command:
docker build -t docker-iamge-name .

Decription: Navigate to project root folder and run above command or you can give project location in place of dot at the end.
### Run the docker image by running below command:
docker run -p 3000:8000 docker-iamge-name

Decription: Above command will run image and application will run on port 3000. Make sure mongodb URL is correct and application can connect where docker image is running.


