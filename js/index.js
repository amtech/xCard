
$.plugin('PopBox', function(_){
	
	var _this = this;
	
	this.hide();
	
	this.child('h2>img').bind('click', function(){
		_this.hide();
	});
	
});


var pool = new TemplatePool($).load('fakeurl');


function init(){
	pool.eachTemplate(function(temp){
		$('#PREW_BOX').appendChild(pool.getPreview(temp));
	});
}


function showTempBox(){
	$('#CREATE_PAGE').show();
	$('#PREW_BOX').refresh();
}

