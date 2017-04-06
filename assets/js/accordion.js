(function ($) {
    var state = {},
        numberOfSlides = 5,
        panelGroupElementClass = ".panel-group",
        panelBodyElementClass = ".panel-body",
        panelBodyContentContainerElementClass = ".panel-body .panel-body-content-container",
        panelHeadingElementClass = ".panel-heading",
        verticalTitleElementClass = ".vertical-title",
        horizontalTitleElementClass = ".horizontal-title",
        rotateVerticalClass = "rotate-vertical",
        verticalBodyHorizontalClass = "vertical-body-horizontal",
        orientationQueryWidth = 991,
        orientationQuery = "(max-width: " + orientationQueryWidth + "px)";

    state.orientation = "vertical";
    state.isMatchesOrientationQuery = window.matchMedia(orientationQuery).matches;
    if (state.isMatchesOrientationQuery === true) {
        state.orientation = "horizontal";
    }

    $(document).ready(function () {
        $(window).resize(function () {
            if ($(panelGroupElementClass).hasClass(rotateVerticalClass)) {
                setDimensions("vertical");
            } else {
                setDimensions("horizontal");
            }

            if (window.matchMedia(orientationQuery).matches !== state.isMatchesOrientationQuery) {
                state.isMatchesOrientationQuery = window.matchMedia(orientationQuery).matches;
                state.orientation = state.orientation === "vertical" ? "horizontal" : "vertical";
                setOrientation(state.orientation);
            }
        });

        setDimensions(state.orientation);
        setOrientation(state.orientation);
    });

    function windowInnerWidth() {
        return $(window).width();
    }

    function windowInnerHeight() {
        return $(window).height();
    }

    function panelContentCssObject() {
        var panelHeight = $(panelHeadingElementClass).outerHeight(true) + 1,
            panelWidth = $(panelHeadingElementClass).outerWidth(true) - panelHeight,
            threshold = (window.innerWidth - (panelHeight * (numberOfSlides + 1)));
        return {
            "height": panelWidth + "px",
            "width": threshold + "px",
            "min-width": (orientationQueryWidth - (orientationQueryWidth / 2)) + "px"
        };
    }

    function verticalTranslateCssObject() {
        return {
            "-webkit-transform": "translateX(100%) rotate(90deg)",
            "-moz-transform": "translateX(100%) rotate(90deg)",
            "-o-transform": "translateX(100%) rotate(90deg)",
            "transform": "translateX(100%) rotate(90deg)"
        };
    }

    function verticalTransformOriginCssObject() {
        var panelHeight = $(panelHeadingElementClass).outerHeight(true) + 1,
            threshold = ((window.innerWidth*0.765 -(panelHeight * numberOfSlides)) / 2);
        return {
            "-webkit-transform-origin": threshold + "px " + threshold + "px",
            "-moz-transform-origin": threshold + "px " + threshold + "px",
            "-o-transform-origin": threshold + "px " + threshold + "px",
            "transform-origin": threshold + "px " + threshold + "px"
        };
    }

    function setOrientation(orientation) {
        switch (orientation) {
            case "vertical":
                uninstallHorizontal();
                installVertical();
                break;

            case "horizontal":
                uninstallVertical();
                installHorizontal();
                break;
        }
    }

    function setDimensions(orientation) {
        var screenWidth;
        if($(window).width()>991)
            screenWidth = 0.765;
        else
            screenWidth = 0.745;


        switch (orientation) {
            case "vertical":
                $(panelGroupElementClass).css({width: 330 + "px"});//this
                var panelHeight = $(panelHeadingElementClass).outerHeight(true) - 1;
                $(panelBodyElementClass).css({height: (window.innerWidth*screenWidth - (panelHeight * numberOfSlides)) + "px"});
                $(panelBodyElementClass).css({width: (window.innerWidth*screenWidth - (panelHeight * numberOfSlides)) + "px"});
                $(panelBodyContentContainerElementClass).css(panelContentCssObject());
                installVerticalBase();
                break;

            case "horizontal":
                var screenWidth;
                    if(windowInnerWidth()<768)
                        screenWidth = windowInnerWidth()
                    else
                        screenWidth = windowInnerWidth()-(windowInnerWidth()*0.245);
                $(panelGroupElementClass).css({width: screenWidth + "px"});
                $(panelBodyElementClass).removeAttr("style");
                $(panelBodyContentContainerElementClass).removeAttr("style");
                break;
        }
    }

    function installHorizontal() {
        $(horizontalTitleElementClass).show();
    }

    function uninstallHorizontal() {
        $(horizontalTitleElementClass).hide();
    }

    function installVerticalBase() {
        $(panelGroupElementClass).css(verticalTranslateCssObject());
        $(panelBodyElementClass).css(verticalTransformOriginCssObject());
    }

    function installVertical() {
        $(verticalTitleElementClass).show();

        installVerticalBase();

        $(panelGroupElementClass).addClass(rotateVerticalClass);
        $(panelBodyElementClass).addClass(verticalBodyHorizontalClass);
        $(panelBodyContentContainerElementClass).css(panelContentCssObject());

    }

    function uninstallVertical() {
        $(verticalTitleElementClass).hide();

        $(panelBodyElementClass).removeClass(verticalBodyHorizontalClass);
        $(panelBodyElementClass).removeAttr("style");
        $(panelBodyContentContainerElementClass).removeAttr("style");

        $(panelGroupElementClass).removeClass(rotateVerticalClass);
        $(panelGroupElementClass).removeAttr("style");
    }

}(jQuery));

