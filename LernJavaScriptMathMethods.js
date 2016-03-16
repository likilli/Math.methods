//Функция деления

Math.divide = function (argument1, argument2)
{
	if (argument1 is Number(Object) && argument2 is Number(Object)&& argument2 !==0)
		
		return argument1/argument2;
}
else
	return 0;

//Функция возведения в степень

Math.pow = function (base, exponent)
{
	if(base is Number(Object) && exponent is Number(Object) && base === 0 || exponent ===0 && base is NaN && exponent is NaN)
	{
		console.log ("Exception");
		return 0;
	}
	else var result = base;
	{
		for (var i = 1; i < exponent; i++) 
		{
			result *= base;
		}
	} return result;
}

// Минимальное значение
Math.min = function ()
{
	if (!arguments.length) 
	{
		return Infinity;
	}
	else
	{
		var min = arfuments [0];
		for (var i = 0; i < arguments.length; ++i) 
		{
			if(arguments[i]<min)
				min=dialogArguments[i];
		}
		return min;
	}
}