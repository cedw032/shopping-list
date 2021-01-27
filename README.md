## Overview
Someone told me once that good architecture was about keeping your options open.  This project is composed of a client front, and a client back.
The client front is the code that will run on the users device.  The client back runs in the cloud but the purpose of this is to supply the front with everything it needs specifically for this client front.
It is intended that this service would in the future deal with another service that provides domain level actions and queries, probably via a rest API.

## Setup
Copying and pasting the entire code block below into your terminal should open the shopping list in your browser with a local server running.
``` shell
sudo rm -R shopping-list
git clone git@github.com:cedw032/shopping-list.git
cd shopping-list
yarn prep
cd client-back && yarn && yarn start &!
cd ../client-front && yarn && yarn start
```

## Tests
I started this writing tests as I went, but in the name of not spending too much time on it I decided to carry on without.  Obviously I wouldn't do this on a commercial project.

## useServerState
This handy hook will load the state from the server, and update the local and remote state as changes are made.  This is a first pass implementations that is still missing caching, local persistence and throttling.
It would be quite easy to wire this up to a socket server which would update the app in real time without having to make any changes where `useServerState` is used.

## EditableTextList
This relatively basic component nicely ensures there is always a free space for you to add another item as well as make sure that empty items are stripped from the list.

## Primitive Adverse
The general approach here has been to avoid the use of primitive types whereever possible. There are a number of good reasons to do that.  It can be used to ensure that functions are less likely to be misused as well as providing a source of documentation.

## State as a Service
The BFF (Backend for Frontend) is currently implemented as a simple all purpose state service.  While this is intended to change in the future the State service can be used and provided to other services.  The idea here is that you can develop against the production system.  Rather than having to spin up a dev instance of the whole system the idea here is that only dev instances of the service being worked on and the state service need tobe run locally (There may be need for some sort of ervice locator also depending on what solution we use for that).  This means that when developing a service all other services are known to behave exactly the same as the production sevices, because they actually are the production services.  It's a bit of an experimental idea, but I think it has potential and I am keen to investigate it further.  This will be super helpful for CD as changes will be more likely to be made in a non-breaking way.

## Shared
The shared directory is supposd to simulate node modules.  This could have been achieved with `yarn link` but I was just trying to figure out how to get something up and runing separately.  The reason moving items out into separate packages is so that the same code can be used from different services and clients.

## Data Driven
For some clients updating can be a hassle (I'm looking at you Mobile)...  Ideally the client front will perform as little processing as possible, and allow the app to be extended without having to update the client.
I have demonstrated this further on the branch `backseat-driver`

## What missing
There is still a lot to be done here.  Authentication (Identity) and Authorization (Access managent) are the first two that come to mind, but also there are a number of pieces missing from the intended final architecture.

In a real commercial product I would probably include sentry (error loggin) and heap (analytics)

More test coverage would be great.  

Simple rules around the modification of test files can be used to facilitate semantic versioning which will allow for multi version support.

There is little to no failre management.  Obviously this is a huge part of any commercial product, but I didn't want to spend to much time here yet.

## Contact
Please feel free to send me a message at chad.edwards.mail@gmail.com if you are having any troule getting this running.
