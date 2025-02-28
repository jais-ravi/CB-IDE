 googleCallback = (req, res) => {
  passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      res.redirect(`${process.env.CLIENT_URL}/`);
    };
};
