export default {
	savesomeinfo(what_return){
		vehicleinfo.run()
		const vehicleinformation = vehicleinfo.data[0];
		console.log(vehicleinformation,"jhjh")

		let GefenceName = vehicleinformation.GeoFenceName;
		let Address =vehicleinformation.Address;
		let Speed = vehicleinformation.speed;

		if (what_return == "GeofenceName"){
			return GefenceName;
		}
		else if (what_return == "Address"){
			return Address;
		}
		else if (what_return == "Speed"){
			return Speed;
		}

	}
}
//{{vehicleinfo.data[0]?.GeoFenceName? vehicleinfo.data[0]?.GeoFenceName:"Location Not Found"}}