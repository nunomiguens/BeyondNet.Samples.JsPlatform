# BeyondNet.Product.MyTickets

A simple Tickets management based on Microservices Architecture

Technical Skills: TypeScript, NodeJS, Express, React, NextJS, GCloudP, Microservice Design, Docker and Kubernetes

# GOUGLE CLOUD PLATFORM

1. Cloud Context
   gcloud auth login, and select the new context and configure account with gcloud init using the SDK.
2. To work directly with GCP, execute the following commands:

- gcloud components install kubectl (optional if you want use a custom version)
- gcloud container clusters get-credentials <cluster-name> (directly if you still want run docker desktop)

3. Install nginx-ingress on GCE [LINK, https://kubernetes.github.io/ingress-nginx/deploy/#gce-gke]

- kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml

4. Get IP from Load balancer and paste it inside the host file.
5. When you go to the browser with Google chrome, do not forget "thisisunsafe"

net stop http
netstat -aon | findstr "80"

kubectl config delete-context gke_mytickets-dev_us-central1-c_mytickets-dev-cluster

# CREATE SECRET KEY FOR JWT

_WARNING_: This kind of solution should be used only for testing or dev facility.

Command: kubectl create secret generic <name> --from-literal=<key>=<value>

sample: kubectl create secret generic jwt-secret --from-literal=jwt=xxxxxx

# Redefine default GCloud login

gcloud auth application-default login
