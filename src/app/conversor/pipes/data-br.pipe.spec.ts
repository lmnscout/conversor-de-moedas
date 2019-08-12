import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('Deve formatar a data 2019-08-09 para 09/08/2019', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2019-08-09')).toEqual('09/08/2019');
  });
});
