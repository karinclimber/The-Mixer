                $(document).on({
                    ajaxStart: function() { $body.addClass("loading"); },
                    ajaxStop: function() { $body.removeClass("loading"); }
       });
                  
       //hide loading image after 6 seconds
            $(".loader").slideUp(6000);  
                function initGeolocation() {
                    //set up functions to determine whether finding user was a success or failure
                    navigator.geolocation.getCurrentPosition(success, fail);
         
          }
             
            function fail()
              {
               alert("Please refresh page and allow location!!"); 
                 // Could not obtain location
              }  //fail if no location  
           
           var map;  
           var coords;   
           function success(position) {
                 // Define the coordinates as a Google Maps LatLng Object
                 coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                 // Prepare the map options
                 var mapOptions = {
                            zoom: 14,
                            center: coords,
                            mapTypeControl: false,
                            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                  }; //end of map options

                  // create map and put it in the div
                  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
                   // find location and add marker to map
                  var marker = new google.maps.Marker({
                            position: coords,
                            map: map,
                            icon: "assets/images/person.png",
                            title: "Your current location!"
                 
           })
           }
       
       $(document).ready(function() {
          var markers =[];
          
          $("#searchbtn").on("click", function() {

           infowindow = new google.maps.InfoWindow();
              var service = new google.maps.places.PlacesService(map);
              service.nearbySearch({
                location: coords,
                radius: 10000,
                type: ['liquor_store']
              }, callback);
            

            function callback(results, status) {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                  createMarker(results[i]);
                }
              }
            

            function createMarker(place) {
              var placeLoc = place.geometry.location;
              var marker = new google.maps.Marker({
                map: map,
                icon: "assets/images/absolut.png",
                position: place.geometry.location
              });
              markers.push(marker)
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
              });
            }     

       $("#refresh").click(function() { 
           console.log("delete clicked");
           console.log(markers)
           markers.forEach(function(marker){
               marker.setMap(null);
           })
       });      
            }
          
           })
       })