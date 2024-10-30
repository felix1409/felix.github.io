$(document).ready(function () {
  // Add event listener to search button
  $('button[type="submit"]').click(function (event) {
    event.preventDefault();
    var searchQuery = $('input[type="search"]').val();
    console.log(searchQuery);
    // Make API call to search for songs, artists, or podcasts
    // Update song list with search results
  });
});
