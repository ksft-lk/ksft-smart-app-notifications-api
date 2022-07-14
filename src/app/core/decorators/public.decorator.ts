import {createMethodDecorator} from '@nestjs/swagger/dist/decorators/helpers';

export const Public: any = createMethodDecorator('isPublic', true);
