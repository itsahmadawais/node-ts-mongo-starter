import 'module-alias/register';
import dotenv from "dotenv";
dotenv.config();

import app from "@/app";
import Env from '@/env/Env';


console.log(require.resolve('@/routes'));

const PORT = Env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});