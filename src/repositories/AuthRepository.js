import BaseRepository from "./BaseRepository.js"

export default class AuthRepository extends BaseRepository {
  constructor(UserModel) {
    super(UserModel)
  }

  async findByEmail(email) {
    return await this.model.findOne({ email })
  }

}
