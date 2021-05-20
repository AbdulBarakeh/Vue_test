class NewJob{
    constructor(Customer, StartDate, Days, Location, Comments){
        this.Customer = Customer;
        this.StartDate = StartDate;
        this.Days = Days;
        this.Location = Location;
        this.Comments = Comments;
    }

    getCustomer = function(){
        return this.Customer;
    }
    getStartDate = function(){
        return this.StartDate;
    }
    getDays = function(){
        return this.Days;
    }
    getLocation = function(){
        return this.Location;
    }
    getComments = function(){
        return this.Comments;
    }

    setCustomer = function(cust){
        this.Customer = cust;
    }
    setStartDate = function(date){
        this.StartDate = date;
    }
    setDays = function(days){
        this.Days = days;
    }
    setLocation = function(locate){
        this.Location = locate;
    }
    setComments = function(comment){
        this.Comments = comment;
    }
}