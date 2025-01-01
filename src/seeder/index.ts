import connectDB, { disconnectFromDB } from '../configs/dbConfig';

// import AdminSeeder from './AdminSeeder';

class SeederRunner {
  private seeders: any[];

  constructor(seeders: any[]) {
    this.seeders = seeders;
  }

  public async run() {
    try {
      // Connect to the database
      await connectDB();

      // Run all seeders
      for (const Seeder of this.seeders) {
        const seederInstance = new Seeder();
        await seederInstance.run();
      }

      console.log('Seeding completed');
    } catch (error) {
      console.error('Seeding error:', error);
      process.exit(1);
    } finally {
      // Disconnect from the database
      await disconnectFromDB();
    }
  }
}

//Add More Seeders here
const seeders = [
    // AdminSeeder
];

const seederRunner = new SeederRunner(seeders);

seederRunner.run()
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });