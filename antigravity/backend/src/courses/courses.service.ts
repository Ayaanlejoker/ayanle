import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CoursesService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.CourseCreateInput) {
        return this.prisma.course.create({ data });
    }

    async findAll() {
        return this.prisma.course.findMany({ include: { instructor: true } });
    }

    async findOne(id: number) {
        return this.prisma.course.findUnique({
            where: { id },
            include: { lessons: true, exams: true }
        });
    }

    async update(id: number, data: Prisma.CourseUpdateInput) {
        return this.prisma.course.update({ where: { id }, data });
    }

    async remove(id: number) {
        return this.prisma.course.delete({ where: { id } });
    }
}
