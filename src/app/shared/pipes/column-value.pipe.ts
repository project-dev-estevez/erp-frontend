import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../interfaces/table-column';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'columnValue'
})
export class ColumnValuePipe implements PipeTransform {

  transform(row: any, column: TableColumn): unknown {
    let displayvalue = row[column.dataKey];

    switch (column.dataType)
    {
      case 'date':
        if(column.formatt !== undefined ) {
          displayvalue = new DatePipe('en').transform(displayvalue, column.formatt);
        }

        break;

        default:
          break;
    }


    return displayvalue;
  }

}
