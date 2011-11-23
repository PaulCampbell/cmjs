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
			return  CM.core.RoundDown(((R * c)*100),2);
		},
		GetRadians: function(i) {
			return (i * Math.PI / 180);
		},
		RefreshIntervalId: function(){
			
		},

		RoundDown: function(num, dec) {
			var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
			return result;
		},

        StartScroll: function(){
            if(!CM.core.MyScroll.destroy())
            {
                document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
                document.addEventListener('DOMContentLoaded', setTimeout(function () { loaded(); }, 200), false);
                CM.core.MyScroll = new iScroll('wrapper');
            }
        },

        KillScroll: function(){
           if(CM.core.MyScroll)
           {
               CM.core.MyScroll.destroy();
           }
        }
	};

}();