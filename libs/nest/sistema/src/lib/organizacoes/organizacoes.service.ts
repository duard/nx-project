import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { Organizacao } from './organizacoes.entity';

const COURSES = [
  {
    id: 1,
    title: 'NodeJS - The Complete Guide (incl. MVC, REST APIs, GraphQL)',
    description:
      'Master Node JS, build REST APIs with Node.js, GraphQL APIs, add Authentication, use MongoDB, SQL & much more!',
    author: 'Maximilian Schwarzmüller',
    url: 'https://codingthesmartway.com/courses/nodejs-complete-guide/',
  },
  {
    id: 2,
    title: 'The Complete Web Developer in 2020: Zero to Mastery',
    description:
      'Learn to code and become a Web Developer in 2020 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!',
    author: 'Andrei Neagoie',
    url: 'https://codingthesmartway.com/courses/web-developer-2018/',
  },
  {
    id: 3,
    title: 'Learn and Understand NodeJS',
    description:
      'Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.',
    author: 'Anthony Alicea',
    url: 'https://codingthesmartway.com/courses/learn-understand-nodejs/',
  },
];

@Injectable()
export class OrganizacoesService {
  courses = COURSES;

  constructor(
    @InjectRepository(Organizacao)
    private entityRepository: Repository<Organizacao>
  ) {}

  async findAll(): Promise<Organizacao[]> {
    return await this.entityRepository.find();
  }

  // async create(contact: Organizacao): Promise<Organizacao> {
  //   return await this.entityRepository.save(contact);
  // }

  // async update(contact: Organizacao): Promise<UpdateResult> {
  //   return await this.entityRepository.update(contact.id, contact);
  // }

  // async delete(id): Promise<DeleteResult> {
  //   return await this.entityRepository.delete(id);
  // }

  // getHello(): { value: string } {
  //   return { value: 'Organizações Service' };
  // }

  // getAll(): Promise<any> {
  //   return new Promise((resolve) => {
  //     resolve(this.courses);
  //   });
  // }
}
