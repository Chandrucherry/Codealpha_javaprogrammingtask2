function checkPalindrome() {
    let num = document.getElementById("num").value;
    let rev = num.split("").reverse().join("");

    if (num === rev)
        document.getElementById("result").innerText = "Palindrome Number";
    else
        document.getElementById("result").innerText = "Not a Palindrome";
}
