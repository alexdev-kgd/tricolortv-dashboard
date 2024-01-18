import { MatDialogConfig } from "@angular/material/dialog";

export const MODAL_DEFAULT_OPTIONS: MatDialogConfig = {
  width: '700px',
  panelClass: 'admin-panel_dialog',
}

export const MODAL_ADDITIONAL_OPTIONS = (options: MatDialogConfig) => {
  return { ...MODAL_DEFAULT_OPTIONS, ...options };
};
