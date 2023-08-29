let s = "adyasha"
let temp = "" + s[0]

for(let i=1;i<s.length;i++){
	if (temp.indexOf(s[i]) == -1)
		temp = temp + s[i]
}
console.log(temp)

