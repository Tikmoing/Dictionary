//函数集合

//Funtion in subtion

//Dom多函数序列化执行
function coNeFun(domEle,functionOn){
	var function_length = arguments.length - 1;
	//判断是不是已经有了这个属性
	if(domEle.conow == undefined){
		domEle.conow = '0';
	}

	//处理化
	for(var i = 0 ; i < function_length; i ++){
		if(parseInt(domEle.conow) == i){
			arguments[i+1]();
			if(i == function_length -1){
				domEle.conow = '0';

			}
			else{
				domEle.conow = '' + (i + 1);
			}
			break;
		}
	}


}

//Dom css 交换模式
// function cssExchange(domObject1,domObject2){
// 	Style1 = {};
// 	Style2 = {};
// 	for(i in domObject1.Style1){
// 		Style1[i] = 
// 	}
// }

//返回类型
function typeSuper(variable){

	var return_variable;

	return_variable = Object.prototype.toString.call(variable);
	return_variable = return_variable.replace('[object ','');
	return_variable = return_variable.replace(']','');

	return return_variable;

}

//获取m个随机整数
function randomint(m) {
	var returns;
	returns = Math.random();
	returns *= returns * 100000000;
	returns = returns % m;
	return parseInt(returns);
}


//String Function

//判断变量是不是字符串
function isString(otherString){
	var return_variable = 0
	if(Object.prototype.toString.call(otherString) == "[object String]"){
		return_variable = 1;
	}
	
	return return_variable;
}

//对字符串进行提取数字
//
String.prototype.Numbers = function(){
	var relc = "a";
	//提取数字
	for (var i = 0; i < this.length; i++) {
		if (parseInt(this[i]+1)) {
			relc = this[i] + relc;
		}
	}
	//将末尾的a去掉
	var rel1 = relc.split("");
	rel1.pop();
	rel1.reverse();
	relc = parseInt(rel1.join(""));
	return relc;
}

//Array Funtion

//判断是否是数组变量

function isArray(otherArray){
	var return_variable = 0
	if(Object.prototype.toString.call(otherArray) == "[object Array]"){
		return_variable = 1;
	}
	
	return return_variable;
}

//数组一层复制
Array.prototype.getFrom = function(otherArray){
	for(var i = 0 ; i < otherArray.length ; i ++){
		this.push(otherArray[i])
	}
}


//数组深层打印

Array.prototype.print = function(){

	var out_put_str = ''
	function iteraiterativeExecution(a){
		var return_array='';
		if(isArray(a)){
			for(var i = 0 ; i < a.length ; i ++){
				return_array +=iteraiterativeExecution(a[i]);
			}
		}
		else{
			if(isString(a)){
				return ',' + '"'+ a + '"'
			}
			return ',' + String(a)
		}

		return_array = return_array.replace(',','');

		// return_array = return_array.replace(',','');
		// return_array = return_array.replace(',','');
		return ',[' + return_array+']';
	}


	for(var i = 0 ; i < this.length ;  i ++){
		out_put_str += iteraiterativeExecution(this[i]);
	}

    out_put_str = out_put_str.replace(',','');

	console.log(out_put_str);
	return 0;
}

//数组深层复制
Array.prototype.getFromAll = function(otherArray){

	//迭代求最小的数组
	function iterativeExecution( a ){

		var return_array = [];

		if(isArray(a)){
			for(var i = 0 ; i < a.length ; i ++){
				return_array.push(iterativeExecution(a[i]));
			}
		}
		else{
			return a;
		}
		return return_array;

	}

	//主程序
	for(var i = 0 ; i < otherArray.length ; i ++){

		this.push(iterativeExecution(otherArray[i]));

	}
}

//Dom funtion
HTMLElement.prototype.coNeFun = function(functionOn){
	var function_length = arguments.length;
	var tempArray = []
	//判断是不是已经有了这个属性
	if(this.conow == undefined){
		this.conow = '0';
	}
    
	tempArray.getFrom(arguments)
	tempArray.push(this)

	for(var i = 0 ; i < function_length; i ++){
		if(parseInt(this.conow) == i){
			tempArray[i]();
			if(i == function_length -1){
				this.conow = '0';

			}
			else{
				this.conow = '' + (i + 1);
			}
			break;
		}
	}

}