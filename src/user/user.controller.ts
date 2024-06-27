import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UserController {
    constructor(private userService: UserService) { }
    
    @ApiTags('user')
    @Get('/profile')
    getUsers() {
        return this.userService.getUsers();
    }
}
