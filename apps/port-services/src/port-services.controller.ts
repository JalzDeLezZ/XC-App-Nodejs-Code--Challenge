import { Controller, Post, Body } from '@nestjs/common';
import { ApiGatewayService } from './port-services.service';
import { DataCreate } from './interfaces/creation';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Post('/transaction')
  createTransaction(@Body() data: DataCreate) {
    try {
      return this.apiGatewayService.createTransaction(data);
    } catch (error) {
      console.error(error);
    }
  }
}
