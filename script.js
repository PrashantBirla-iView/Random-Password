function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
	const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numbers = "0123456789";
	const specialCharacter = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";

    const lowercaseChecked = document.getElementById('lowerCase').checked;
    const uppercaseChecked = document.getElementById('upperCase').checked;
    const specialCharacterChecked = document.getElementById('specialCharacter').checked;
    const numbersChecked = document.getElementById('number').checked;

    let characters = "";
    if(!lowercaseChecked && !uppercaseChecked && !numbersChecked && !specialCharacterChecked) {
        alert("Please Select a checkbox");
    }
	if (lowercaseChecked) {
		characters += lowercase;
	}
	if (uppercaseChecked) {
		characters += uppercase;
	}
	if (numbersChecked) {
		characters += numbers;
	}
	if (specialCharacterChecked) {
		characters += specialCharacter;
	}
    let password = "";
	for (let i = 0; i < 10; i++) {
		password += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	// Display password
	document.getElementById("genrated-pass").value = password;
}