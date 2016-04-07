$.featherlight.autoBind = false;

$(document).ready(function() {
    $('article.docs > figure > a:has(img)').featherlight({type: 'image', openSpeed: 150, closeSpeed: 150});
});
