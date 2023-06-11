import { Controller } from '@nestjs/common';
import { PolygonService } from './polygon.service';

@Controller('polygon')
export class PolygonController {
  constructor(private readonly polygonService: PolygonService) {}
}
