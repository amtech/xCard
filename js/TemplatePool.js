function TemplatePool(_){
	
	var _templates = [];
	var _TYPE = {
						BLOCK:'block',
						LIST:'list'
						};
	
	
	
	
	
	this.load = function(url){
		var fakedata = [
			{
				name:'左菜单+右列表',
				content:[
					{size:1, content:[{type:'block', size:1}, {type:'list', size:3}]}
				]
			},
			
			{
				name:'顶部标题栏+列表',
				content:[
					{size:1, content:[{type:'title', size:1}]},
					{size:5, content:[{type:'list', size:1}]}
				]
			},
			
			{
				name:'左菜单+右列表',
				content:[
					{size:1, content:[{type:'title', size:1}]},
					{size:1, content:[{type:'block', size:1}, {type:'list', size:3}]}
				]
			},
			
			{
				name:'左菜单+右列表',
				content:[
					{size:1, content:[{type:'block', size:1}, {type:'list', size:3}]}
				]
			},
			
			{
				name:'顶部标题栏+列表',
				content:[
					{size:1, content:[{type:'title', size:1}]},
					{size:5, content:[{type:'list', size:1}]}
				]
				
			}
			
		]
		
		_templates = fakedata;                                                                            
		return this;
	}
	
	
	
	this.getPreview = function(temp){
		return new TempPage(temp);
	}
	
	
	
	this.eachTemplate = function(eachCallback){
		_.each(_templates, function(index, item){
			eachCallback(item);
		});
		return this;
	}
	
	
	
	
	
	
	
	
	/*
	########################################################
	
		TempPage
	
	########################################################
	*/
	
	function TempPage(data){
		
		var _this = _.Element('div').css({display:'inline-block'});
		var box = _.Element('a')
							.attribute('title', data.name)
							.attribute('href', '#')
							.appendTo(_this)
							.css({display:'flex', flexFlow:'column', width:'100px', height:'150px', border:'2px solid black', margin:'10px', backgroundColor:'#FFF'});
		
		_.each(data.content, function parseRow(i, rowData){
			var row = _.Element('div').css({flex:rowData.size, display:'flex', flexFlow:'row'});
			_.each(rowData.content, function(j, colData){
				var col = getComponent(colData.type, {flex:colData.size, border:'1px solid #666', margin:'1px'});
				row.appendChild(col);
			});
			box.appendChild(row);
		});
		
		
		function getComponent(type, styleObj){
			var com = _.Element('div').css(styleObj);
			switch(type){
				case 'list':
					com.css({display:'flex', flexFlow:'column'});
					for(var i=0; i<6; i++){
						var item = _.Element('div').css({backgroundColor:'#CCC', margin:'1px'}).html('&nbsp;');
						com.appendChild(item);
					}
					break;
				case 'title':
					break;
			}
			return com;
		}
		
		return _this;
	}
	
}




