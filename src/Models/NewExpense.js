class NewExpense{
    constructor(ModelId, JobId, Date, Text, Amount){
        this.ModelId = ModelId;
        this.JobId = JobId;
        this.Date = Date;
        this.Text = Text;
        this.Amount = Amount;
    }

    getModelId = function(){
        return this.ModelId;
    }
    getJobId = function(){
        return this.JobId;
    }
    getDate = function(){
        return this.Date;
    }
    getText = function(){
        return this.Text;
    }
    getAmount = function(){
        return this.Amount;
    }

    setModelId = function(name){
        this.FirstName = name;
    }
    setJobId = function(jobid){
        this.JobId = jobid;
    }
    setDate = function(date){
        this.Date = date;
    }
    setText = function(text){
        this.Text = text;
    }
    setAmount = function(amount){
        this.Amount = amount;
    }
}