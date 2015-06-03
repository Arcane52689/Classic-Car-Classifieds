# Classic Car Classifieds
Classic Car Classifieds is a single-page Backbone App consuming a RESTful Rails JSON API, which you can visit [here](http://www.classic-car-classifieds.net)

Classic Car Classifieds is a place where people can go to find what they need for their favorite vehicles. Users can advertise for selling their cars or parts, as well as look at other user's postings.


##Implementation

###Looking Fors
Currently, users can make "looking for" requests, where they can choose to be notified if certain cars or parts are posted. Currently, they can check these notifications on their listings page. The new notifications will be highlighted, as will the new matches.

### Part Taggings
Parts are linked to multiple vehicles through a part tagging system. When a user posts a part number, the server creates a part tagging linking that part number to the specified make/model/year. This way, parts can "remember" being posted to different vehicle, increasing the likelihood of finding a match.

### Search
Searching is a bit complicated in this site. Users can search for vehicles by make and model(optional) of a range of years. They can do the same for parts, but can also include a  Part Number, Type, or Category(all of which are optional parameters). In order to dry up code, this means segmenting the searching into a single class. I used a Rails Service to hold all of the methods, which need to be able to clean the parameters, converting "None" to nil and ensuring valid year ranges. The methods also had to be able to modify the searching based on the parameters actually present.

On the front end, I implemented a search router which translates the query from the url into an ajax request. This was the only way to allow users to share search results in link form, which I felt was important

### Sorting
Users can sort options by Price, Make, Model, and Year. This involved using a custom comparator function that changes based on the selected option. The fetch method of the collection also had to be overwritten in order to send up the page number and the sort option so that the collection was updated appropriately. Users can also limit their results by make and model, which had to be stored as options in the collection to be sent up to the server.  By adding some new properties, I was able to DRY up code significantly by implementing a single results collection, which I extended for the actual collections.
