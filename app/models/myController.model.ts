import * as mongoose from 'mongoose';
import myInterfaces from '../interfaces/myController.interface';

const myControllerPostSchema = new mongoose.Schema({
    id: Number,
    name: String
})

const myControllerModel = mongoose.model<myInterfaces & mongoose.Document>('myController', myControllerPostSchema);

export default myControllerModel;