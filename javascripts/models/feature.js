Feature = Backbone.Model.extend({
	initialize: function() {
		var ftype = "";
		switch(this.get('featuretypeID'))
		{
			case 1:
			  ftype ="Yellow Tee"
			  break;
			case 2:
			  ftype = "Red Tee"
			  break;
			case 3:
			  ftype = "White Tee"
			  break;
			case 4:
			  ftype = "Bunker"
			  break;
			case 5:
			  ftype = "Water Hazard"
			  break;
			case 6:
			  ftype = "Green"
			  break;
		};
		
		this.set({
			featureType: ftype
		})
    }
})
