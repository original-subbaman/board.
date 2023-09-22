class User{
    name: string; 
    email: string; 
    phoneNumber: string;
    instagramLink: string; 
    youtubeLink: string; 

    
    constructor(name: string, email: string, phoneNumber: string, instagramLink: string, youtubeLink: string){
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber; 
        this.instagramLink = instagramLink;
        this.youtubeLink = youtubeLink;
    }


}

export { User }