class Token{

    constructor(JWT){
        this.JWT = JWT
    }
    setJWT = function(jwt ){
        this.JWT = jwt;
    }
    getJWT = function(){
        return this.JWT;
    }

}