import { Model } from 'objection';

export default class AppModel extends Model {
  public readonly id!: number;
  public createdAt?: string;
  public updatedAt?: string;

  public $beforeInsert(): void {
    this.createdAt = this.datetimeString();
    this.updatedAt = this.datetimeString();
  }

  public $beforeUpdate(): void {
    this.updatedAt = this.datetimeString();
  }

  // mysql format 0000-00-00 00:00:00
  private datetimeString(): string {
    return new Date()
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
  }
}
