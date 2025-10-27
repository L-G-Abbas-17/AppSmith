export default {
	addgeofenceMaponCreateMarker() {
		// Create a new marker using correct map reference
		const newMarker = {
			lat: addgeofenceMap.newMarkerLat,
			long: addgeofenceMap.newMarkerLng,
			title: "New Marker",
			description: `Lat: ${addgeofenceMap.newMarkerLat}, Lng: ${addgeofenceMap.newMarkerLng}`
		};

		// Replace old marker with only new one
		storeValue("markers", [newMarker]);
	}
}
