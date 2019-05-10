## The good, the bad and the ugly of Serverless ##

https://www.theurlist.com/build2019

### What to bring back to the team ###

- Why serverless 
    - low provisioning webserver concerns, low costs - pay for what you use
    - Speed of development
    - Speed of runtime (scaling up and down)
- Azure functions - serverless compute options
- The Bad
    - Authentication
        - client-side needs to plug into Azure Function auth providers
    - Configuration, Configuration, Configuration
- The Good
    - Http Certificates and management built in (not sure of cost)
    - Authentication
        - Azure functions has providers
        - uses the Identity provider to determine the user information

- The Ugly
    - Proxy: routing inside your functions (/* and /api/*)
    - DNS: resolving a Domain to an Azure url
    - Cold start: normal initial startup (health checks can prevent cold start because they are pinging your site - once per hour)


### What to bring to PRISM ###

- WebKey
 - low amounts of traffic.
 - 


 ### Buzz ###

 - artillery: load testing software
 - CORS cross origin resource sharing (part of the Bad)
    - local.settings.json
- CloudFlare