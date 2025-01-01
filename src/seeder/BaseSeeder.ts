import { Model, Document } from 'mongoose';

export default class BaseSeeder<T extends Document> {
  protected model: Model<T>;
  protected data: Partial<T>[];

  constructor(model: Model<T>, data: Partial<T>[]) {
    this.model = model;
    this.data = data;
  }

  protected async clearCollection() {
    try {
      await this.model.deleteMany({});
      console.log(`Cleared ${this.model.modelName} collection`);
    } catch (error) {
      console.error(`Error clearing ${this.model.modelName} collection:`, error);
    }
  }

  // You can use it for data processing
  protected preDataInsertion(): void | Promise<void> {

  }

  protected async callPreMethods(): Promise<void> {
    return Promise.resolve(); // Resolves the promise immediately
  }

  protected async insertData() {
    try {
      await this.callPreMethods();
      const insertedData = await this.model.insertMany(this.data);
      console.log(`${this.model.modelName} data seeded successfully`);
      return insertedData;
    } catch (error) {
      console.error(`Error inserting data into ${this.model.modelName} collection:`, error);
      return [];
    }
  }

  public async run() {
    await this.clearCollection();
    const data = await this.insertData();
    console.log("##################################");
    console.log(data);
  }
}