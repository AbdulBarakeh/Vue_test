class Job{
    constructor(JobId, Customer, StartDate, Days, Location, Comments, Models){
        this.JobId = JobId;
        this.Customer = Customer;
        this.StartDate = StartDate;
        this.Days = Days;
        this.Location = Location;
        this.Comments = Comments;
        this.Models = Models;
    }

    getJobId = function(){
        return this.JobId;
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

    getModels = function(){
        return this.Models;
    }

    setJobId = function(id){
        this.JobId = id;
    }

    setCustomer = function(customer){
        this.Customer = customer;
    }

    setStartDate = function(date){
        this.StartDate = date;
    }
    setDays = function(days){
        this.Days = days;
    }

    setLocation = function(location){
        this.Location = location;
    }

    setComments = function(comments){
        this.Comments = comments;
    }

    setModels = function(models){
        this.Models = models;
    }
}
// public Job()
//         {
//             Models = new List<Model>();
//         }
//         public long JobId { get; set; }
//         [MaxLength(64)]
//         public string Customer { get; set; }
//         public DateTimeOffset StartDate { get; set; }
//         public int Days { get; set; }
//         [MaxLength(128)]
//         public string Location { get; set; }
//         [MaxLength(2000)]
//         public string Comments { get; set; }

//         public List<Model> Models { get; set; }