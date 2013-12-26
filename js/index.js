
$.plugin('PopBox', function(_){
	
	var _this = this;
	
	this.hide();
	
	this.child('h2>img').bind('click', function(){
		_this.hide();
	});
	
});


var pool = new TemplatePool();


