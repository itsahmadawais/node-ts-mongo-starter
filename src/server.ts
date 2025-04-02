import 'module-alias/register';
import dotenv from "dotenv";
import app from "@/app";

console.log(require.resolve('@/routes'));

const PORT = process.env.PORT || 4001;

dotenv.config();

app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});