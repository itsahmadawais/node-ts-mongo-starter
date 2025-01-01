// import BaseSeeder from './BaseSeeder';

// const authUsers: Partial<any>[] = [

// ];

// class AdminSeeder extends BaseSeeder<any> {
//   constructor() {
//     super(UserModel, authUsers);
//   }

//   protected async preDataInsertion(): Promise<void> {
//     this.data = await Promise.all(
//       this.data.map(async (item) => {
//         // const hashedPassword = await passwordHashGenerator(item.password!);
//         return {
//           ...item,
//           // password: hashedPassword
//         };
//       })
//     );
//   }

//   protected async callPreMethods(): Promise<void> {
//     await this.preDataInsertion();
//   }
// }

// export default AdminSeeder;