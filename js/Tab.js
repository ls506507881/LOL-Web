function Tab(ct) {
  this.ct = ct;
  this.init();
  this.bind();
}

Tab.prototype.init = function() {
  this.tabLis = this.ct.querySelectorAll(".tab-header>li");
  this.tabPanels = this.ct.querySelectorAll(".tab-container>li");
  console.log(this.tabLis);
};

Tab.prototype.bind = function() {
  var _this = this;
  this.tabLis.forEach(function(tabli) {
    tabli.onclick = function(e) {
      var target = e.target;
      var index = [].indexOf.call(_this.tabLis, target);
      // console.log(index)
      _this.tabLis.forEach(function(li) {
        li.classList.remove("cur");
      });
      target.classList.add("cur");

      _this.tabPanels.forEach(function(panel) {
        panel.classList.remove("active");
      });
      _this.tabPanels[index].classList.add("active");
    };
  });
};

new Tab(document.querySelectorAll(".tab")[0]);
new Tab(document.querySelectorAll(".tab")[1]);
new Tab(document.querySelectorAll(".tab")[2]);
new Tab(document.querySelectorAll(".tab")[3]);
