if( document.getElementsByClassName("agent-map-wrapp")[0] ) {

	var map;

	var marker;
	var image = 'img/pin.svg';

	var styles;

	function initMap() {

		var styles = [
		    {
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "gamma": 0.8
		            },
		            {
		                "lightness": 4
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#5dff00"
		            },
		            {
		                "gamma": 4.97
		            },
		            {
		                "lightness": -5
		            },
		            {
		                "saturation": 100
		            }
		        ]
		    }
		];

		var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		map = new google.maps.Map(document.getElementById('map_2'), {
			center: {lat: 55.7558251, lng: 37.6114423},
			scrollwheel: false,
			scaleControl: false,
			mapTypeControl: false,
			zoom: 15
		});

		// marker = new google.maps.Marker({
		// 	map: map,
		// 	draggable: false,
		// 	animation: google.maps.Animation.DROP,
		// 	position: {lat: 55.7558251, lng: 37.6114423},
		// 	map: map,
		// 	icon: image,
		// 	title: 'MVK'
		// });

		// marker.addListener('click', toggleBounce);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');


	}

		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

}

if( document.getElementsByClassName("map-3_block")[0] ) {

	var map;

	var marker;
	// var image = 'img/pin.svg';

	var styles;

	function initMap() {

		var styles = [
		    {
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "gamma": 0.8
		            },
		            {
		                "lightness": 4
		            },
		            {
		                "visibility": "on"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#5dff00"
		            },
		            {
		                "gamma": 4.97
		            },
		            {
		                "lightness": -5
		            },
		            {
		                "saturation": 100
		            }
		        ]
		    }
		];

		var styledMap = new google.maps.StyledMapType(styles,
		{name: "Styled Map"});

		map = new google.maps.Map(document.getElementById('map_3'), {
			center: {lat: 55.7558251, lng: 37.6114423},
			scrollwheel: false,
			scaleControl: false,
			mapTypeControl: false,
			zoom: 15
		});

		// marker = new google.maps.Marker({
		// 	map: map,
		// 	draggable: false,
		// 	animation: google.maps.Animation.DROP,
		// 	position: {lat: 55.7558251, lng: 37.6114423},
		// 	map: map,
		// 	icon: image,
		// 	title: 'MVK'
		// });

		// marker.addListener('click', toggleBounce);

		//Associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');


	}

		function toggleBounce() {
		  if (marker.getAnimation() !== null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}

}



