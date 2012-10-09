$(function() {
    $('[data-github]').each(function() {
        var $this = $(this);
        $this.append(
            $('<a href="http://github.com/' + $this.data('github') +'"/>').
                addClass('font-icon-github'));
    });
});