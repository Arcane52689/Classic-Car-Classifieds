# Phase 4: User Feeds

## Rails
### Models

### Controllers
* Api:PartSalesController (create, show, destroy, update, search, index)
* Api:LookingForsController (create, show, destroy, update, search, index)
* Api:UsersController (create, update)
* Api:SessionsController (create, destroy)
* Api:VehicleSalesController (create, show, destroy, update, search, index)

### Views
part_sales/show.json.jbuilder
vehicle_sales/show.json.jbuilder
looking_for/show.json.jbuilder
part_sales/index.json.jbuilder
vehicle_sales/index.json.jbuilder
looking_for/index.json.jbuilder

## Backbone
### Models
* LookingForRequest
* VehicleSale
* PartSale
* Vehicle
### Collections
* Vehicles
* LookingForRequests
* VehicleSales
* PartSales



### Views
* search-results - contain subviews of requests
* VehicleSale - subview
* PartSale - subview
* LookingFor - subview
* PartSaleForm  - subview
* VehicleSaleForm - subview
* LookingForForm - subview

## Gems/Libraries
