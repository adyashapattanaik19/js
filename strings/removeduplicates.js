function count_occur( str )
	{
    let newstr = [];
	for( let i = 0 ;i < str.length ;i++)
	{
		
		let count = 0;
		for( let j = 0 ;j < str.length ;j++)
		{
		if( str[i] == str[j] && i > j )
		{
		break;
		}
		if( str[i] == str[j] )
		{
			count++;
		}
		}
		
	    if (count!=0){
			newstr.push(str[i]);
			//console.log(newstr);
		}
		
	}
	return newstr;
	}
	
	let s1 = "adyasha";
	console.log(count_occur(s1));
