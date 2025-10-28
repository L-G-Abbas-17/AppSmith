export default {
	savesomeinfo(){
		vehicleinfo.run()
		const vehicleinformation = vehicleinfo.data[0];
		console.log(vehicleinformation,"jhjh")
		
		let GefenceName = vehicleinformation.GeoFenceName;
		let Address =vehicleinformation.Address;
		let speed = vehicleinformation.speed;
		
		return GefenceName;
		
		
	}
}