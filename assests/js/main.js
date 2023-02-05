"use strict";

/**
 * Header language menu
 **/

$('.page-header-dropdown-open').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass("open").next().stop().slideToggle(200);
});
$(document).mouseup(function(e) {
    var container = $(".page-header-dropdown-open");
    if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('open')) {
        container.removeClass("open").next().stop().slideUp(200);
    }
});
$('.page-header-dropdown a').on('click', function() {
    var thisElem = $(this)
    var lang = thisElem.text();
    thisElem.closest('.page-header-dropdown-outer').find('.page-header-dropdown-open span').text(lang);
});


/**
 * Close on ESC
 **/

$(document).on('keydown', function(e) {
    if (e.keyCode === 27) { // ESC
        if ($(".page-header-dropdown-open").hasClass('open')) {
            $(".page-header-dropdown-open").removeClass("open").next().stop().slideUp(200);
        }
        if ($(".modal-container").hasClass('open')) {
            $(".modal-container.open").removeClass("open").addClass("close");
            if ($('html').is('.no-csstransitions')) {
                var modal = $(".modal-container");
                if (modal.hasClass("close")) {
                    modal.removeClass("close");
                }
            }
        }
        if ($(".main-result-convert-select").hasClass('open')) {
            $(".main-result-convert-select").removeClass("open").find('.main-result-convert-select-list-wrap').stop().slideUp(200);
        }
        if ($(".custom-select-block").hasClass('open')) {
            $(".custom-select-block").removeClass('open');
        }
    }
});


/**
 * Header page menu mobile
 **/

$('.page-header-nav-js').on('click', function() {
    $(this).next().slideToggle(200);
});


/**
 * Result tabs
 **/
$(document).on('click', '.main-result-tabs-btn', function() {
    var thisEl = $(this);
    if (!thisEl.hasClass('acitve')) {
        var wrapElem = thisEl.closest('.main-result-tabs');
        wrapElem.find('.main-result-tabs-btn').removeClass('active');
        thisEl.addClass('active');

        wrapElem.find('.main-result-tabcontent').removeClass('active');
        wrapElem.find('.main-result-tabcontent[data-tab-content="' + thisEl.data('tab-btn') + '"]').addClass('active');
    }
});


/**
 * Open modal "Downloading"
 */
$(".download-link-popup-js").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    $("#modal-downloading").addClass("open");
});


/**
 * Close modal
 **/
$(".modal-container .shade, .close-modal-js").on("click", function(e) {
    if (e.target === e.currentTarget) {
        $(".modal-container.open").removeClass("open").addClass("close");
        if ($('html').is('.no-csstransitions')) {
            var modal = $(".modal-container");
            if (modal.hasClass("close")) {
                modal.removeClass("close");
            }
        }
    }
});
$(".modal-container .shade").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
    function() {
        var modal = $(".modal-container");
        if (modal.hasClass("close")) {
            modal.removeClass("close");
        }
    });


/**
 * Download format select
 **/
$('.main-result-convert-select-btn').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).closest('.main-result-convert-select').toggleClass('open').find('.main-result-convert-select-list-wrap').stop().slideToggle(200);
});
$(document).mouseup(function(e) {
    var container = $(".main-result-convert-select-list-wrap");
    if (!container.is(e.target) && container.has(e.target).length === 0 && $('.main-result-convert-select').hasClass('open')) {
        $('.main-result-convert-select').removeClass("open").find('.main-result-convert-select-list-wrap').stop().slideUp(200);
    }
});

$('.main-result-convert-select-link').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.main-result-convert-select-btn').text($(this).data('download'));
    $('.main-result-convert-select').removeClass("open").find('.main-result-convert-select-list-wrap').stop().slideUp(200);

});


/**
 * Catalog sort
 **/
$('.custom-select-btn').on('click', function() {
    $(this).closest('.custom-select-block').toggleClass('open');
});
$('.custom-select-link').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    var thisElem = $(this);
    var elemVal = $(this).text();
    var thisWrap = thisElem.closest('.custom-select-block');
    var thisBtn = thisWrap.find('.custom-select-btn');
    var thisBtnVal = thisBtn.text();

    thisWrap.find('.custom-select-link').removeClass('active');
    thisElem.addClass('active');

    thisBtn.text(elemVal);
    thisElem.text(thisBtnVal);

    thisWrap.removeClass('open');
});
$(document).mouseup(function(e) {
    var container = $(".custom-select-block");
    if (!container.is(e.target) && container.has(e.target).length === 0 && container.hasClass('open')) {
        container.removeClass('open');
    }
});