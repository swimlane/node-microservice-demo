import { Controller, Get } from 'routing-controllers';
import * as Swagger from 'swagger-client';

@Controller('/users')
export class UserController {

    client: any;

    constructor() {
        this.client = new Swagger({
            url: 'http://petstore.swagger.io/v2/swagger.json',
            usePromise: true
        });
    }

    @Get('/')
    async get(): Promise<any> {
        let client = await this.client;
        let user = await client.user.getUserByName({ username: "user1"});
        return user;        
    }
}