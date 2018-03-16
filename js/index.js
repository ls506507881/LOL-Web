//头部效果下拉
var NavMeun = {
    init:function(){
        this.$downNav = $('#down-nav');
        this.$topNav = $('#top-nav');
        this.$login = $('#login');
        this.$downLogin = $('#down-login');
        this.bind();
    },
    bind:function(){
        var self = this
        this.$topNav.on('mouseenter',function(){  //可简化为this.$topNav.onmouseenter = function(){}
            self.$downNav.removeClass('hide')
        })
        this.$topNav.on('mouseleave',function(){  
            self.$downNav.addClass('hide')
        })
        this.$downNav.on('mouseenter',function(){ 
            self.$downNav.removeClass('hide')
        })
        this.$downNav.on('mouseleave',function(){ 
            self.$downNav.addClass('hide')
        })
        this.$login.on('mouseenter',function(){
            self.$login.addClass('hoverbg')
            self.$downLogin.removeClass('hide')
        })
        this.$login.on('mouseleave',function(){
            self.$login.removeClass('hoverbg')
            self.$downLogin.addClass('hide')
        })
    }
}
NavMeun.init()


//banner折叠效果
var FlodBanner = {
    init:function(){
        this.$header = $('header');
        this.$menuTitle = $('.menu-title')
        this.bind()
    },
    bind:function(){
        var self = this
        $(window).on('scroll',function(){
            self.$header.addClass('fold')
            if ($(window).scrollTop() >= self.$header.height()) {
                self.$menuTitle.addClass('active')
            }else if($(window).scrollTop() <=  self.$header.height()){
                self.$menuTitle.removeClass('active')
            }
        })
    }
}
FlodBanner.init()

//英雄池折叠
var Hero = {
    init:function(){
        this.$heroPool= $('#heroPool');
        this.$heroTime = $('.hero-time');
        this.$freeList = $('.free-list');
        this.$heroOpen = $('.hero-time i');
        this.bind()
    },
    bind:function(){
        var self = this
        this.$heroOpen.on('click',function(){
            self.$heroTime.toggleClass('hero-time-open')
            self.$freeList.toggleClass('free-list-open')
        })
    }
}
Hero.init()




