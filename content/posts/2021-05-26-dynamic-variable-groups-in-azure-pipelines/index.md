---
title: How to use Dynamic Variable Groups in Azure Pipelines
slug: dynamic-variable-groups-in-azure-pipelines
date: 2021-05-26

# optional fields
published: true
generate-card: true
language: en
cover: ./cover.png
imageShare: ./dynamic-variable-groups-in-azure-pipelines-share.png
tags:
  - azure
  - react
---

I had a recent requirement to use dynamic variable groups in an Azure Pipeline.

It was a **React** app that was dependant on environment variables for the build process. I wanted these to be populated from a variable group based on the branch (dev, test, master).

It isn't possible to use a single YAML file and have a dynamic variable group specified but you can use a [Template File](https://docs.microsoft.com/en-us/azure/devops/pipelines/process/templates?view=azure-devops).

Here is what I went with:

**azure-pipelines.yaml**

This is the main file that reads the **Build.SourceBranchName** variable and passes it through to the template file as a parameter.

```
trigger:
  - DEV
  - TEST
  - master

pool:
  vmImage: 'ubuntu-latest'

jobs:
  - ${{ if eq(variables['Build.SourceBranchName'], 'DEV') }}:
      - template: azure-pipelines-build.yaml
        parameters:
          GroupVariablesName: 'Dev'
  - ${{ if eq(variables['Build.SourceBranchName'], 'TEST') }}:
      - template: azure-pipelines-build.yaml
        parameters:
          GroupVariablesName: 'Test'
  - ${{ if eq(variables['Build.SourceBranchName'], 'master') }}:
      - template: azure-pipelines-build.yaml
        parameters:
          GroupVariablesName: 'Prod'
```

> Many other [Predefined Variables](https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml) also exist.

**azure-pipelines-build.yaml**

This is the build file that accepts the group variables parameter and executes the build.

```
parameters:
  GroupVariablesName: ''

jobs:
  - job: build_app
    displayName: 'Build application'
    variables:
      - group: ${{ parameters.GroupVariablesName }}
      - name: apiKey
        value: $[variables.MyApiKey]
      - name: apiUrl
        value: $[variables.MyApiUrl]

    steps:
      - script: |
          echo apiKey '$(apiKey)'
          echo apiUrl '$(apiUrl)'

      - task: NodeTool@0
        inputs:
          versionSpec: '10.x'
        displayName: 'Install Node.js'

      - script: |
          npm install
          npm run build
        displayName: 'install and build'
        env:
          REACT_APP_API_KEY: $(apiKey)
          REACT_APP_API_BASE_URL: $(apiUrl)

      - task: CopyFiles@2
        inputs:
          Contents: 'build/**' # Pull the build directory (React)
          TargetFolder: '$(Build.ArtifactStagingDirectory)'

      - task: PublishBuildArtifacts@1
        inputs:
          PathtoPublish: $(Build.ArtifactStagingDirectory) # dist or build files
          ArtifactName: 'MyBuildArtifact' # output artifact named www
```
