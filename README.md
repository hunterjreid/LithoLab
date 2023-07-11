<img width="1470" alt="dqwdwqqwddqw" src="https://github.com/hunterjreid/Photolithography-101/assets/62681404/6f779b8a-2944-4f5e-b09e-ed645435a06e">

<h2 align="center">
  <a href="https://join.slack.com/t/diggertalk/shared_invite/zt-1tocl4w0x-E3RkpPiK7zQkehl8O78g8Q">EN</a> |
  <a href="https://calendly.com/diggerdev/digger-open-source-terraform-cloud-alternativ-clone?month=2023-07">ES</a> |
  <a href="https://docs.digger.dev/">Docs</a> | 
  <a href="https://www.loom.com/share/51f27994d95f4dc5bb6eea579e1fa8dc?sid=403f161a-6c0b-44ac-af57-cc9b56190f64">Demo Video</a>
</h2>

Lithography Experimental App Explained in Electron.js

<sub>The educational resources are provided in English and Spanish.  </sub>

Photolithography is a process used to create patterns on the surface of a material. It is often performed at the nanoscale, where dimensions are measured in nanometers (billionths of a meter). At this scale, the laws of physics behave differently, so it can be difficult to understand how lithography works.

# Intro 



This app runs terraform as an .exe or on any desktop app.  This experimental app, built in Electron.js, is designed to explain lithography from the basics. It uses a simple simulation to show how light and electrons interact with materials at the nanoscale. 

The app is still under development, but it is already a valuable resource for anyone who wants to learn more about lithography. It is also a great tool for students and researchers who are working on nanoscale applications.  

Here are some additional details about the app:  

The app is written in JavaScript and Electron.js.  
The simulation uses the raytracing library Three.js.  

The app is available for free on GitHub.  




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

## Install & run

1.  ```git clone https://github.com/hunterjreid/Photolithography-101```
2.  ```cd Photolithography-101```
3.  ```npm install```
4.  ```npm start```
5.  ```Get to learning about Photolithography 📲 📞 📟 📠 🔋 🔌💻```

## Contributing

We love contributions. Check out our [contribiting guide](CONTRIBUTING.md) to get started. 

Not sure where to get started? You can:

-   [Book a free, non-pressure pairing session / code walkthrough with one of our teammates](https://calendly.com/diggerdev/digger-pro-demo-clone)!
-   Join our <a href="https://join.slack.com/t/diggertalk/shared_invite/zt-1tocl4w0x-E3RkpPiK7zQkehl8O78g8Q">Slack</a>, and ask us any questions there.

## Ref
https://en.wikipedia.org/wiki/Photolithography
https://en.wikipedia.org/wiki/Ultraviolet
https://en.wikipedia.org/wiki/Extreme_ultraviolet_lithography
