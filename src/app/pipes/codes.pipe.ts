import { Pipe, PipeTransform } from '@angular/core';
import { AREAS, PROFESSIONALS, GENDERS } from 'src/assets/ts/vars';

@Pipe({
  name: 'codes'
})
export class CodesPipe implements PipeTransform {

  /**
   * code转化
   * @param value 值
   * @param args 参数
   */
  transform(value: any, ...args: any[]): any {
    switch (args[0]) {
      case 'area':
        return AREAS[value];
      case 'professional':
        const result: string[] = [];
        value.forEach(e => {
          const v = PROFESSIONALS[e];
          if (v != null && v.length !== 0) {
            result.push(v);
          }
        });
        return result.join('、');
      case 'genders':
        return GENDERS[value];
      default:
        return value;
    }
  }

}
