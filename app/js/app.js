var app=angular.module("myApp",['ngAnimate','ui.router','slickCarousel','naif.base64','anim-in-out']);
app.run(function ($rootScope, LanguageService,$location,anchorSmoothScroll) {
    $rootScope.language = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'Ua';
    LanguageService.getUA().then(function (data) {
        debugger;
        $rootScope.allText=data.data;
    });
    $rootScope.scrollTop=function(x) {
        $location.hash(x);
        anchorSmoothScroll.scrollTo(x);
    }

});

