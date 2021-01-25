import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


const UserSchema = new Schema({
    username : String,
    hashedPassword: String
});
//인스턴스 메서드 작성. 화살표 함수가 아닌 function 키워드로 구현해야함. 함수 내부에서 this에 접근해야 하기 때문에. this는 문서 인스턴스를 가르킨다.
UserSchema.methods.setPassword = async function(password) {
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

UserSchema.methods.generateToken = function() {
    const token = jwt.sign(
        //첫 번쨰 파라미터는 토큰 안에 집어넣고 싶은 데이터를 넣는다.
        {
            _id: this.id,
            username: this.username
        },
        process.env.JWT_SECRET, //두번째 파라미터는 비밀키
        {
            expiresIn: '7d', //7일간만 유효하다
        }
    )
    return token;
}

//스태틱 메서드 작성
//this는 모델을 가르킨다.
//여기서 this는 User 가르킴.
UserSchema.statics.findByUsername = function(username) {
    return this.findOne({username});
}

//응답할 데이터에서 hashedPassword 필드 제거
UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

const User = mongoose.model('User', UserSchema);
export default User;