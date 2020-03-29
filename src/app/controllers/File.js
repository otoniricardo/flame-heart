class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    return res.json({ name, path });
  }
}
export default new FileController();
