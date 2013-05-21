// Google Maps --------------------------------------
    
        google.load("maps", "2");
        
        // Call this function when the page has been loaded
        
        function initialize() {
        
            var map = new google.maps.Map2(document.getElementById("map"));
            map.setCenter(new google.maps.LatLng(50.87120833892986, 13.16035509109497), 10);
            map.addControl(new google.maps.SmallZoomControl());
            //map.setMapType(G_HYBRID_MAP);
            
            // === Set up the map types exactly like Google Maps ===
            // Add the Terrain Map Type
            map.addMapType(G_PHYSICAL_MAP);
            
            // Create a Hierercical map type control
            var menuTiny = new google.maps.MenuMapTypeControl(true);
            
            // add that control to the map
            map.addControl(menuTiny);
            
            // Create a base icon for all of our markers that specifies the
            // shadow, icon dimensions, etc.
            var baseIcon = new google.maps.Icon();
            baseIcon.shadow = "image/371_shadow.png";
            baseIcon.iconSize = new google.maps.Size(94, 35);
            baseIcon.shadowSize = new google.maps.Size(112, 35);
            baseIcon.iconAnchor = new google.maps.Point(27, 35);
            baseIcon.infoWindowAnchor = new google.maps.Point(9, 2);
            baseIcon.infoShadowAnchor = new google.maps.Point(18, 25);
            
            // Create our "tiny" marker icon
            var guitIcon = new google.maps.Icon(baseIcon);
            guitIcon.image = "image/371.png";
            
            // Set up our GMarkerOptions object
            markerOptions = { icon:guitIcon };
            
            var point = new google.maps.LatLng(50.87120833892986, 13.16035509109497);
            map.addOverlay(new google.maps.Marker(point, markerOptions));
            
            
            
                    
        }
        //google.setOnLoadCallback(initialize);