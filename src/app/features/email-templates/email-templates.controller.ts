import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {RequestUser} from '@decorators/request-user.decorator';
import {UserDto} from '@shared/dto/database/user.dto';
import {EmailTemplatesService} from '@email-templates/email-templates.service';
import {CreateEmailTemplateDto} from '@email-templates/dto/create-email-template.dto';
import {UpdateEmailTemplateDto} from '@email-templates/dto/update-email-template.dto';

@Controller('email-templates')
@ApiTags('email-templates')
export class EmailTemplatesController {
  constructor(private readonly emailTemplatesService: EmailTemplatesService) {}

  @Post()
  create(@RequestUser() user: UserDto, @Body() createEmailTemplateDto: CreateEmailTemplateDto) {
    return this.emailTemplatesService.create(createEmailTemplateDto);
  }

  @Get()
  findAll() {
    return this.emailTemplatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emailTemplatesService.findOneById(id);
  }

  @Patch(':id')
  update(
    @RequestUser() user: UserDto,
    @Param('id') id: string,
    @Body() updateEmailTemplateDto: UpdateEmailTemplateDto,
  ) {
    return this.emailTemplatesService.update(id, updateEmailTemplateDto);
  }

  @Delete(':id')
  remove(@RequestUser() user: UserDto, @Param('id') id: string) {
    return this.emailTemplatesService.archiveOneById(user, id);
  }
}
