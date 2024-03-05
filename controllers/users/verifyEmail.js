const verifyEmail = async (req, res) => {
  try {
    const token = req.params.verificationToken;
    const user = await service.getUser({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Not found user" });
    } else {
      await service.updateUserVerification(user.id);
      res.status(200).json({ message: "Verification successful" });
    }
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};
