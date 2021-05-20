class Manager{
    constructor(FirstName, LastName, Email, Password){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
    }

    getFirstName = function(){
        return this.FirstName;
    }

    getLastName = function(){
        return this.LastName;
    }

    getEmail = function(){
        return this.Email;
    }

    getPassword = function(){
        return this.Password;
    }
    
    setFirstName = function(name){
        this.FirstName = name;
    }

    setLastName = function(lastname){
        this.LastName = lastname;
    }

    setEmail = function(email){
        this.Email = email;
    }

    setPassword = function(password){
        this.Password = password;
    }
}
// [MaxLength(64)]
//         public string FirstName { get; set; }
//         [MaxLength(32)]
//         public string LastName { get; set; }
//         [MaxLength(254)]
//         public string Email { get; set; }
//         [MaxLength(60)]
//         public string Password { get; set; }