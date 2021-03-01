function VerifyPasswords() 
{
    var password = document.getElementById("password").value;
    var confirmation = document.getElementById("confirmation").value;

    if(password != confirmation) 
    {
        alert("Mots de passe différent !"); 
		return false;
    }
}