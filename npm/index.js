// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 3.066046339801291, lng: 101.55888859999997 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 12,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: position,
    map: map,
    title: "Arco Strings Asia",
  });
  
}

initMap();

