const TOP_TRACK_REQUEST= "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=3e34c7da83f9851126f4c11c91d181e8&format=json";
const MAIN_SECTION = document.querySelector("#main-section")
const MENU = document.querySelector(".header__nav__menu__ul");
console.log(MAIN_SECTION)

const getList = function(request, node){
	fetch(request)
	.then(res => res.json())
	.then(res => {
		const result = Array.from(res.tracks.track).map(track => {
			let image = track.image["3"]["#text"];
			let name = track.name;
			let artist = track.artist.name;
			let _url = track.url;
			const template = `<div class="track"><a href="${_url}"><h2>${name}</h2><h3>${artist}</h3><img src="${image}" alt="track image" class="track-image"></a></div>`
 
			return template;	
			
		})
		console.log(result)

		return node.innerHTML = result;

		
	})

};

console.log(getList(TOP_TRACK_REQUEST, MAIN_SECTION))




