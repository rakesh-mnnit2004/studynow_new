# studynow

#Dockerize the application
1. Create docker image by running below command:
docker build -t docker-iamge-name .
Decription: Navigate to project root folder and run above command or you can give project location in place of dot at the end.
2. Run the docker image by running below command:
docker run -p 3000:8000 docker-iamge-name
Decription: Above command will run image and application will run on port 3000. Make sure mongodb URL is correct and application can connect where docker image is running.

#Add CI/CD (e.g., GitHub Actions, Jenkins)
