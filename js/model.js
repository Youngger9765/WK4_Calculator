var viewModel = {
		aa: ko. observable("init"),   //字串代表輸入
		cal: ko. observable("init"),
		bb: ko. observable("init")
		};

viewModel.Answer = ko.computed(function(){
	var A=parseInt(this.aa())
	var cal2= this.cal()
	var B=parseInt(this.bb())
	if(cal2=="+")
		return A+B;
	if (cal2 =="-")
		return A-B;
	if(cal2=="*")
		return A*B;
	if(cal2=="/")
		return A/B;
	},viewModel); 

//Active konckout.js
ko.applyBindings(viewModel);



