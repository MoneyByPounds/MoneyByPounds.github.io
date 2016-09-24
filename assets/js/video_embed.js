document.addEventListener("DOMContentLoaded",
  function() {
    MoneyByPounds.grabDivs();
  }
);


var MoneyByPounds = {

  grabDivs: function() {
    var div, n,
      youtubeDivs = document.getElementsByClassName("youtube-player");
    for (n = 0; n < youtubeDivs.length; n++) {
      div = document.createElement("div");
      div.setAttribute("data-id", youtubeDivs[n].dataset.id);
      div.innerHTML = this.youtubeThumb(youtubeDivs[n].dataset.id);
      div.onclick = this.youtubeIframe;
      youtubeDivs[n].appendChild(div);
    }
  },

  youtubeThumb: function(id) {
    var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
      play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
  },

  youtubeIframe: function() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
  }

}
