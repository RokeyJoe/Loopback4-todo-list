import {
  repository
} from '@loopback/repository';
import {TodoRepository} from '../repositories';

export class TodoTodoListController {
  constructor(
    @repository(TodoRepository)
    public todoRepository: TodoRepository,
  ) { }


}
