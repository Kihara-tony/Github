import { UsersDirective } from './users.directive';

describe('UsersDirective', () => {
  it('should create an instance', () => {
    const directive = new UsersDirective(this.userName);
    expect(directive).toBeTruthy();
  });
});
