class Parent {	
	constructor(name, childs){
		this.name = name;
		this.childs = childs;
	}
}

Parent.prototype.PrintName = function(){
	console.log(this.name);
}




