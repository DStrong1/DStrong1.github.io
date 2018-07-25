$(document).ready(function() {
    $('#reset').click(function() {
        $('form input').each(function() {
            if (this.type == 'text') {
                this.value = '';
            }
        });
    });
});