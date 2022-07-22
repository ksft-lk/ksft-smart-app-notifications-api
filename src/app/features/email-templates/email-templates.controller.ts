import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {RequestUser} from '@decorators/request-user.decorator';
import {UserDto} from '@shared/dto/database/user.dto';
import {PayloadTransformationPipe} from '@shared/pipes/payload-transformation.pipe';
import {EmailTemplatesService} from '@email-templates/email-templates.service';
import {CreateEmailTemplateDto} from '@email-templates/dto/create-email-template.dto';
import {UpdateEmailTemplateDto} from '@email-templates/dto/update-email-template.dto';
import {FindEmailTemplatesDto} from '@email-templates/dto/find-email-templates.dto';
import {EmailTemplateDocument} from '@email-templates/entities/email-template.entity';

@Controller('email-templates')
@ApiTags('email-templates')
export class EmailTemplatesController {
  constructor(private readonly emailTemplatesService: EmailTemplatesService) {}

  @Post()
  async create(@RequestUser() user: UserDto, @Body() dto: CreateEmailTemplateDto): Promise<EmailTemplateDocument> {
    return await this.emailTemplatesService.create(user, dto);
  }

  @Get()
  async find(@Query(new PayloadTransformationPipe()) dto: FindEmailTemplatesDto): Promise<EmailTemplateDocument[]> {
    return this.emailTemplatesService.find(dto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EmailTemplateDocument | null> {
    return this.emailTemplatesService.findOneById(id);
  }

  @Patch(':id')
  async update(
    @RequestUser() user: UserDto,
    @Param('id') id: string,
    @Body() dto: UpdateEmailTemplateDto,
  ): Promise<EmailTemplateDocument | null> {
    return this.emailTemplatesService.update(user, id, dto);
  }

  @Delete(':id')
  async remove(@RequestUser() user: UserDto, @Param('id') id: string): Promise<EmailTemplateDocument | null> {
    return this.emailTemplatesService.archiveOneById(user, id);
  }
}
