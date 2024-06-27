import { Module } from '@nestjs/common';
import { TaskController } from 'src/tasks/task.controller';
import { ProjectsController } from './projects.controller';

@Module({
    controllers:[TaskController, ProjectsController]
})
export class ProjectsModule {}
