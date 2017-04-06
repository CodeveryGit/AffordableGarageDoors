// loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//  creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '0JDJyZ86DiE',
    });
}
$(".video-image").click(function(){
    $(this).css({"display": "none"});
    $(this).parents(".section-4").find(".section-video").css({"display": "block"});
    player.playVideo();

});