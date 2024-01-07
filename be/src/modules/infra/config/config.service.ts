import { Injectable } from '@nestjs/common';
import { ConfigService as NestJsConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestJsConfigService) {}

  get<T = unknown>(name: string): T {
    return this.configService.get<T>(name) as T;
  }
}
