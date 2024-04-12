import express from 'express';
import cors from 'cors';
import { errorHandlerMiddleware } from './middleware/error-handler.js'
import { notFound } from './middleware/notFound.js'
import Router from './route/equipmentRouter.js'
const app = express();


app.use(cors());
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(errorHandlerMiddleware)
// app.use(notFound)
app.use('/', Router);
// app.route('/get').get((req, res) => {
//   res.status(200).end('<h1>Hello World!</h1><hr>')
// })
app.get((req, res) => {
  res.send("task manager")
})
// app.listen(env.PORT, () =>
//   console.log(`Server is live @ ${env.HOST_URL}`),
// );
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log(' I am running  http://localhost:8080')
})