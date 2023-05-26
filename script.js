// complete the given function

function palindrome(str){
	let s1 = str.trin()
	let s2 = s1.toLowerCase()
	let i=0
	let j=s2.length-1
	while(i<j){
		if(s2.charAt(i) != s2.charAt(j)) return false
		i++
		j--
	}
	return true
}
module.exports = palindrome
