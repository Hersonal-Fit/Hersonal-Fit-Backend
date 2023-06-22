import { QuestionService } from './question.service';
import { Controller, Get, Query } from '@nestjs/common';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get('generate')
  async generate(@Query('prompt') prompt: string): Promise<any> {
    return this.questionService.generateText(prompt);
  }
}
