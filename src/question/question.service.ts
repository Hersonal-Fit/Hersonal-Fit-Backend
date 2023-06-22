import { config } from 'dotenv';
config();
import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class QuestionService {
  configuration = new Configuration({
    organization: process.env.OPENAI_OG,
    apiKey: process.env.OPENAI_KEY,
  });
  openai = new OpenAIApi(this.configuration);

  async generateText(prompt: string): Promise<any> {
    const response = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      //   stop: ['\n'],
    });

    const message = response.data.choices[0].message.content;
    const days = message.split('\n\n');
    const routine = {};

    for (let i = 0; i < days.length; i++) {
      const day = days[i];
      const splitDay = day.split('\n');
      const dayOfWeek = splitDay[0];

      splitDay.shift();
      routine[dayOfWeek] = splitDay;
    }

    return routine;
  }
}
