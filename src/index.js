module.exports = function getZerosCount(number) {
  var numberOfNull=0;
  while (number>=5){
  	numberOfNull+=Math.floor(number/5);
  	number=Math.floor(number/5);	
  }
  return numberOfNull;
}
