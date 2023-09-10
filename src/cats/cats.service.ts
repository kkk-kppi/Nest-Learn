import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor() {}

  create(createCatDto: CreateCatDto) {
    return {
      code: '1',
      data: createCatDto,
      message: '新建成功',
    };
  }

  findAll() {
    return {
      code: '1',
      data: [
        {
          name: '小红',
          age: 1,
        },
        {
          name: '小紫',
          age: 2,
        },
        {
          name: '小绿',
          age: 3,
        },
      ],
      message: '成功',
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
