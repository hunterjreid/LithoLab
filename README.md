<img width="1470" alt="digger-opensource-gitops-banner" src="https://github.com/diggerhq/digger/assets/1280498/7fb44db3-38ca-4021-8714-87a2f1a14982">

<h2 align="center">
  <a href="https://join.slack.com/t/diggertalk/shared_invite/zt-1tocl4w0x-E3RkpPiK7zQkehl8O78g8Q">ENG</a> |
  <a href="https://calendly.com/diggerdev/digger-open-source-terraform-cloud-alternativ-clone?month=2023-07">SPN</a> |
  <a href="https://docs.digger.dev/">Docs</a> | 
  <a href="https://www.loom.com/share/51f27994d95f4dc5bb6eea579e1fa8dc?sid=403f161a-6c0b-44ac-af57-cc9b56190f64">Demo Video</a>

</h2>

CI/CD for Terraform is [tricky](https://itnext.io/pains-in-terraform-collaboration-249a56b4534e). To make life easier, specialised CI systems aka [TACOS](https://itnext.io/spice-up-your-infrastructure-as-code-with-tacos-1a9c179e0783) exist - Terraform Cloud, Spacelift, Atlantis, etc.

But why have 2 CI systems? Why not reuse the async jobs infrastructure with compute, orchestration, logs, etc of your existing CI?

Digger runs terraform natively in your CI. This is:

- Secure, because cloud access secrets aren't shared with a third-party
- Cost-effective, because you are not paying for additional compute just to run your terraform

## Features
- Terraform plan and apply in pull request comments
- Any VCS - Github, Gitlab, Azure Repos, etc
- Any CI - Github Actions, Gitlab, Azure DevOps, etc
- Any cloud provider - AWS, GCP, Azure
- Private runners - thanks to the fact that there are no separate runners! Your existing CI's compute environment is used
- Open Policy Agent (OPA) support for RBAC
- PR-level locks (on top of Terraform native state locks, similar to Atlantis) to avoid race conditions across multiple PRs
- Terragrunt, Workspaces, multiple Terraform versions, static analysis via Checkov, plan persistence, ...
- Drift detection - coming soon
- Cost estimation - coming soon

## Getting Started

- [Github Actions + AWS](https://docs.digger.dev/getting-started/github-actions-+-aws)
- [Github Actions + GCP](https://docs.digger.dev/getting-started/github-actions-and-gcp)
- [Gitlab Pipelines + AWS](https://docs.digger.dev/getting-started/gitlab-pipelines-+-aws)
- [Azure DevOps](https://docs.digger.dev/getting-started/azure-devops)

## How it works

Digger has 2 main components:
- CLI that runs inside your CI and calls terraform with the right arguments
- Orchestrator - a minimal backend (that can also be self-hosted) that triggers CI jobs in response to events such as PR comments

Digger also stores PR-level locks and plan cache in your cloud account (DynamoDB + S3 on AWS, equivalents in other cloud providers)

## Telemetry
No sensitive or personal / identifyable data is logged. You can see what is tracked in [`pkg/utils/usage.go`](https://github.com/diggerhq/digger/blob/main/pkg/utils/usage.go)

## Contributing

We love contributions. Check out our [contribiting guide](CONTRIBUTING.md) to get started. 

Not sure where to get started? You can:

-   [Book a free, non-pressure pairing session / code walkthrough with one of our teammates](https://calendly.com/diggerdev/digger-pro-demo-clone)!
-   Join our <a href="https://join.slack.com/t/diggertalk/shared_invite/zt-1tocl4w0x-E3RkpPiK7zQkehl8O78g8Q">Slack</a>, and ask us any questions there.


## Resources

- [Docs](https://docs.digger.dev/) for comprehensive documentation and guides
- [Slack](https://join.slack.com/t/diggertalk/shared_invite/zt-1tocl4w0x-E3RkpPiK7zQkehl8O78g8Q) for discussion with the community and Infisical team.
- [GitHub](https://github.com/diggerhq/digger) for code, issues, and pull request
- [Medium](https://medium.com/@DiggerHQ) for terraform automation and collaboration insights, articles, tutorials, and updates.
- [Roadmap](https://diggerdev.notion.site/Digger-Roadmap-845a90fb17954afca80431580e1b3958?pvs=4) for planned features


![dqwdwqdqwdwdqwdq](https://github.com/hunterjreid/Photolithography-101/assets/62681404/377329c8-195d-43b6-b0e5-a57326a26a7c)

# Photolithography-101
Lithography Experimental App Explained in Electron.js

<sub>The educational resources are provided in English and Spanish.  </sub>

Photolithography is a process used to create patterns on the surface of a material. It is often performed at the nanoscale, where dimensions are measured in nanometers (billionths of a meter). At this scale, the laws of physics behave differently, so it can be difficult to understand how lithography works.

This experimental app, built in Electron.js, is designed to explain lithography from the basics. It uses a simple simulation to show how light and electrons interact with materials at the nanoscale. 

The app is still under development, but it is already a valuable resource for anyone who wants to learn more about lithography. It is also a great tool for students and researchers who are working on nanoscale applications.  

Here are some additional details about the app:  

The app is written in JavaScript and Electron.js.  
The simulation uses the raytracing library Three.js.  

The app is available for free on GitHub.  

## Install & run

1.  ```git clone https://github.com/hunterjreid/Photolithography-101```
2.  ```cd Photolithography-101```
3.  ```npm install```
4.  ```npm start```
5.  ```Get to learning about Photolithography 📲 📞 📟 📠 🔋 🔌💻```


![dqdqdqwd](https://github.com/hunterjreid/Photolithography-101/assets/62681404/ec6635c8-ba2a-496f-a613-387e767b8c99)
![SQWDWQDQDWQWD](https://github.com/hunterjreid/Photolithography-101/assets/62681404/0e0b9e84-3201-4861-bc64-a2b9907b5289)
![DQDWQDQWDQW](https://github.com/hunterjreid/Photolithography-101/assets/62681404/6a8fc200-9689-448f-bd4c-3ff3e5c2a503)
