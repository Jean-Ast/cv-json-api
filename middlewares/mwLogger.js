// Logger Middleware
const mwLogger = (req, resp, next) => {
  console.log(
    `Hits in endpoint => ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next();
};

module.exports = mwLogger;
