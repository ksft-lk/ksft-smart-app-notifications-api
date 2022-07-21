import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {EmailTemplatesService} from '@email-templates/email-templates.service';
import {EmailTemplatesController} from '@email-templates/email-templates.controller';
import {EmailTemplate, EmailTemplateSchema} from '@email-templates/entities/email-template.entity';
import {EmailTemplatesRepository} from '@email-templates/email-templates.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: EmailTemplate.name, schema: EmailTemplateSchema}])],
  controllers: [EmailTemplatesController],
  providers: [EmailTemplatesService, EmailTemplatesRepository],
  exports: [MongooseModule, EmailTemplatesService],
})
export class EmailTemplatesModule {}
