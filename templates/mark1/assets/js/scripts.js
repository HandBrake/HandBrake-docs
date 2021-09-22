$.featherlight.autoBind = false;

$(document).ready(function(){
    var docs = $('article.docs');
    docs.addClass('js');

    if (docs.hasClass("article")){
        var translate = function(lang, string){
            switch (lang){
                case 'en':
                    break;
                case 'de':
                    switch (string){
                        case 'Instructions':
                            string = 'Instruktionen';
                            break;
                    }
                break;
                default:
                    break;
            }
            return string;
        }

        var lang = docs.attr('lang');
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
        var system_select = $('<div>').attr({ class: 'system-select', type: 'hidden' }).text(translate(lang, 'Instructions') + ':');
        var system_select_all     = $('<li>').attr({ class: 'system-select-all'     }).text('All');
        var system_select_linux   = $('<li>').attr({ class: 'system-select-linux'   }).text('Linux');
        var system_select_macos   = $('<li>').attr({ class: 'system-select-macos'   }).text('Mac');
        var system_select_windows = $('<li>').attr({ class: 'system-select-windows' }).text('Windows');
        $('<ul>').append(system_select_all, system_select_linux, system_select_macos, system_select_windows ).appendTo(system_select);
        nav.prepend(system_select);

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
            var system_all_sections = docs.find('.system-linux, .system-macos, .system-windows');
            var system_linux_sections = system_all_sections.filter('.system-linux');
            var system_macos_sections = system_all_sections.filter('.system-macos');
            var system_windows_sections = system_all_sections.filter('.system-windows');
            var classes = $(control).attr('class').split(' ');
            classes.forEach(function(target){
                switch (target){
                    case 'system-select-linux':
                        if (system_select_linux.hasClass('selected')){
                            break;
                        }
                        system_select_linux.addClass('selected');
                        system_select_all.removeClass('selected');
                        system_select_macos.removeClass('selected');
                        system_select_windows.removeClass('selected');
                        system_macos_sections.addClass('hidden');
                        system_windows_sections.addClass('hidden');
                        system_linux_sections.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_linux_sections.first(), system_all_sections.first());
                        }
                        Cookies.set('hbdocs-system', 'system-linux', { expires: 7 });
                        break;
                    case 'system-select-macos':
                        if (system_select_macos.hasClass('selected')){
                            break;
                        }
                        system_select_macos.addClass('selected');
                        system_select_all.removeClass('selected');
                        system_select_linux.removeClass('selected');
                        system_select_windows.removeClass('selected');
                        system_linux_sections.addClass('hidden');
                        system_windows_sections.addClass('hidden');
                        system_macos_sections.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_macos_sections.first(), system_all_sections.first());
                        }
                        Cookies.set('hbdocs-system', 'system-macos', { expires: 7 });
                        break;
                    case 'system-select-windows':
                        if (system_select_windows.hasClass('selected')){
                            break;
                        }
                        system_select_windows.addClass('selected');
                        system_select_all.removeClass('selected');
                        system_select_linux.removeClass('selected');
                        system_select_macos.removeClass('selected');
                        system_linux_sections.addClass('hidden');
                        system_macos_sections.addClass('hidden');
                        system_windows_sections.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_windows_sections.first(), system_all_sections.first());
                        }
                        Cookies.set('hbdocs-system', 'system-windows', { expires: 7 });
                        break;
                    case 'system-select-all':
                        if (system_select_all.hasClass('selected')){
                            break;
                        }
                        system_select_all.addClass('selected');
                        system_select_linux.removeClass('selected');
                        system_select_macos.removeClass('selected');
                        system_select_windows.removeClass('selected');
                        system_linux_sections.removeClass('hidden');
                        system_macos_sections.removeClass('hidden');
                        system_windows_sections.removeClass('hidden');
                        if (scroll === true){
                            scroll_to_section(system_all_sections.first());
                        }
                        Cookies.remove('hbdocs-system');
                        break;
                    default:
                        break;
                }
            });
        };

        var system_set = function(){
            if ($.inArray(window.location.hash, ['#system-linux', '#system-macos', '#system-windows']) !== -1){
                system = window.location.hash.substring(1);
            }
            switch (system){
                case 'system-linux':
                    system_switch(system_select_linux, false);
                    break;
                case 'system-macos':
                    system_switch(system_select_macos, false);
                    break;
                case 'system-windows':
                    system_switch(system_select_windows, false);
                    break;
                default:
                    system = '';
                    system_switch(system_select_all, false);
                    break;
            }
            return false;
        }

        system_select.find('li').click(function(){
            system_switch(this, true);
        });
        system = Cookies.get('hbdocs-system') || '';
        $(window).bind('hashchange', system_set);
        system_set();
    }

    // temporary hack until build system creates breadcrumbs instead of template
    if (docs.hasClass('landing') && docs.children('h1').first().text() == 'Versions'){
        $('article.docs nav .breadcrumbs .language-separator').add('article.docs nav .breadcrumbs .language').css('display', 'inline');
    }

    $.featherlight.defaults.onResize = function(){
        $(this.$content[0]).css('max-width', this.$content[0].naturalWidth);
        $(this.$content[0]).css('max-height', this.$content[0].naturalHeight);
    };
    $.featherlight.contentFilters.image2 = {
        regex: /\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,
        process: function(url){
            var self = this,
                deferred = $.Deferred(),
                img = new Image(),
                $img = $('<img src="'+url+'" alt="" class="'+self.namespace+'-image" />');
            var srcset = $(this.$currentTarget[0]).attr('data-srcset');
            if (srcset.length > 0) {
                $img = $('<img src="'+url+'" srcset="'+srcset+'" alt="" class="'+self.namespace+'-image" />');
            };
            img.onload  = function() {
                /* Store naturalWidth & height for IE8 */
                $img.naturalWidth = img.width; $img.naturalHeight = img.height;
                deferred.resolve( $img );
            };
            img.onerror = function() { deferred.reject($img); };
            img.src = url;
            return deferred.promise();
        }
    };
    $.featherlight.defaults.contentFilters.unshift('image2');
    docs.find('figure > a:has(img)').each(function(){
        var srcset = $(this).children('img').first().attr('srcset');
        if (typeof srcset !== 'undefined'){
            $(this).attr('data-srcset', srcset);
        }
        $(this).featherlight({type: 'image2', openSpeed: 150, closeSpeed: 150});
    });
    $.featherlight.prototype.resize = function(w, h){
        if (w && h) {
            /* Reset apparent image size first so container grows */
            this.$content.css('width', '').css('height', '');
            var aspect = w / h;
            var caption = this.$instance.find('p');
            var caption_height = caption.outerHeight(true);
            var caption_factor = 1;
            var parent_width  = this.$content.parent().width();
            var parent_height = this.$content.parent().height();
            var height = parent_height - caption_height;
            var width  = height * aspect;
            var new_width  = width + 0;
            var new_height = height + 0;
            var min_width = 0;
            var min_height = 0;
            /* Set minimum size for small viewports */
            if (window.innerWidth < 550){
                min_width  = Math.floor(window.innerWidth - 20 - 1);
                min_height = min_width / aspect;
            }
            this.$content.css('min-width', '' + min_width + 'px').css('min-height', '' + min_height + 'px');
            /* Calculate the worst ratio so that dimensions fit */
            /* Note: -1 to avoid rounding errors */
            var ratio = Math.max(
                w / (parent_width  - 1),
                h / (parent_height - 1));
            /* Resize content */
            if (ratio > 1) {
                /* Round ratio down so height calc works */
                ratio = h / Math.floor(h / ratio);
                /* Account for caption size, except short images */
                if (height > 300 && height + (caption_height * 2) > parent_height){
                    caption_factor = caption_factor - (caption_height * 2.5 / parent_height);
                }
                new_width  = w * caption_factor / ratio;
                new_height = h * caption_factor / ratio;
                this.$content.css('width', '' + new_width + 'px').css('height', '' + new_height + 'px');
            }
        }
    };
    $.featherlight.prototype.beforeOpen = function(event){
        this.$instance.find('p').remove();
        $('<p></p>').text(this.$currentTarget.parent().find('figcaption')[0].innerText).appendTo(this.$instance.find('.featherlight-content'));
    };
});
