---
title: Yan Cui
date: "2019-07-24T13:00:00.284Z"
description: "Yan Cui, known online as theburningmonk, is an independent consultant, speaker, and blogger. Yan is also the author of Production-Ready Serverless and a Developer Advocate at Lumigo."
---

![Yan Cui](./yan-cui.jpg)

#### What's your background, and what are you working on?

I have been running production workloads in AWS for almost 10 years and I have been focused on the serverless space for the last 2-3 years. I'm an AWS serverless hero and an independent consultant. I work with clients all around the world to help them adopt serverless technologies and avoid costly mistakes.

#### What's the first project/workload for which you adopted a serverless architecture?

Soon after Lambda was announced in 2014, I implemented a real-time event processing system with Lambda and Kinesis in early 2015.

#### What excites you most right now about the serverless paradigm?

Being able to focus on the things that my users want, rather than all the yak shaving (or undifferentiated heavy-lifting) that I used to have to do just to get to do the things I actually need to do!

#### What's your favorite thing you've built with serverless recently?

Recently, I built a self-healing kinesis function with a client in order to satisfy some unusual operational constraints. It was a fun exercise, and you can read about it [here](https://theburningmonk.com/2019/05/a-self-healing-kinesis-function-that-adapts-its-throughput-based-on-performance/).

#### How would you define a serverless architecture?

I see a "serverless architecture" as one where you are not responsible for managing the infrastructure - the underlying servers, the machine images, patching the OS, configuring load balancing, auto-scaling and so on. These architectures evolve around function-as-a-service (FaaS) platforms such as AWS Lambda, where we focus on writing the business logic and let the cloud provider handle the infrastructure. Many of these architectures are also designed around and driven by events - e.g. a user logging into the application, an IOT sensor recording a new data point, or a file being uploaded to S3, etc.

#### What do you think is the biggest weak point of the serverless ecosystem right now?

The vendor ecosystem around serverless observability is still maturing. Compared with the tooling available to microservices running in containers or VMs, the tooling support for serverless applications is still pretty far behind. But things are improving rapidly. There are serverless-focused vendors that are working hard on solving the problem, such as Lumigo and Epsagon. Vendors who had mainly catered for VMs and containers are also starting to pay attention to serverless. And the native solutions from the cloud providers (such as CloudWatch) are improving too.

#### What impact has adopting serverless had on your organization?

Systems became more scalable and robust, and more secure. Feature delivery became faster, and teams are able to react to customer feedback on a more timely basis. Consequently, the interaction between the product and development teams improved. Developers became happier because fewer things go wrong and they get stuff done faster!

#### What's your advice for serverless developers who are just starting out?

Learn from others and don't be afraid to just try something out. You learn an awful lot by experimenting, and with serverless where you only pay for what you use, these experiments are cheap.

#### What your favorite resources for learning more about the serverless ecosystem? (People, blogs, etc)

Jeremy Daly's ["off by none"](https://www.jeremydaly.com/newsletter/) newsletter is a great place to start. Also, read anything by Ben Kehoe or Paul Johnston, [A Cloud Guru's blog](https://read.acloud.guru/) has many good articles too. I have also [written a lot](https://medium.com/theburningmonk-com/all-my-posts-on-serverless-aws-lambda-43c17a147f91) on serverless.