export default {
	searchbtnonClick () {
		//	write code here
		let data1 = selectVehicle.data;
		
		
	
		return data1.map(item => ({
      name: item.VehicleName,  // Display name
      code: item.VehicleName    // Backend value
    }));

		
	}
}