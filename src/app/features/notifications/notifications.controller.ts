import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {RequestUser} from '@decorators/request-user.decorator';
import {User} from '@users/entities/user.entity';
import {NotificationsService} from '@notifications/notifications.service';
import {CreateNotificationDto} from '@notifications/dto/create-notification.dto';
import {UpdateNotificationDto} from '@notifications/dto/update-notification.dto';

@Controller('notifications')
@ApiTags('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@RequestUser() user: User, @Body() dto: CreateNotificationDto) {
    return this.notificationsService.create(dto);
  }

  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOneById(id);
  }

  @Patch(':id')
  update(@RequestUser() user: User, @Param('id') id: string, @Body() dto: UpdateNotificationDto) {
    return this.notificationsService.update(id, dto);
  }

  @Delete(':id')
  remove(@RequestUser() user: User, @Param('id') id: string) {
    return this.notificationsService.archiveOneById(user, id);
  }
}
