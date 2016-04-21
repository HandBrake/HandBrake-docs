$.featherlight.autoBind = false;

$(document).ready(function() {
    var nav = $('article.docs nav');
    var system_select = $('<ul class="system-select">Show instructions for:<li class="system-select-all">All</li><li class="system-select-lin">Linux</li><li class="system-select-mac">Mac OS</li><li class="system-select-win">Windows</li></ul>').prependTo(nav);
    var system_select_lin = $('.system-select-lin');
    var system_select_mac = $('.system-select-mac');
    var system_select_win = $('.system-select-win');
    var system_select_all = $('.system-select-all');
    var system_lin = $('.system-lin');
    var system_mac = $('.system-mac');
    var system_win = $('.system-win');

    var system_switch = function(control){
        var classes = $(control).attr('class').split(' ');
        classes.forEach(function(target){
            switch (target){
                case 'system-select-all':
                    system_select_all.addClass('selected');
                    system_select_lin.removeClass('selected');
                    system_select_mac.removeClass('selected');
                    system_select_win.removeClass('selected');
                    system_lin.removeClass('hidden');
                    system_mac.removeClass('hidden');
                    system_win.removeClass('hidden');
                    break;
                case 'system-select-lin':
                    system_select_lin.addClass('selected');
                    system_select_all.removeClass('selected');
                    system_select_mac.removeClass('selected');
                    system_select_win.removeClass('selected');
                    system_mac.addClass('hidden');
                    system_win.addClass('hidden');
                    system_lin.removeClass('hidden');
                    break;
                case 'system-select-mac':
                    system_select_mac.addClass('selected');
                    system_select_all.removeClass('selected');
                    system_select_lin.removeClass('selected');
                    system_select_win.removeClass('selected');
                    system_lin.addClass('hidden');
                    system_win.addClass('hidden');
                    system_mac.removeClass('hidden');
                    break;
                case 'system-select-win':
                    system_select_win.addClass('selected');
                    system_select_all.removeClass('selected');
                    system_select_lin.removeClass('selected');
                    system_select_mac.removeClass('selected');
                    system_lin.addClass('hidden');
                    system_mac.addClass('hidden');
                    system_win.removeClass('hidden');
                    break;
                default:
                    break;
            }
        });
        $("html, body").animate({ scrollTop: 0 }, 250);
    };

    system_select.find('li').click(function(){
        system_switch(this);
    });
    system_select_all.click();

    $('article.docs figure > a:has(img)').featherlight({type: 'image', openSpeed: 150, closeSpeed: 150});
});
