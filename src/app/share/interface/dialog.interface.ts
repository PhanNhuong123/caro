export interface IDialogData {
    type: 'alert' | 'form',
    title: string,
    message: string,
    actionYes: string,
    formData?: []
} 


export interface IFormDialogData {
    fieldName: string,
    inputClass?: string,
    formClass: string,
    pattern?: RegExp | string,
    isRequire?: boolean
}