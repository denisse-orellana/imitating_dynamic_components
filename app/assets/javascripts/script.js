$('document').ready(function() {

    // 1 Imitating Alert Dismissing:
    $('.collapse').hide();
    $('#alert').click(function() {
        $('#alertDismissing').toggle();
    })

    // 2 Imitating Collapse:
    $('#collapseButton').click(function(e) {
        e.preventDefault();
        $('.collapseEx').slideToggle('slow');
    })
    
    // Imitating Collapse Accordion:
    $('#headingOne').click(function(e) {
        e.preventDefault();
        $('#collapseOne').toggle();
        $('#collapseTwo').hide();
        $('#collapseThree').hide();
    })

    $('#headingTwo').click(function(e) {
        e.preventDefault();
        $('#collapseOne').hide();
        $('#collapseTwo').toggle();
        $('#collapseThree').hide();
    })

    $('#headingThree').click(function(e) {
        e.preventDefault();
        $('#collapseOne').hide();
        $('#collapseTwo').hide();
        $('#collapseThree').toggle();
    })

    /* Other way to do the 3:
    $('.collapsed').click(function(e) {
        let target = $($(this).data('target'));
        if (target.is(':visible')) {
            target.slideUp();
        } else {
            $('.target').slideUp();
            target.slideToggle();
        }
    })
    */

    /* 
    Original code
    $('.collapsed').click(function(e) {
        let target = $($(this).data('target'));
        if(target.is(':visible')){
            target.slideUp();
        } else {
            $('.targeted').slideUp();
            target.slideToggle();
        }
    });
    */
})
