import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/jwt/jwt.guard";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}