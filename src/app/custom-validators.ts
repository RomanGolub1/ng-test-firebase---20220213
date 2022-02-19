import {AbstractControl, ValidationErrors} from "@angular/forms";

export function emailValidators(control: AbstractControl): ValidationErrors | null {
  const emailRegex = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
  const value = control.value
  const result = emailRegex.test(value)

  if (!result) {
    return {
      emailValidator: {value}
    }
  }
  return null
}

// export function mobileValidator(minValue: number, maxValue: number): ValidatorFn {
//
//   return (control: AbstractControl): ValidationErrors | null => {
//     const value = +control.value
//
//     if (isNaN(value)) return {mobileValidator: {value}}
//     if (value < minValue) return {minRange: {value}}
//     if (value > maxValue) return {maxRange: {value}}
//
//     return null
//   }
// }

// export function observableUrlValidator(control: AbstractControl): any {
//   const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-.][a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
//   const value = control.value
//   const result = urlRegex.test(value)
//
//   if (result) return of(null).pipe(delay(5000))
//   return of(({urlNotAllowed: {value}})).pipe(delay(5000))
// }
