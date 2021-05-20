class ModelDetails{
    constructor(FirstName, LastName, Email, PhoneNo, AddresLine1, AddresLine2, Zip, City, Country, Birthdate, Nationality, Height, ShoeSize, HairColor, EyeColor, Comments, Password){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNo = PhoneNo;
        this.AddresLine1 = AddresLine1;
        this.AddresLine2 = AddresLine2;
        this.Zip = Zip;
        this.City = City;
        this.Country = Country;
        this.Birthdate = Birthdate;
        this.Nationality = Nationality;
        this.Height = Height;
        this.ShoeSize = ShoeSize;
        this.HairColor = HairColor;
        this.EyeColor = EyeColor;
        this.Comments = Comments;
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
    getPhoneNo = function(){
        return this.PhoneNo;
    }
    getAddresLine1 = function(){
        return this.AddresLine1;
    }
    getLastName = function(){
        return this.AddresLine2;
    }
    getEmail = function(){
        return this.Zip;
    }
    getPhoneNo = function(){
        return this.City;
    }
    getFirstName = function(){
        return this.Country;
    }
    getLastName = function(){
        return this.Birthdate;
    }
    getEmail = function(){
        return this.Nationality;
    }
    getPhoneNo = function(){
        return this.Height;
    }
    getFirstName = function(){
        return this.ShoeSize;
    }
    getLastName = function(){
        return this.HairColor;
    }
    getEmail = function(){
        return this.EyeColor;
    }
    getPhoneNo = function(){
        return this.Comments;
    }
    getPhoneNo = function(){
        return this.Password;
    }
    setFirstname = function(name){
        this.FirstName = name;
    }
    setLastName = function(name){
        this.LastName = name;
    }
    setEmail = function(email){
        this.Email = email;
    }
    setPhoneNo = function(no){
        this.PhoneNo = no;
    }
    setAddresLine1 = function(addres){
        this.AddresLine1 = addres;
    }
    setAddresLine2 = function(addres){
        this.AddresLine2 = addres;
    }
    setZip = function(zip){
        this.Zip = zip;
    }
    setCity = function(city){
        this.City = city;
    }
    setCountry = function(count){
        this.Country = count;
    }
    setBirthdate = function(date){
        this.Birthdate = date;
    }
    setNationality = function(natio){
        this.Nationality = natio;
    }
    setHeight = function(height){
        this.Height = height;
    }
    setShoeSize = function(size){
        this.ShoeSize = size;
    }
    setHairColor = function(hair){
        this.HairColor = hair;
    }
    setEyeColor = function(eye){
        this.EyeColor = eye;
    }
    setComments = function(comments){
        this.Comments = comments;
    }
    setPassword = function(pass){
        this.Password = pass;
    }
    
}