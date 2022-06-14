import {belongsTo, Entity, model, property} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';

@model({
  settings: {
    postgresql: {
      schema: 'lb4', // 指定schema
      table: 'todo'  // 表名
    },
    foreignKeys: {
      fk_todo_todoListId: {
        name: 'fk_todo_todoListId',
        entity: 'TodoList',
        entityKey: 'id',
        foreignKey: 'todolistid', // 官方文档是todoListId, 此处须改为全小写
      },
    }
  }
})
export class Todo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'boolean',
  })
  isComplete?: boolean;

  @property({
    type: 'string',
  })
  remindAtAddress?: string; // address, city, zipcode

  @property({
    type: 'string'
  })
  remindAtGeo?: string;

  @belongsTo(() => TodoList)
  todoListId: number;

  constructor(data?: Partial<Todo>) {
    super(data);
  }
}

export interface TodoRelations {
  // describe navigational properties here
  todoList?: TodoListWithRelations
}

export type TodoWithRelations = Todo & TodoRelations;
