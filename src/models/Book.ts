import AppModel from './AppModel';

export default class Book extends AppModel {
  public name?: string;

  public static tableName = 'books';
  public static modelPaths = [__dirname];
}
