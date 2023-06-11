import { Test, TestingModule } from '@nestjs/testing';
import { ArbController } from './arb.controller';
import { ArbService } from './arb.service';

describe('ArbController', () => {
  let controller: ArbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArbController],
      providers: [ArbService],
    }).compile();

    controller = module.get<ArbController>(ArbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
