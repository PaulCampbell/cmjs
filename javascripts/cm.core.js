CM.core = function () {
	return  {
		GetDistance: function (lat1, lon1, lat2, lon2) {
			var R = 6371; // Radius of the earth in km
			var dLat = CM.core.GetRadians(lat2-lat1) ; 
			var dLon = CM.core.GetRadians(lon2-lon1); 
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
					Math.cos(CM.core.GetRadians(lat1)) * Math.cos(CM.core.GetRadians(lat2)) * 
					Math.sin(dLon/2) * Math.sin(dLon/2); 
			var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
			return R * c; // Distance in km}
		},
		GetRadians: function(i) {
			return i * Math.PI / 180;
		}
	};

}();