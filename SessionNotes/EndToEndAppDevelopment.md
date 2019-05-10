Azure cli

- az aks commands

Code, save and refresh -> no need to redeploy containers in azure

Azure pipeline -> select repo -> creates the yaml file

Azure "Space": development space in Azure for hosting your changes that also interface with api/services/db ouside of your "Space"

Feature branches can be built/released to a container and accessed via the Feature branches name.

### Bring back to the team ###

- Branches created for Feature/Bug
	- branch is released with isolated changes (url contains the branch name)
	- [Azure Dev Spaces](https://docs.microsoft.com/en-us/azure/dev-spaces/ "Azure Dev Spaces") avoid having to setup the entire app locally (ui, microservies, db)