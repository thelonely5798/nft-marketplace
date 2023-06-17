import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) { }
  @Post("/own/all/:address")
  getNftsByAccount(@Param() params: any, @Body() req: any) {
    return this.accountService.getNftsByAccount(params.address, req.cursor)
  }
  @Get("/profile/:address")
  getProfile(@Param() params: any) {
    return this.accountService.getProfile(params.address)
  }

}
