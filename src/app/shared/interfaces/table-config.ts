import { TABLE_ACTION } from "@shared/enums/table-action.enum";

export interface TableConfig {
  isSelectable?: boolean;
  isPaginable?:  boolean;
  showActions?:  boolean;
  showFilter?:   boolean;
  actions?:      TABLE_ACTION[];
}
