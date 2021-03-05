
class APPErros {
  
    #privatemassage
    #privateErr
    #privateStatusCode
    constructor(message, err, statusCode=400){

        
       this.#privatemassage = message
       this.#privateErr = err;
       this.#privateStatusCode = statusCode;

         
    }
    
    
}

export default new APPErros()