$.featherlight.autoBind = false;

$(document).ready(function() {
    var nav = $('article.docs nav');
    var system_select = $('<ul class="system-select">Instructions:<li class="system-select-all">All</li><li class="system-select-lin">Linux</li><li class="system-select-mac">Mac</li><li class="system-select-win">Windows</li></ul>').prependTo(nav);
    var system_select_lin = $('.system-select-lin');
    var system_select_mac = $('.system-select-mac');
    var system_select_win = $('.system-select-win');
    var system_select_all = $('.system-select-all');
    var system_lin = $('.system-lin');
    var system_mac = $('.system-mac');
    var system_win = $('.system-win');

    var system_switch = function(control, scroll){
        var classes = $(control).attr('class').split(' ');
        classes.forEach(function(target){
            switch (target){
                case 'system-select-lin':
                    system_select_lin.addClass('selected');
                    system_select_all.removeClass('selected');
                    system_select_mac.removeClass('selected');
                    system_select_win.removeClass('selected');
                    system_mac.addClass('hidden');
                    system_win.addClass('hidden');
                    system_lin.removeClass('hidden');
                    Cookies.set('system', 'lin', { expires: 7 });
                    break;
                case 'system-select-mac':
                    system_select_mac.addClass('selected');
                    system_select_all.removeClass('selected');
                    system_select_lin.removeClass('selected');
                    system_select_win.removeClass('selected');
                    system_lin.addClass('hidden');
                    system_win.addClass('hidden');
                    system_mac.removeClass('hidden');
                    Cookies.set('system', 'mac', { expires: 7 });
                    break;
                case 'system-select-win':
                    system_select_win.addClass('selected');
                    system_select_all.removeClass('selected');
                    system_select_lin.removeClass('selected');
                    system_select_mac.removeClass('selected');
                    system_lin.addClass('hidden');
                    system_mac.addClass('hidden');
                    system_win.removeClass('hidden');
                    Cookies.set('system', 'win', { expires: 7 });
                    break;
                default:
                    system_select_all.addClass('selected');
                    system_select_lin.removeClass('selected');
                    system_select_mac.removeClass('selected');
                    system_select_win.removeClass('selected');
                    system_lin.removeClass('hidden');
                    system_mac.removeClass('hidden');
                    system_win.removeClass('hidden');
                    Cookies.remove('system');
                    break;
            }
        });
        if (scroll === true){
            $("html, body").animate({ scrollTop: 0 }, 250);
        }
    };

    system_select.find('li').click(function(){
        system_switch(this, true);
    });
    var system = Cookies.get('system');
    if (typeof system != 'undefined'){
        switch (system){
            case 'lin':
                system_switch(system_select_lin, false);
                break;
            case 'mac':
                system_switch(system_select_mac, false);
                break;
            case 'win':
                system_switch(system_select_win, false);
                break;
            default:
                system_switch(system_select_all, false);
                break;
        }
    } else {
        system_switch(system_select_all, false);
    }

    $('article.docs figure > a:has(img)').featherlight({type: 'image', openSpeed: 150, closeSpeed: 150});
});
