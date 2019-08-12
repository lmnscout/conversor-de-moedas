import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  /**
   * Aplica formatação para a data.
   *
   * @param string dataEng
   * @return string data no formato dd/mm/yyyy
   */
  transform(dataEng: string): string {
    if (!dataEng) {
      return '';
    }

    const dataArr = dataEng.split('-');
    if (dataArr.length !== 3) {
      return dataEng;
    }

    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
  }

}
