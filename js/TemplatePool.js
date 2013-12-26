function TemplatePool(){
	
	var _templates = [];
	var _TYPE = {
						BLOCK:'block',
						LIST:'list'
						};
	
	this.load = function(url){
		/*
		[
			{
				name:'顶部标题栏+列表',
				content:[
					[
						{type:'block', size:1},
						{type:'list', size:6}
					]
				]
			},
			
			{
				name:'左菜单+右列表',
				content:[
					[{type:'block', size:1}],
					[{type:'list', size:3}]
				]
			}
		]
		*/
	}
	
	this.getPreview = function(temp){
		return null;
	}
	
	this.eachTemplate = function(eachCallback){
		
	}
	
}