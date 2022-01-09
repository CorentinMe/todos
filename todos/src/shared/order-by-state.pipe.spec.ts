import { OrderByStatePipe } from './order-by-state.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByStatePipe();
    expect(pipe).toBeTruthy();
  });
});
