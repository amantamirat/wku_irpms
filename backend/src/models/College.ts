import { Schema, model, Document } from 'mongoose';
import { ICollege} from '@shared/models/College';


interface ICollegeModel extends Omit<ICollege, '_id'>, Document { }

const collegeSchema = new Schema<ICollegeModel>({
  name: { type: String, unique: true }
});

const College = model<ICollegeModel>('College', collegeSchema);

export default College;