import { Test, TestingModule } from '@nestjs/testing';
import { PolygonController } from './polygon.controller';
import { PolygonService } from './polygon.service';

describe('PolygonController', () => {
  let controller: PolygonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolygonController],
      providers: [PolygonService],
    }).compile();

    controller = module.get<PolygonController>(PolygonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
