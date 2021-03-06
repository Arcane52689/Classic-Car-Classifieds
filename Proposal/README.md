# Classic Car Classifieds

## Link to website:
https://classic-car-classifieds.herokuapp.com

## Minimum Viable Product
Classic Car Classifieds is a  CraigsList clone specifically for automobile enthusiasts, built using Rails for backend and Backbone for front end.  Users will be able to:
- [x] Create Accounts
- [x] Create Sessions (log in)
- [x] Post Sales Requests for Vehicles
- [x] Post Sales Requests for Parts
- [x] Include uploaded pictures in their requests
- [x] Post Looking-For Requests for Vehicles
- [x] Post Looking-For Requests for Parts
- [x] Search for parts by vehicle
- [x] Search for parts by part number
- [x] Search for vehicles by Year, Make, and/or model


## Design Docs
* [DB schema][schema]
* [View Wireframes][views]

[views]: ./Proposal/docs/views.md
[schema]: ./Proposal/docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Vehicle Sales Creation (~1 day)
I will implement a user authentication system  in rails.  By the end of this phase,  users will be able to create new sessions as well create a vehicle sales request(minus the pictures).

### Phase 2: Creating Parts Sales Requests, Creating Looking-for Requests (~1 day)
I will create basic forms for creating parts sales requests, as well as Looking-for requests. By the end of today, users should be able to create all possible requests, as well as see their current requests

### Phase 3: Searchable (~1.5 days)
I will add searchable functions to the controller.  This will allow users to search by any combination of vehicle make, model, year for parts or vehicles.  I will also add a way to search part numbers for parts.

### Phase 4: Implementing Backbone Front End (~2 days)
I will use the skills I learned from App Academy to switch from a server side app to a backbone app.  The goal will be to render all the views using backbone.  This is also where I'll fully implement user-authentication.  Only logged-in users will be able to create/respond to requests, but all users will be able to search.

### Phase 5: Allow uploading of images (~1 day)
Allow users to upload images with their sales requests.

### Bonus Features (TBD)

- [ ] Limit search results by location
- [x] Limit/Order search results by price, and quality
- [x] Let users request notification when a car matching a set of qualities is posted
- [x] Let users request notification when a part matching a requested part # has been posted
- [x] Pagination
- [ ] Let users save a list of cars as their "garage"
- [x] Let users log in from multiple devices
- [ ] Let users post available services
- [x] Search Parts by category and type
