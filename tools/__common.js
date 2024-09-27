module.exports = {
  sleep : function(ms)
  {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {}
  },
};