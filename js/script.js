$(document).ready(function() {

	$('#website-name, footer').hide();

	// randomly shows armno's flickr photos
	var page = Math.random() * (1000 - 1) + 1;
	$.getJSON('https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=33be3c47d126a1b87570e8e0d905fc13&user_id=64097785%40N07&per_page=1&page=1&format=json&nojsoncallback=1&extras=url_m&page=' + page,
		null,
		function(res) {
			if (res.stat === 'ok') {

				var src = res.photos.photo[0].url_m,
					title = res.photos.photo[0].title;

				$('#random-photo').attr({
					'src' : src,
					'alt' : title,
					'title' : title
				}).fadeIn();

				$('#website-name').delay(3500).fadeIn('slow', function() {
					$('footer').delay(1000).fadeIn();
				});
			}
		});
});





