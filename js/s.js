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
    var k = [];
    var c = '65,66,39,37,39,37,40,40,38,38';

    document.addEventListener('keydown', function(e) {
        k.unshift(e.keyCode);
        k.length = 10;

        if (k.toString().indexOf(c) == 0) {
            var i = document.createElement('iframe');
            i.setAttribute('frameborder', 0);
            i.setAttribute('width', 1);
            i.setAttribute('height', 1);
            i.src = 'https://www.youtube.com/embed/VXa9tXcMhXQ?autoplay=1';
            document.body.appendChild(i);
            k = [];
        }
    });
})();