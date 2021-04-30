import { Server } from '../src/Server/Server'

class Launcher {
    private name: string;
    private server: Server;

    constructor() {
        this.name = ""
        this.server= new Server();
    }

    public LaunchApp(): void {
        console.log('starter app');       
        this.server.createServer(); 
        (this.server as any).somePrivateLogic();
    }
}

new Launcher().LaunchApp();