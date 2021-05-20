class Login{
    constructor(Email, Password, OldPassword){
        this.Email = Email;
        this.Password = Password;
        this.OldPassword = OldPassword;
    }

    getEmail = function(){
        return this.Email;
    }

    getPassword = function(){
        return this.Password;
    }

    getOldPassword = function(){
        return this.OldPassword;
    }
    
    setEmail = function(email){
        this.Email = email;
    }

    setPassword = function(password){
        this.Password = password;
    }

    setOldPassword = function(oldpassword){
        this.OldPassword = oldpassword;
    }
}
        // public string Email { get; set; }
        // public string Password { get; set; }
        // public string OldPassword { get; set; }