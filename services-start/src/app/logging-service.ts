export class LoggingService {
    constructor(){}

    logStatusChange(status: string) {
        console.log(`A serves status changed. The new status:` + status);
    }
} 

