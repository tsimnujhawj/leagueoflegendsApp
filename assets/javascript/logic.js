
var search = function(term) {
var link = "https://swapi.co/api/people/?search=" + term;
$.ajax({
    url: link,
    method: "GET"
}).then(function(object){
    $("#summoner").html(object.results[0].name);
});
};

search("Luke");