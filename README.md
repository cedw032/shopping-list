## What is this?
This branch was created to demonstrate the power of driving the back from the front.
There are two buttons that should be visible at the top that navigate between two different views with a basic router.
You will notice the clicking the buttons will switch between two views, one with one list aligned left, and another with two lists with space between.

The data that drives all of this can be found in the mock data in `stateAccess` in the client-back.
Simply removing one of the items from `mockNavItems` will remove it from the item from the nav bar.  Or adding another shopping list to the `mockDoubleListRoute` will give you a list with three routes.

This is super cool for a number of reasons.  First of all new features are able to be added to the app without updating the front end.  Second certain views can be altered or made unavailable to the user without exposing anything to do with identity or roles to the client (some features might even be paid ;)). There is also the opportunity for progressive enhancement, AB testing, and feature flagging with no added complexity in the client-front.  It just seems like a great approach all around for visibility and control, blue/green deployment and version support will also be made easier with this approach once a solution for service location has been established.


## What's missing?
The router is not wired up to the address bar yet.  This should be relatively east to sort out.
