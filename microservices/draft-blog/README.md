# My Blog

- Client Skills:
  React, Redux
- BackEnd Skills:
  NodeJS, Express
- Database Skills:
  Firebird, MongoDB

Status: In Progress
Design: Microservice App

# MY BLOG - DRAFT

The idea here is to create an experimental project to test and apply different concepts and tools before starting the formal project.
For this case, we select a Simple Blog project, where we can send POST and COMMENTS, and create customs messages through a custom and
simple service bus.

Some _NOTES_ that you should keep on mind in order to execute the demo:

1. When and deployment with Kubernates you probably will have some errors like ErrImagePull, ErrImageNeverPull, and ImagePullBackoff.
   So, you can execute the simplest solution that is to provide an imagePullPolicy to the pod.

a. kubectl delete -f infra/k8s/
b. Update your pod manifest:
spec:
containers: - name: posts
image: cygnet/posts:0.0.1
_imagePullPolicy: Never_

c. Then, run kubectl apply -f infra/k8s/

This will ensure that Kubernetes will use the image built locally from your image cache instead of attempting to pull from a registry.

2. RESTART Deployments

a. kubectl rollout restart deployment [name]

3. NGINX INGRESS from Kubernetes
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml

4. Important Note About Port 80
   You'll need to identify what is using this port and shut it down. Some students have even had applications from other courses or personal projects still running.
   For Windows Pro users, both SQL Server Reporting Services (MSSQLSERVER) and the World Wide Web Publishing Service / IIS Server have been the most common services
   causing a conflict.

macOS / Linux
sudo lsof -i tcp:80

Windows:
netstat -aon | findstr :80

Edit Localhost fro Development

Path: C:\Windows\System32\drivers\etc\hosts

add: 127.0.0.1 beyondnetblogs.com

5. CLIENT APP
   Create-react-app does have an open issue tracking this: https://github.com/facebook/create-react-app/issues/8688
   To solve this, we have to make a small update to the Dockerfile in the client folder. Find the Dockerfile in the client folder and make the following change:

FROM node:alpine

_Add the following line_
ENV CI=true

WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
