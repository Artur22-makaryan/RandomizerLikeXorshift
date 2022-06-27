function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
function addBinary(a, b) {
    var dec = Number(parseInt(a, 2)) + Number(parseInt(b, 2));
    return dec.toString(2);
}
function getNewDate(){
	return new Date().getTime()
}
function RandomAlg(){
const binNum = dec2bin(getNewDate())
let LeftPartSH1 = binNum.substring(0,12)
let RightPartSH1 =  binNum.substring(12,binNum.length)
let sum1 = addBinary(LeftPartSH1,binNum) + RightPartSH1
let LeftPartSH2 = sum1.substring(0,12)
let RightPartSH2 =  sum1.substring(12,sum1.length)
let sum = addBinary(binNum,LeftPartSH2) + RightPartSH2
return sum.substring(20,sum.length - 20)

}
function dec10bin(dec) {
  return (dec >>> 0).toString(10);
}
alert(parseInt(RandomAlg(),2))
