export default {
	addgeofenceMaponCreateMarker () {
		//	write code here

		const newMarker = {
			lat: addgeofenceMap.newMarkerLat,
			long: Map1.newMarkerLng,
			title: "New Marker",
			description: `Lat: ${addgeofenceMap.newMarkerLat}, Lng: ${addgeofenceMap.newMarkerLng}`
		};

		// Append to existing markers list
		const updatedMarkers = [
			...(appsmith.store.markers || []),
			newMarker
		];

		// Save to store
		storeValue("markers", updatedMarkers);

	}
}