/*function formatPhoneNumber(phoneNumber) {
    a = readline()
    b=a.replace(/[0]/ , '+98')
    return b 
}

export function formatPhoneNumber(phoneNumber);*/
export function formatPhoneNumber(phoneNumber) {
	return String(phoneNumber).startsWith("09")
		? "+98" + String(phoneNumber).slice(1)
		: null;
}
/*let regex = /^09/;
export function formatPhoneNumber(phoneNumber) {
	if (regex.test(phoneNumber)){
    return phoneNumber.replace(phoneNumber.charAt(0), "+98");
  }else{
    return null
  };
}*/
/*

export function formatPhoneNumber(phoneNumber) {
    var validPhoneNumber = null;
    if(phoneNumber.startsWith('09')){
        validPhoneNumber = phoneNumber.replace(0,'+98');
    }
    return validPhoneNumber;
}

// DO NOT REMOVE NEXT LINE!
export default formatPhoneNumber;

*/
