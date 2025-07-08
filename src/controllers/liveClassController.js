import asyncHandler from "../middlewares/asyncHandler.js"

export default class LiveClassController {
  static createLiveClass = (liveClassService) =>
    asyncHandler(async (req, res) => {
        console.log(req.body,req.file ,'this is the data we got here in bacjkend')
      const liveClassData = {
        ...req.body,
        image: req.file ? req.file : null,
      }

      const liveClass = await liveClassService.createLiveClass(liveClassData)

      res.status(201).json({
        success: true,
        data: { liveClass },
      })
    })

  static getAllLiveClasses = (liveClassService) =>
    asyncHandler(async (req, res) => {

      const result = await liveClassService.getAllLiveClasses()

      res.status(200).json({
        success: true,
        results: result,
      })
    })

}
