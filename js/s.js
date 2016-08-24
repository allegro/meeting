/*jshint multistr: true */
(function() {
    function initShareWidget() {
        // share
        [].slice.call(document.querySelectorAll('a.share-button')).forEach(function(item) {
            item.addEventListener('click', function(e) {
                window.open(this.href, 'share', 'width=500,height=296');
                e.preventDefault();
            }, false);
        });
    }

    initShareWidget();
})();

(function() {
    var k = [], c = '65,66,39,37,39,37,40,40,38,38', p;
    var foo = function() { document.getElementById('atm9-logo').innerHTML = '<style>#atm9-logo {display:flex;min-height:500px;justify-content:center;margin: 2em auto;}#atm9-logo picture{position:relative}#atm9-logo picture img{margin:0;width:100%;position:absolute}#atm9-logo picture .robot-base{position:static}</style><picture><img src="./img/atm9/robot/atm-robot_head.png"><div class="arm-left"><img src="./img/atm9/robot/atm-robot_larm.png"><img src="./img/atm9/robot/atm-robot_lhand.png"></div><div class="arm-right"><img src="./img/atm9/robot/atm-robot_rarm.png"><img src="./img/atm9/robot/atm-robot_rhand.png"></div><img src="./img/atm9/robot/atm-robot_base.png" class="robot-base"></picture>';p = function(){function t(t){return document.querySelector(t)}function r(){var t=o.seek(),e=function(r){return r[0]<=t&&r[0]>i};Object.keys(s).forEach(function(t){s[t].filter(e).forEach(function(r){a["a"+t](r[1])})}),(n=setTimeout(r,16)),i=t}var n,o=new Howl({src:["img/atm9/robot/s.mp3"],volume:.75});o.on("play",function(){i=0,clearTimeout(n),r()}),o.on("stop",function(){i=0,clearTimeout(n)});var a={hd:t('img[src$="_head.png"]'),la:t("div.arm-left"),ra:t("div.arm-right"),lh:t('img[src$="_lhand.png"]'),rh:t('img[src$="_rhand.png"]'),ahd:function(t){this.hd.style.transform="translateY("+(t?"-8px":"0")+")"},ala:function(t){this.la.style.transformOrigin="344px 160px",this.la.style.transform="rotate("+t+"deg)"},ara:function(t){this.ra.style.transformOrigin="160px 160px",this.ra.style.transform="rotate("+t+"deg)"},alh:function(t){this.lh.style.transformOrigin="355px 234px",this.lh.style.transform="rotate("+t+"deg)"},arh:function(t){this.rh.style.transformOrigin="146px 234px",this.rh.style.transform="rotate("+t+"deg)"}},i=0,s={hd:[[0,0],[2,1],[2.32,0],[2.8,1],[3,0],[3.2,1],[3.4,0],[6.2,1],[6.52,0],[7,1],[7.2,0],[7.4,1],[7.6,0],[10.4,1],[10.72,0],[11.2,1],[11.4,0],[11.6,1],[11.8,0],[14.6,1],[14.7,0],[14.8,1],[14.9,0],[15,1],[15.1,0],[15.2,1],[15.3,0],[15.4,1],[15.5,0],[15.6,1],[15.7,0],[15.8,1],[15.9,0],[16,1],[16.1,0],[16.2,1],[16.3,0],[16.4,1],[16.5,0],[16.6,1],[16.7,0],[16.8,1],[16.9,0],[17,1],[17.1,0],[17.2,1],[17.3,0],[17.4,1],[17.5,0],[17.6,1],[17.7,0],[17.8,1],[17.9,0],[18,1],[18.1,0]],ra:[[4.16,40],[5.4,0],[8.32,40],[9.6,0],[12.48,40],[13.8,0],[14.6,60],[15.6,30],[16.6,60],[17.6,30],[18.1,0]],la:[[4.68,-40],[5.4,0],[8.85,-40],[9.6,0],[13,-40],[13.8,0],[14.6,-60],[15.6,-30],[16.6,-60],[17.6,-30],[18.1,0]],rh:[[4.94,-40],[5.4,0],[9.08,-40],[9.6,0],[13.28,-40],[13.8,0],[14.6,-90],[14.7,-45],[14.8,0],[14.9,45],[15,90],[15.1,45],[15.2,0],[15.3,-45],[15.4,-90],[15.5,-45],[15.6,0],[15.7,45],[15.8,90],[15.9,45],[16,0],[16.1,-45],[16.2,-90],[16.3,-45],[16.4,0],[16.5,45],[16.6,90],[16.7,45],[16.8,0],[16.9,-45],[17,-90],[17.1,-45],[17.2,0],[17.3,45],[17.4,90],[17.5,45],[17.6,0],[17.7,-45],[17.8,-90],[17.9,-45],[18,0],[18.1,0]],lh:[[5.2,40],[5.4,0],[9.4,40],[9.6,0],[13.6,40],[13.8,0],[14.6,90],[14.7,45],[14.8,0],[14.9,-45],[15,-90],[15.1,-45],[15.2,0],[15.3,45],[15.4,90],[15.5,45],[15.6,0],[15.7,-45],[15.8,-90],[15.9,-45],[16,0],[16.1,45],[16.2,90],[16.3,45],[16.4,0],[16.5,-45],[16.6,-90],[16.7,-45],[16.8,0],[16.9,45],[17,90],[17.1,45],[17.2,0],[17.3,-45],[17.4,-90],[17.5,-45],[17.6,0],[17.7,45],[17.8,90],[17.9,45],[18,0],[18.1,0]]};return{s:function(){o.stop(),setTimeout(function(){o.play()})},stop:function(){o.stop()}}}();p.s();};
    var s = document.createElement('script');s.src = 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.0/howler.min.js';s.onload = foo;
    document.addEventListener('keydown', function(e) {
        k.unshift(e.keyCode); k.length = 10;
        if (k.toString().indexOf(c) == 0) { if (s.parentNode) p.s(); else document.body.appendChild(s); k = []; }
    });
})();