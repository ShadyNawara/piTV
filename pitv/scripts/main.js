var bgarray = [];
var woeid = "2459115";
$(function () {
    $.get('scripts/weather.txt', function (response) {
        woeid = response;
    });
    //calling getweather and get backgrounds functions and setting an interval to repeat them later
    getweather();
    getbackgrounds();
    setInterval(getweather, 3600000);
    setInterval(getbackgrounds, 21600000);


    // listen to keypress that represent the start of video loading
    var listener = new window.keypress.Listener();
    listener.simple_combo("l", function () {
        $("#vidloading").fadeIn("fast", "linear");
    });

    // listen to keypress that represent the end of video loading
    listener.simple_combo("n", function () {
        $("#vidloading").fadeOut("fast", "linear");
    });
    
    // listen to keypress to reload page
    listener.simple_combo("p", function () {
        $.get('scripts/pin.php?pin=get', function (response) {
        if (response != "") {
            $("#pin").text("PIN: " + response);
        }else{
            $("#pin").text("");
        }
    });
    });

    // displaying the pitv hostname, ip and pin
    $.get('scripts/hostip.php', function (response) {
        $("#hostip").text(response);
    });
    $.get('scripts/pin.php?pin=get', function (response) {
        if (response != "") {
            $("#pin").text("PIN: " + response);
        }
    });
});


// getting list of backgrounds and display them using backstretch
function getbackgrounds() {
    $.get('scripts/getbackgrounds.php', function (response) {
        var imgs = response.split("\n");
        $.each(imgs, function (key, value) {
            bgarray.push(value);
        });
        shufflearray(bgarray);
        $.backstretch(bgarray, {
            duration: 300000,
            fade: 750
        });
    });
}


// function for shuffling arrays
function shufflearray(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


// getting weather data from simple weather
function getweather() {
    $.simpleWeather({
        woeid: woeid,
        unit: 'f',
        success: function (weather) {
            html = '<h2><i class="icon-' + weather.code + '"></i> <span class="weatherdig">' + weather.temp + '&deg;' + weather.units.temp + '</span></h2>';
            html += '<h3>' + weather.city + ' - ' + weather.currently + '</h3>';
            $("#weather").html(html);
        },
        error: function (error) {
            $("#weather").html('<p>' + error + '</p>');
        }
    });
}
