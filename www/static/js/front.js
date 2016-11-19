'use strict';
(function($) {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '929855330452808',
            xfbml: true,
            version: 'v2.8'
        });
    };

    var w = window,
        d = document,
        b = document.body;

    var config = {
        countdown: {
            year: 2016,
            month: 11,
            day: 5,
            hour: 12,
            minute: 0,
            second: 0,
        }
    };

    function countdown() {
        var date = new Date(
            config.countdown.year,
            config.countdown.month - 1,
            config.countdown.day,
            config.countdown.hour,
            config.countdown.minute,
            config.countdown.second
        );

        var $countdownNumbers = {
            days: $('#countdown-days'),
            hours: $('#countdown-hours'),
            minutes: $('#countdown-minutes'),
            seconds: $('#countdown-seconds')
        };

        $('#countdown')
            .countdown(date)
            .on('update.countdown', function(event) {
                $countdownNumbers.days.text(event.offset.totalDays);
                $countdownNumbers.hours.text(('0' + event.offset.hours).slice(-2));
                $countdownNumbers.minutes.text(('0' + event.offset.minutes).slice(-2));
                $countdownNumbers.seconds.text(('0' + event.offset.seconds).slice(-2));
            });
    }

    function fbSDK(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    };

    function googleAnalytics(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        };
        i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    };

    window.addEventListener('load', function() {
        countdown();
        fbSDK(d, 'script', 'facebook-jssdk');
        googleAnalytics(w, d, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        ga('create', 'UA-85907838-1', 'auto');
        ga('send', 'pageview');
    });
})(jQuery);
