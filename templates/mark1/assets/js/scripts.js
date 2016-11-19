$.featherlight.autoBind = false;

$(document).ready(function(){
    var docs = $('article.docs');
    docs.addClass('js');

    if (docs.hasClass("article")){
        var header = docs.find('header').first();
        var navigation_headings = docs.find('nav .navigation > h2');
        var navigation_sections = navigation_headings.next('ul');
        navigation_headings.click(function(){
            $(this).addClass('selected').next('ul').slideDown(250);
            navigation_headings.not(this).removeClass('selected').next('ul').slideUp(250);
        });
        navigation_sections.has('a.selected').show().prev('h2').addClass('selected');
        navigation_sections.not(':has(a.selected)').hide();
        navigation_sections.find('a').each(function(){
            $(this).attr('title', $(this).next().text());
        });

        var nav = docs.find('nav');
        var system_select = docs.find('.system-select');
        var system_select_lin = system_select.find('.system-select-lin');
        var system_select_mac = system_select.find('.system-select-mac');
        var system_select_win = system_select.find('.system-select-win');
        var system_select_all = system_select.find('.system-select-all');

        var scroll_to_section = function(el, fallback_el){
            var headings = 'h1, h2, h3, h4, h5, h6';
            var cur_offset = $(window).scrollTop();
            var new_offset = $(el).children().first();
            if (new_offset.length === 0 || new_offset.is(headings) === false){
                new_offset = $(el).prevAll(headings);
            }
            new_offset = new_offset.offset();
            if (typeof new_offset == 'undefined' && typeof fallback_el != 'undefined'){
                new_offset = $(fallback_el).children().first();
                if (new_offset.length === 0 || new_offset.is(headings) === false){
                    new_offset = $(fallback_el).prevAll(headings);
                }
                new_offset = new_offset.offset();
            }
            if (typeof new_offset == 'undefined'){
                return;
            }
            new_offset = new_offset.top - header.height()+10;
            new_offset < 0 ? 0 : new_offset;
            if (new_offset < cur_offset){
                $("html, body").animate({ scrollTop: new_offset }, 250);
            }
        };

        var system_switch = function(control, scroll){
            var system_all = docs.find('.system-lin, .system-mac, .system-win');
            var system_lin = system_all.filter('.system-lin');
            var system_mac = system_all.filter('.system-mac');
            var system_win = system_all.filter('.system-win');
            var classes = $(control).attr('class').split(' ');
            classes.forEach(function(target){
                switch (target){
                    case 'system-select-lin':
                        if (system_select_lin.hasClass('selected')){
                            break;
                        }
                        system_select_lin.addClass('selected');
                        system_select_all.removeClass('selected');
                        system_select_mac.removeClass('selected');
                        system_select_win.removeClass('selected');
                        system_mac.addClass('hidden');
                        system_win.addClass('hidden');
                        system_lin.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_lin.first(), system_all.first());
                        }
                        Cookies.set('system', 'lin', { expires: 7 });
                        break;
                    case 'system-select-mac':
                        if (system_select_mac.hasClass('selected')){
                            break;
                        }
                        system_select_mac.addClass('selected');
                        system_select_all.removeClass('selected');
                        system_select_lin.removeClass('selected');
                        system_select_win.removeClass('selected');
                        system_lin.addClass('hidden');
                        system_win.addClass('hidden');
                        system_mac.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_mac.first(), system_all.first());
                        }
                        Cookies.set('system', 'mac', { expires: 7 });
                        break;
                    case 'system-select-win':
                        if (system_select_win.hasClass('selected')){
                            break;
                        }
                        system_select_win.addClass('selected');
                        system_select_all.removeClass('selected');
                        system_select_lin.removeClass('selected');
                        system_select_mac.removeClass('selected');
                        system_lin.addClass('hidden');
                        system_mac.addClass('hidden');
                        system_win.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_win.first(), system_all.first());
                        }
                        Cookies.set('system', 'win', { expires: 7 });
                        break;
                    case 'system-select-all':
                        if (system_select_all.hasClass('selected')){
                            break;
                        }
                        system_select_all.addClass('selected');
                        system_select_lin.removeClass('selected');
                        system_select_mac.removeClass('selected');
                        system_select_win.removeClass('selected');
                        system_lin.removeClass('hidden');
                        system_mac.removeClass('hidden');
                        system_win.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_all.first());
                        }
                        Cookies.remove('system');
                        break;
                    default:
                        break;
                }
                var location_sans_fragment = window.location.href.split('#')[0];
                if (window.location != location_sans_fragment){
                    history.pushState(null, null, location_sans_fragment);
                }
            });
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
    }

    // temporary hack until build system creates breadcrumbs instead of template
    if (docs.hasClass('landing') && docs.children('h1').first().text() == 'Versions'){
        $('article.docs nav .breadcrumbs .language-separator').add('article.docs nav .breadcrumbs .language').css('display', 'inline');
    }

    docs.find('figure > a:has(img)').featherlight({type: 'image', openSpeed: 150, closeSpeed: 150});
});
