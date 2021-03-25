# LWC Events
 Code that accompanies the Pluralsight course, Communicate Between Salesforce Lightning Web Components
 
# Installing lwc-events 
1. Set up your Salesforce DX environment by installing the Salesforce CLI and Visual Studio Code Salesforce extensions.

2. Authorize your DevHub org and provide an alias such as below:
```
sfdx auth:web:login -d -a DevHub
```

3. Clone the repository:
```
git clone https://github.com/saramorgan/lwc-events.git
cd lwc-events
```

4. Create a scratch org and provide it with an alias such as LWCEvents
```
sfdx force:org:create -s -f config/project-scratch-def.json -a LWCEvents
```

5. Push the app to your scratch org
```
sfdx force:source:push -u LWCEvents
```

6. Assign the lwcevents permission set to the default user
```
sfdx force:user:permset:assign -n lwcevents
```

7. Import sample Product2 data
```
sfdx force:data:tree:import -u LWCEvents --plan data/Product2-plan.json
```



