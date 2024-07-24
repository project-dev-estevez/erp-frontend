import { TABLE_ACTION } from "@shared/enums/table-action.enum";

export interface TableConfig {
  isSelectable?:    boolean;
  isPaginable?:     boolean;  
  showFilter?:      boolean;
  showActions?:     boolean;
  actions?:         TABLE_ACTION[];
  showExcelButton?: boolean;
  totalItemsPagination?: number;
}
