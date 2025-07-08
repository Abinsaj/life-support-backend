import uploadImage from "../config/cloudinaryConfig.js"
import AppError from "../utils/AppError.js"

export default class LiveClassService {
  constructor(liveClassRepository,authRepository ) {
    this.liveClassRepository = liveClassRepository
    this.authRepository = authRepository
  }

  async createLiveClass(liveClassData) {
    const instructor = await this.authRepository.findById(liveClassData.instructorId)
    if (!instructor) {
      throw new AppError("Instructor not found", 404)
    }

    if (instructor.role !== "doctor" && instructor.role !== "admin") {
      throw new AppError("Only doctors can create live classes", 403)
    }
    const upload = await uploadImage(liveClassData.image);
    liveClassData.image = upload.secure_url


    const liveClass = await this.liveClassRepository.create(liveClassData)

    return await this.liveClassRepository.findById(liveClass._id)
  }

  async getAllLiveClasses() {
    return await this.liveClassRepository.findAll()
  }
}
