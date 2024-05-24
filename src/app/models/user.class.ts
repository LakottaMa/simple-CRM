export class User {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: number;
  address: string;
  zipCode: string;
  city: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.lastName = obj ? obj.lastName : '';
    this.email = obj ? obj.email : '';
    this.phone = obj ? obj.phone : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.address = obj ? obj.address : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.city = obj ? obj.city : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      birthDate: this.birthDate,
      address: this.address,
      zipCode: this.zipCode,
      city: this.city,
    };
  }
}