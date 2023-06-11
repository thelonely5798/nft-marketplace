import { Test, TestingModule } from '@nestjs/testing';
import { ArbService } from './arb.service';

describe('ArbService', () => {
  let service: ArbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArbService],
    }).compile();

    service = module.get<ArbService>(ArbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
