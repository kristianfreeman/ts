---
title: "Delivering business value through serverless, with Gillian Armstrong"
date: "2019-09-10T11:00:00.00Z"
description: "[Gillian Armstrong](https://twitter.com/virtualgill) works as a Technologist in Liberty IT. Her current passions are understanding the changing paradigms that Serverless is bringing to Software Architecture, and that Cognitive Technology is bringing to Human-Computer Interaction."
featuredImage: ./gillian-armstrong.jpg
---

#### What's your background, and what are you working on?

Hi! I'm Gillian and I work as a Technologist for Liberty Information Technology in Belfast, Northern Ireland. We create world-class software and solutions for our parent company, Liberty Mutual Insurance.

I had always loved problem solving and learning new things, but I had never considered being a software engineer until I did some programming modules at university and discovered I really enjoyed it. Since graduating, I have worked across a lot of different technologies, everything from huge monolithic applications, to brand new builds on the latest technologies.

Several years ago, I moved into our company's Emerging Tech group, and got to work building out internal software and helping to bring in new technology into the company. When I first started that was things like microservices, but in the past couple years that has evolved out into the Cloud, and then into Serverless and Applied AI.

At the moment I'm working with our Digital eCommerce group in Boston on some interesting projects using machine learning to really personalize our customers' experience.

#### What's the first project/workload for which you adopted a serverless architecture?

The very first project I worked on with a serverless architecture was our company's internal Employee Digital Assistant. This is a chatbot that allows employees to gets answers (or actions taken for them) for things like HR, Finance, Help Desk and more. It was part of a wider productivity suite that I had worked on previously.

This is the first time we had explored the use of Conversational AI in one of our internal systems, so we needed to be able to really quickly build, test and learn. Building on the Cloud was an obvious choice for that, although it was the first fully cloud native application I had worked on! Thankfully I was working with the awesome Gillian McCann whose knowledge and passion were invaluable.

Going one step beyond just Cloud and using Serverless let us move even faster, and also let us build out a really low cost MVP. We built on AWS, and defined everything through code, using mostly Cloudformation with some custom resources. You find you can start really quickly with a few Lambdas and Amazon Lex, and then start adding on more and more services like API Gateway, DynamoDB, S3, KMS, SNS, ElasticSearch and more. Learning to really leverage the power of built-in services like Cloudwatch dashboards, events and alarms, and X-ray let us get the observability we needed, and adding on things like Athena let us run reports offline. It was really exciting to see how all of these new technologies worked together to let us move fast and keep improving the product.

Since it was the first project we had worked on with this architectural pattern we certainly had challenges too - there was a lot of documentation to read, we needed to rethink how we adapted all our standard engineering best practices like CI/CD and testing to the new patterns. We had new things like think about - like understanding how to build for truly ephemeral infrastructure, or everyone's favourite - lambda cold starts (especially in our VPC). And although we love to see the speed of innovation and new features coming from AWS, sometimes we went onto twitter in the morning to find that work we had spent the last few weeks doing could now be replaced with a single line of code to use a new built-in feature. Being able to quickly change your code is critical to being able to take advantage of new functionality or best practices!

Ultimately the project was a big success - we found that the Employee Digital Assistant was so useful to our own employees that we've actually created a spin off company, [Workgrid](https://www.workgrid.com/), to provide the same functionality as a SaaS product to other companies.

#### What excites you most right now about the serverless paradigm?

I think it's putting a lot of power into the hands of developers to really rapidly build things, experiment and change easily, and with a relatively low (if not free) cost of entry. Cloud development using Serverless paradigms is also opening up doors to newcomers, allowing them to get started building real things without having to set up and manage infrastructure.

#### What's your favorite thing you've built with serverless recently?

At the moment having a lot of fun with creating some machine learning pipelines with step functions!

#### What do you see as the essential elements of a serverless architecture?

To me the key advantages of a serverless architecture is being able to get to real business value fast. To do that you should always use services that are already available where you can (as little custom build as possible). This should mean that use and cost should scale together, and the architecture should be made up of services and stateless components that allow it to be reconfigured as you learn more. In a serverless architecture the business logic and not the infrastructure should be the "hard part".

#### What do you think is the biggest weak point of the serverless ecosystem right now?

It's really, really easy to get started, but there are still a lot of challenges once you move beyond the simple use-cases. I think as a community (myself included) we are great at telling people how awesome serverless is and helping people get started, but we need to get better at working out how we support people as they start to go deeper. Getting good guidelines, practices and patterns out there is important, but so is being able to help people understand when you should and, critically, shouldn't use one thing over another. This is still an emerging space, so we're all still learning, which means that advice is going to change over time.

#### What impact has adopting serverless had on your organization?

As an organization we're still very early in our journey, but we can already see that it is having huge benefits in speed to market. We're a big company with hundreds of developers, and they are loving how it gives them a lot more control of their architecture, with the flexibility to change if needed, lower dependencies on other groups, and a really clear visibility of costs.

#### What's your advice for serverless developers who are just starting out?

I think everyone gets a little rush of excitement when they start out, because it just seems to make so much sense and it's so easy. However, it's normal as you move onto bigger more complex things to feel discouraged at times because it isn't all easy - there are hard parts, and it will take time to learn, don't give up! There's a lot of resources out there, and a really great community of people who are always happy to give advice. Don't be afraid to ask questions.

#### What your favorite resources for learning more about the serverless ecosystem? (People, blogs, etc)

There is so much available out there! As I'm working mostly in the AWS space, I mostly follow the content that the [AWS Serverless Heroes](https://aws.amazon.com/developer/community/heroes/?community-heroes-all.sort-by=item.additionalFields.sortPosition&community-heroes-all.sort-order=asc&awsf.filter-hero-category=heroes%23serverless) are producing. They are also great people to reach out to if you have questions. I also have really enjoyed attending several of the [ServerlessDays conferences](https://serverlessdays.io/) - there are ones all over the world and you get a really wide view of lots of different technologies.
