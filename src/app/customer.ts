export class validCustomer {
  constructor(
    public name: string | null,
    public email: string | number | null,
    public mobile: number | null,
    public location: string | number | null,
  ) {
  }
}
