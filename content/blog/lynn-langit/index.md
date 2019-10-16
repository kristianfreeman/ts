---
title: "Serverless systems in production with Lynn Langit"
date: "2019-10-17T11:00:00.00Z"
description: "[Lynn Langit](https://lynnlangit.com) is a cloud architect who codes, building efficient serverless or container-based bioinformatics cloud data pipelines world-wide."
featuredImage: ./lynn-langit.jpg
---

#### What's your background, and what are you working on?  

I am a Cloud Architect and Developer. I have been running my own consultancy for 8 years.  Currently, I am working with several bioinformatics clients, building and implementing high volume data pipelines for genomics research.  In the past I've worked with ad-tech, fin-tech and education clients, building similar types of cloud-based, mostly serverless solutions.

#### What's the first project/workload for which you adopted a serverless architecture?

I used Google App Engine, which included a NoSQL serverless database to create a scalable website for my non-profit in 2011.  Until recently, I'd built most of my serverless solutions on AWS - however, lately, my team is building on GCP.

#### What excites you most right now about the serverless paradigm?

Developers can build faster.  Customers get value much more quickly.  Less boring stuff to do, such as configuring VMs.

#### What's your favorite thing you've built with serverless recently?

AWS-based data lake for genomics.  At the start, a single query on my client's on-premises Hadoop cluster took 500 hours. My team got a cloud-based query job to run in as little as 10 minutes.  We replaced the data portion (HDFS) of the client's pipeline with S3, which is, of course, serverless. We still needed to use a stateful solution for the compute though, as their particular algorithm used machine learning.  So we used Kubernetes on Spark for that to replace the VM-based previous solution.  

We [wrote about this work and open-sourced the code](https://medium.com/@lynnlangit/scaling-custom-machine-learning-on-aws-part-3-kubernetes-5427d96f825b).

#### How would you define a serverless architecture?

Depends on what you are building.  I think the most common misconception is that the only valid serverless architectures are those that are completely serverless.  As I just described, my team often builds a blended (i.e. some serverless, some containers) solution.  

That being said, the canonical case is, of course, AWS.  S3 and/or DynamoDB for serverless state, or data. Lambda and API Gateway for compute.  IAM roles for security.

However, in building massively scalable data pipelines, I am including more and more serverless APIs in my designs. For example, using GCP serverless Vision or Video API is quite common now.

Also my team has built a number of what we call 'Serverless SQL' solutions.  We are big fans of GCP BigQuery in particular.

#### What do you think is the biggest weak point of the serverless ecosystem right now?

Tooling!  I am currently scheduled to present a series of keynotes and talks on the topic of 'Visualizing Serverless Systems'.  My goal is to inspire a world-wide community who will build better tools, so that we can address this problem. My dream is to be able to use dynamic & executable diagrams to work with serverless solutions.

Also, developers and DevOps teams have to 'unlearn' server-based patterns - this is non-trivial.  In particular, deployments have to be automated when building serverless solutions. Teams tend to dramatically underestimate the amount of effort to build CI/CD pipelines.

#### What impact has adopting serverless had on your organization?

Deliver value to customers faster and cheaper.  Functions vs Containers is almost not comparable due to the difference in difficulty of use.  Also working with container clusters is often more difficult than auto-scaling and load balancing VMs.  There is such a big learning curve for actually implementing Kubernetes effectively!

#### What's your advice for serverless developers who are just starting out?

Build, build, build - the more you build, the more you learn.  Also Serverless is NOT just AWS Lambda. Get to know available APIs for a wide variety of capabilities - security, machine learning, data processing, etc...  When an API fits for your particular business need, use it. 

Serverless data pipelines are much more interesting to me to build than any other pattern, such as serverless web sites or mobile apps. This is probably because using machine learning APIs is bringing a whole new set of capabilities to many more solutions my team builds.

Also DevOps is as important as Dev - this is logical, but maybe not obvious. When you build based on common serverless architecture patterns, you will be deploying to many more objects (functions).  Blended teams working physically in the same location is a key pattern for success due to the increased deployment complexity of serverless systems.  

Finally, with more moving parts, security implementation for serverless solutions becomes increasingly complex too.  Starting with the basics, such as 'for AWS Lambda IAM role configuration is key and should be VERIFIED' and 'for AWS S3 bucket security policies must adhere to testable guidelines' is critical.

#### What are your favorite resources for learning more about the serverless ecosystem? (People, blogs, etc)

I follow many people on twitter and consume all of their content (YouTube talks, GitHub sample code, Company blog posts, etc...). Here are my top serverless people and their key area of expertise:

**Adrian Cockcroft (AWS)** - strategy  
**Jeff Barr (AWS)** - product / services  
**Sam Newman** - architecture patterns  
**Richard Seroter** - architecture patterns  
**Nicole Forsgren (Google)** - DevOps  
**Kelsey Hightower (Google)** - Kubernetes  
**Sara Robinson (Google)** - Machine Learning  
**Troy Hunt** - Azure/Security  
**Teri Radichel** - AWS/Security  
**Forrest Brazeal** - AWS perspective + comics  
**Colaboratory (Google)** - Machine Learning notebooks  
**Rachel Tatman (Kaggle/Google)** - Machine learning  
**DynamicWebpaige (Google)** - TensorFlow  
**Alibaba Cloud (Alibaba)** - product/services  
**Bridget Kromhout (Azure)** - Kubernetes  
**Laurence Moroney (Google)** - Machine Learning  
**Mike Roberts** - AWS perspective  
**Charity Majors (Honeycomb)** - Observability  
**Eric Hammond** - AWS Serverless implementation details  
**Felipe Hoffa (Google)** - BigQuery / Serverless SQL  
**Gojko Adzic** - AWS Serverless implementation details  
**Paul Stack** - DevOps  
**Janakiram MSV** - Azure serverless patterns / IoT  
**Corey Quinn** - AWS reality check + humor   
