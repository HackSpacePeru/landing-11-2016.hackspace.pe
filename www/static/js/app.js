'use strcit';
(function ($) {
    window.fbAsyncInit = function() {
        FB.init({
            appId: '543781455819002',
            status     : true,
            xfbml      : true,
            version    : 'v2.8'
        });
        FB.AppEvents.logPageView();
    };

    var config = {
        countdown: {
            year: 2016,
            month: 11,
            day: 28,
            hour: 12,
            minute: 0,
            second: 0,
        }
    };

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

    function fadePreloader() {
        $('.page-wrapper').removeClass('is-loading');

        setTimeout(function() {
            $('.page-preloader').css('z-index', '-1');
            $('.preloader-wrapper').removeClass('active');
        }, 500);
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
            days: $('#countdown-d'),
            hours: $('#countdown-h'),
            minutes: $('#countdown-m'),
            seconds: $('#countdown-s')
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

    $(document).on('ready', function() {
        fbSDK(document, 'script', 'facebook-jssdk');
    });

    $(window).on('load', function() {
        fadePreloader();
        countdown();
    });
})(jQuery);
